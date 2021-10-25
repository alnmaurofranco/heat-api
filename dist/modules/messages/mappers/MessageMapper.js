"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageMapper = void 0;

class MessageMapper {
  static async toPersistence(message) {
    return {
      id: message.id,
      text: message.text,
      user_id: message.user_id,
      createdAt: message.createdAt
    };
  }

  static toDTO(message) {
    return {
      id: message.id,
      text: message.text,
      user_id: message.user_id,
      createdAt: message.createdAt,
      user: message.user
    };
  }

}

exports.MessageMapper = MessageMapper;