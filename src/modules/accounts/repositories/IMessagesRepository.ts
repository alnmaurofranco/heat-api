import { Message } from "../domain/Message";

interface IMessagesRepository {
  findAll(): Promise<Message[]>;
  findLastThreeMessages(): Promise<Message[]>;
  create(message: Message): Promise<Message>;
}

export { IMessagesRepository };
