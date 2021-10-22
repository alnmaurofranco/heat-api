import { User } from "@modules/accounts/domain/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

type ProfileUserRequest = {
  user_id: string;
};

type ProfileUserResponse = User;

class ProfileUser {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({ user_id }: ProfileUserRequest): Promise<ProfileUserResponse> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists.");
    }

    return user;
  }
}

export { ProfileUser };
