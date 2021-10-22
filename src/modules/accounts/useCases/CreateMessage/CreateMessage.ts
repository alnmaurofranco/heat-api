import { Message } from ".prisma/client";
import { prisma } from "../../../../infra/prisma";
import { io } from "../../../../infra/http/app";

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

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      createdAt: message.createdAt,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit("new_message", infoWS);

    return message;
  }
}

export { CreateMessage };
