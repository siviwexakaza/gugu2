import prisma from "@/app/libs/prismadb";

const getOrders = async () => {
  try {
    return await prisma.order.findMany();
  } catch (error: any) {
    return null;
  }
};

const getNewOrders = async () => {
  try {
    return await prisma.order.findMany({
      where: {
        status: {
          name: "Pending",
        },
      },
    });
  } catch (error: any) {
    return null;
  }
};

export { getOrders, getNewOrders };
