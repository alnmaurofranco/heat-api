import { Message } from "@modules/accounts/domain/Message";
import { IMessagesRepository } from "@modules/accounts/repositories/IMessagesRepository";

type GetLast3MessagesResponse = Message[];

class GetLast3Messages {
  constructor(private readonly messagesRepository: IMessagesRepository) {}

  async execute(): Promise<GetLast3MessagesResponse> {
    const messages = await this.messagesRepository.findLastThreeMessages();

    return messages;
  }
}

export { GetLast3Messages };
