import { io } from "@infra/http/app";

import { Message } from "@modules/messages/domain/Message";
import { IMessagesRepository } from "@modules/messages/repositories/IMessagesRepository";

type CreateMessageRequest = {
  text: string;
  user_id: string;
};

type CreateMessageResponse = Message;

class CreateMessage {
  constructor(private readonly messagesRepository: IMessagesRepository) {}

  async execute({
    text,
    user_id,
  }: CreateMessageRequest): Promise<CreateMessageResponse> {
    const message = await this.messagesRepository.create({ text, user_id });

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
