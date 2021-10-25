"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMessageFactory = void 0;

var _PrismaMessagesRepository = require("../../../modules/messages/repositories/prisma/PrismaMessagesRepository");

var _CreateMessage = require("../../../modules/messages/useCases/CreateMessage/CreateMessage");

var _CreateMessageController = require("../../../modules/messages/useCases/CreateMessage/CreateMessageController");

const CreateMessageFactory = () => {
  const messagesRepository = new _PrismaMessagesRepository.PrismaMessagesRepository();
  const createMessage = new _CreateMessage.CreateMessage(messagesRepository);
  const controller = new _CreateMessageController.CreateMessageController(createMessage);
  return controller;
};

exports.CreateMessageFactory = CreateMessageFactory;