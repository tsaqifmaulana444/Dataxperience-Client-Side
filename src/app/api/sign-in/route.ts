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
    const user = await prisma.authors.findUnique({
      where: { email: data.email }
    })

    if (!user || !bcrypt.compareSync(data.password, user.password)) {
      return NextResponse.json({ message: 'Invalid email or password' })
    }

    // If the user exists and the password is correct, you can generate an authentication token here.

    return NextResponse.json({ message: 'Login successful' })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Internal Server Error' })
  }
}
