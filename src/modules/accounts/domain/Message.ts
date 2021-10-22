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

  public static create({ text, user_id }: Message) {
    const message = new Message({ text, user_id });

    return message;
  }
}

export { Message };
