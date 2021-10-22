import { PrismaMessagesRepository } from "@modules/messages/repositories/prisma/PrismaMessagesRepository";
import { CreateMessage } from "@modules/messages/useCases/CreateMessage/CreateMessage";
import { CreateMessageController } from "@modules/messages/useCases/CreateMessage/CreateMessageController";

const CreateMessageFactory = () => {
  const messagesRepository = new PrismaMessagesRepository();

  const createMessage = new CreateMessage(messagesRepository);
  const controller = new CreateMessageController(createMessage);

  return controller;
};

export { CreateMessageFactory };
