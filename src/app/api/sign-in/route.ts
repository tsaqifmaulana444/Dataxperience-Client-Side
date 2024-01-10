import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email, password } = req.body

  try {
    const user = await prisma.authors.findUnique({
      where: { email },
    })

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    res.status(200).json({ message: 'Login successful' })
  } catch (error) {
    console.error('Login error:', error)
    // res.status(500).json({ message: 'Internal Server Error' })
  }
}
