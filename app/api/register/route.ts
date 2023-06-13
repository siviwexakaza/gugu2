import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, firstName, lastName, password, phone, imei } = body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const role = await prisma.role.findMany();
    const status = await prisma.status.findMany();

    if (role.length == 0 || status.length == 0)
      return new NextResponse("Please seed roles and statuses first", {
        status: 403,
      });

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        imei,
        role: {
          connect: { id: role[0].id },
        },
        status: {
          connect: { id: status[0].id },
        },
      },
    });

    return NextResponse.json(user);
  } catch (e: any) {
    return new NextResponse(e.message, { status: 500 });
  }
}
