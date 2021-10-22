import { Message } from "@modules/accounts/domain/Message";

class MessageMapper {
  public static async toPersistence(message: Message) {
    return {
      id: message.id,
      text: message.text,
      user_id: message.user_id,
      createdAt: message.createdAt,
    };
  }

  public static toDTO(message: Message) {
    return {
      id: message.id,
      text: message.text,
      user_id: message.user_id,
      createdAt: message.createdAt,
      user: message.user,
    };
  }
}

export { MessageMapper };
