import { PrismaMessagesRepository } from "@modules/accounts/repositories/prisma/PrismaMessagesRepository";
import { CreateMessage } from "@modules/accounts/useCases/CreateMessage/CreateMessage";
import { CreateMessageController } from "@modules/accounts/useCases/CreateMessage/CreateMessageController";

const CreateMessageFactory = () => {
  const messagesRepository = new PrismaMessagesRepository();

  const createMessage = new CreateMessage(messagesRepository);
  const controller = new CreateMessageController(createMessage);

  return controller;
};

export { CreateMessageFactory };
