import { User } from "./User";

class Message {
  id?: string;

  text: string;

  user_id: string;

  user?: User;

  createdAt?: Date;

  private constructor({ text, user_id }: Message) {
    return Object.assign(this, {
      text,
      user_id,
    });
  }
}

export { Message };
