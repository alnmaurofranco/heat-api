import { User } from ".prisma/client";
import { IUsersRepository } from "../IUsersRepository";
import { prisma } from "@infra/prisma";

class PrismaUsersRepository implements IUsersRepository {
  private repository = prisma.user;

  async findById(user_id: string): Promise<User | null> {
    const user = await this.repository.findFirst({
      where: {
        id: user_id,
      },
    });

    if (!user) return null;

    return user;
  }

  async findByGitHubId(id: number): Promise<User | null> {
    const user = await this.repository.findFirst({
      where: {
        github_id: id,
      },
    });

    if (!user) return null;

    return user;
  }

  async create(user: User): Promise<void> {
    const data = user;

    await this.repository.create({ data });
  }
}

export { PrismaUsersRepository };
