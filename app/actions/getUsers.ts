import prisma from "@/app/libs/prismadb";

const getUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error: any) {
    return null;
  }
};

const searchUser = async (query: string) => {
  try {
    return await prisma.user.findMany({
      where: {
        OR: [
          {
            email: query,
          },
          {
            phone: query,
          },
        ],
      },
    });
  } catch (error: any) {
    return null;
  }
};

export { getUsers, searchUser };
