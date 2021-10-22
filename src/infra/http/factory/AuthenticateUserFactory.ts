import { PrismaUsersRepository } from "@modules/accounts/repositories/prisma/PrismaUsersRepository";
import { AuthenticateUser } from "@modules/accounts/useCases/AuthenticateUser/AuthenticateUser";
import { AuthenticateUserController } from "@modules/accounts/useCases/AuthenticateUser/AuthenticateUserController";

const AuthenticateUserFactory = () => {
  const usersRepository = new PrismaUsersRepository();

  const authenticateUser = new AuthenticateUser(usersRepository);
  const controller = new AuthenticateUserController(authenticateUser);

  return controller;
};

export { AuthenticateUserFactory };
