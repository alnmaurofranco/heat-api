"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMessage = void 0;

var _app = require("../../../../infra/http/app");

class CreateMessage {
  constructor(messagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  async execute({
    text,
    user_id
  }) {
    const message = await this.messagesRepository.create({
      text,
      user_id
    });
    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      createdAt: message.createdAt,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url
      }
    };

    _app.io.emit("new_message", infoWS);

    return message;
  }

}

exports.CreateMessage = CreateMessage;