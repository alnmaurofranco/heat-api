"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLast3Messages = void 0;

class GetLast3Messages {
  constructor(messagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  async execute() {
    const messages = await this.messagesRepository.findLastThreeMessages();
    return messages;
  }

}

exports.GetLast3Messages = GetLast3Messages;