import { prisma } from "@infra/prisma";
import { User } from ".prisma/client";

type ProfileUserRequest = {
  user_id: string;
};

type ProfileUserResponse = User | null;

class ProfileUser {
  constructor() {}

  async execute({ user_id }: ProfileUserRequest): Promise<ProfileUserResponse> {
    const user = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      throw new Error("User does not exists.");
    }

    return user;
  }
}

export { ProfileUser };
