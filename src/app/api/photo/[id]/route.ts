import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
const saltRounds = 10

const prisma = new PrismaClient()

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)

  const  data  = await request.json()
  
  const users = await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      profile: data.profile,
      updated_at: new Date(),
    },
  })

  //return response JSON
  return NextResponse.json(
    {
      success: true,
      message: "Data Updated!",
    },
    {
      status: 200,
    }
  )
}