import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' })
  }

  const data = await req.json()

  try {
    console.log('Received data:', data)

    // Validate data (add more validation as needed)
    if (!data.name || !data.email || !data.password) {
      return NextResponse.json({ message: 'Invalid input. Name, email, and password are required.' })
    }

    // Check if the user with the provided email already exists
    const existingUser = await prisma.authors.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      return NextResponse.json({ message: 'Email already in use. Please use a different email address.' })
    }

    // Create the new user in the database
    const newUser = await prisma.authors.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })

    return NextResponse.json({ message: 'User created successfully', user: newUser })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ message: 'Internal Server Error' })
  }
}
