import { MessagesRepository } from "@modules/accounts/repositories/prisma/MessagesRepository";
import { CreateMessage } from "@modules/accounts/useCases/CreateMessage/CreateMessage";
import { CreateMessageController } from "@modules/accounts/useCases/CreateMessage/CreateMessageController";

const CreateMessageFactory = () => {
  const messagesRepository = new MessagesRepository();

  const createMessage = new CreateMessage(messagesRepository);
  const controller = new CreateMessageController(createMessage);

  return controller;
};

export { CreateMessageFactory };
