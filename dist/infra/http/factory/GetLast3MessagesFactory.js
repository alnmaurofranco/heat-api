"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLast3MessagesFactory = void 0;

var _PrismaMessagesRepository = require("../../../modules/messages/repositories/prisma/PrismaMessagesRepository");

var _GetLast3Messages = require("../../../modules/messages/useCases/GetLast3Messages/GetLast3Messages");

var _GetLast3MessagesController = require("../../../modules/messages/useCases/GetLast3Messages/GetLast3MessagesController");

const GetLast3MessagesFactory = () => {
  const messagesRepository = new _PrismaMessagesRepository.PrismaMessagesRepository();
  const getLast3Messages = new _GetLast3Messages.GetLast3Messages(messagesRepository);
  const controller = new _GetLast3MessagesController.GetLast3MessagesController(getLast3Messages);
  return controller;
};

exports.GetLast3MessagesFactory = GetLast3MessagesFactory;