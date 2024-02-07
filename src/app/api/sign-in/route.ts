import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' })
  }

  const data = await req.json()

  try {
    const user = await prisma.users.findFirst({
      where: { email: data.email },
    })

    if (!user) {
      const author = await prisma.authors.findFirst({
        where: { email: data.email },
      })

      if (!author || !bcrypt.compareSync(data.password, author.password)) {
        return NextResponse.json({ message: 'Invalid email or password' })
      }

      return NextResponse.json({ message: 'Login successful', role: author.role, author })
    }

    if (!bcrypt.compareSync(data.password, user.password)) {
      return NextResponse.json({ message: 'Invalid email or password' })
    }

    return NextResponse.json({ message: 'Login successful', role: user.role, user })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Internal Server Error' })
  }
}
