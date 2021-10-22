import { Message } from "@modules/accounts/domain/Message";

class User {
  id?: string;

  name: string;

  avatar_url: string;

  login: string;

  github_id: number;

  messages?: Message[];

  private constructor({ name, login, avatar_url, github_id }: User) {
    return Object.assign(this, {
      name,
      login,
      avatar_url,
      github_id,
    });
  }
}

export { User };
