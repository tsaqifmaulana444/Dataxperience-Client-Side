import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)

  await prisma.news.delete({
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

  const authors = await prisma.news.update({
    where: {
      id: id,
    },
    data: {
      title: data.title,
      news_body: data.news_body,
      news_image: data.news_image,
      categories: {
        set: data.category_ids?.map((id: number) => ({ id })) || [], // Make sure to handle category_ids correctly
      },
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