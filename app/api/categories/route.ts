import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, statusId } = body;
  console.log(name, statusId);

  const categories = await prisma.category.create({
    data: {
      name,
      status: {
        connect: {
          id: statusId,
        },
      },
    },
  });

  return NextResponse.json(categories);
}

export async function GET() {
  const statuses = await prisma.category.findMany({
    include: {
      status: true,
    },
  });

  return NextResponse.json(statuses);
}
