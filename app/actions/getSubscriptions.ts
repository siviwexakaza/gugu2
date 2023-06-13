import prisma from "@/app/libs/prismadb";

const getSubscriptions = async () => {
  try {
    return await prisma.userOnWifiSubscription.findMany();
  } catch (error: any) {
    return null;
  }
};

export { getSubscriptions };
