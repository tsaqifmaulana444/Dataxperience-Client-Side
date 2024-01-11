import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    return NextResponse.json({ message: 'Logout successful' })
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' })
  }
}
