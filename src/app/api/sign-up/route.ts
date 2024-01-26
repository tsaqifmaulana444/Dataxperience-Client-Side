import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()
const saltRounds = 10

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' })
  }

  const data = await req.json()

  try {
    console.log('Received data:', data)

    if (!data.name || !data.email || !data.password) {
      return NextResponse.json({ message: 'Invalid input. Name, email, and password are required.' })
    }

    const existingUser = await prisma.users.findFirst({
      where: { email: data.email },
    })

    if (existingUser) {
      return NextResponse.json({ message: 'Email already in use. Please use a different email address.' })
    }

    const hashedPassword = await bcrypt.hash(data.password, saltRounds)

    const newUser = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        country: data.country,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ message: 'User created successfully', user: newUser })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ message: 'Internal Server Error' })
  }
}
