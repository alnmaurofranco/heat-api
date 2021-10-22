import { PrismaMessagesRepository } from "@modules/messages/repositories/prisma/PrismaMessagesRepository";
import { GetLast3Messages } from "@modules/messages/useCases/GetLast3Messages/GetLast3Messages";
import { GetLast3MessagesController } from "@modules/messages/useCases/GetLast3Messages/GetLast3MessagesController";

const GetLast3MessagesFactory = () => {
  const messagesRepository = new PrismaMessagesRepository();

  const getLast3Messages = new GetLast3Messages(messagesRepository);
  const controller = new GetLast3MessagesController(getLast3Messages);

  return controller;
};

export { GetLast3MessagesFactory };
