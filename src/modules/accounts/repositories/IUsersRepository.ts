import { User } from "../domain/User";

interface IUsersRepository {
  findById(user_id: string): Promise<User | null>;
  findByGitHubId(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
}

export { IUsersRepository };
