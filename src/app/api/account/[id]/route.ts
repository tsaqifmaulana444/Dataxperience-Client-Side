import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

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

  const authors = await prisma.authors.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
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