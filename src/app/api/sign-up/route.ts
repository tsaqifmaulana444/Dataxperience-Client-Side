import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.authors.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the user
    const newUser = await prisma.authors.create({
      data: {
        name,
        email,
        role: 1,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Sign-up error:', error);
    console.log('Request Body:', req.body);  // Log the request body for debugging
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
