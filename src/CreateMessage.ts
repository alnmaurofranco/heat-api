import { Message } from ".prisma/client";
import { prisma } from "./prisma";

type CreateMessageRequest = {
  text: string;
  user_id: string;
};

type CreateMessageResponse = Message;

class CreateMessage {
  constructor() {}

  async execute({
    text,
    user_id,
  }: CreateMessageRequest): Promise<CreateMessageResponse> {
    const message = await prisma.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    return message;
  }
}

export { CreateMessage };
