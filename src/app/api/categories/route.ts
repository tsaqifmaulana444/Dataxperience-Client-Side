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

    if (!data.name) {
      return NextResponse.json({ message: 'Invalid input. category name are required.' })
    }

    const newCategory = await prisma.categories.create({
      data: {
        name: data.name,
      },
    })

    return NextResponse.json({ message: 'Category created successfully', Category: newCategory })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ message: 'Internal Server Error' })
  }
}
