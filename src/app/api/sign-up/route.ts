import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' })
  }

  const { name, email, country, password } = req.body

  try {
    console.log('Received data:', { name, email, country, password })

    // Further processing and response handling should be added here

    return NextResponse.json({ message: 'Data received successfully' })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ message: 'Internal Server Error' })
  }
}
