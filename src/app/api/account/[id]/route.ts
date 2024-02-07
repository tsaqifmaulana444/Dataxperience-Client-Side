import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
const saltRounds = 10

const prisma = new PrismaClient()

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)

  await prisma.authors.delete({
    where: {
      id: id,
    },
  })

  return NextResponse.json(
    {
      success: true,
      message: "Category Deleted!",
    },
    {
      status: 200,
    }
  )
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)

  const  data  = await request.json()
  const hashedPassword = await bcrypt.hash(data.password, saltRounds)

  const authors = await prisma.authors.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      updated_at: new Date(),
    },
  })

  //return response JSON
  return NextResponse.json(
    {
      success: true,
      message: "Data Authors Updated!",
      data: authors,
    },
    {
      status: 200,
    }
  )
}