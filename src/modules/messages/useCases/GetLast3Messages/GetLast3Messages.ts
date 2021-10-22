import { Message } from "@modules/messages/domain/Message";
import { IMessagesRepository } from "@modules/messages/repositories/IMessagesRepository";

type GetLast3MessagesResponse = Message[];

class GetLast3Messages {
  constructor(private readonly messagesRepository: IMessagesRepository) {}

  async execute(): Promise<GetLast3MessagesResponse> {
    const messages = await this.messagesRepository.findLastThreeMessages();

    return messages;
  }
}

export { GetLast3Messages };
