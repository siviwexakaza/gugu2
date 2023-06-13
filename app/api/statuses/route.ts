import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  const status = await prisma.status.create({
    data: {
      name,
    },
  });

  return NextResponse.json(status);
}

export async function GET() {
  const statuses = await prisma.status.findMany();

  return NextResponse.json(statuses);
}
