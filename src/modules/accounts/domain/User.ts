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

  public static create({ name, login, avatar_url, github_id }: User) {
    const user = new User({ name, login, avatar_url, github_id });

    return user;
  }
}

export { User };
