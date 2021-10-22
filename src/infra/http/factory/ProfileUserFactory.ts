import { PrismaUsersRepository } from "@modules/accounts/repositories/prisma/PrismaUsersRepository";
import { ProfileUser } from "@modules/accounts/useCases/ProfileUser/ProfileUser";
import { ProfileUserController } from "@modules/accounts/useCases/ProfileUser/ProfileUserController";

const ProfileUserFactory = () => {
  const usersRepository = new PrismaUsersRepository();

  const profileUser = new ProfileUser(usersRepository);
  const controller = new ProfileUserController(profileUser);

  return controller;
};

export { ProfileUserFactory };
