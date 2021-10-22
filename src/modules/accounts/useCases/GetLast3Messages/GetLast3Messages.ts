import { prisma } from "../../../../infra/prisma";
import { User, Message } from ".prisma/client";

type GetLast3MessagesResponse = (Message & {
  user: User;
})[];

class GetLast3Messages {
  constructor() {}

  async execute(): Promise<GetLast3MessagesResponse> {
    const messages = await prisma.message.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export { GetLast3Messages };
