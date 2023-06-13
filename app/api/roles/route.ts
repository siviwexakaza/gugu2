import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  const role = await prisma.role.create({
    data: {
      name,
    },
  });

  return NextResponse.json(role);
}

export async function GET() {
  const roles = await prisma.role.findMany();

  return NextResponse.json(roles);
}
