import { prisma } from "@infra/prisma";
import { IMessagesRepository } from "../IMessagesRepository";
import { Message } from "@modules/accounts/domain/Message";
import { MessageMapper } from "@modules/accounts/mappers/MessageMapper";

class PrismaMessagesRepository implements IMessagesRepository {
  private repository = prisma.message;

  async findAll(): Promise<Message[]> {
    return await this.repository.findMany();
  }

  async findLastThreeMessages(): Promise<Message[]> {
    return await this.repository.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
  }

  async create(message: Message): Promise<Message> {
    const data = await MessageMapper.toPersistence(message);

    return await this.repository.create({
      data,
      include: {
        user: true,
      },
    });
  }
}

export { PrismaMessagesRepository };
