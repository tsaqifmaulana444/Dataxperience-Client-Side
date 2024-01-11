import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, country, password } = req.body;

  try {
    console.log('Received data:', { name, email, country, password });

    // Further processing and response handling should be added here

    return res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

