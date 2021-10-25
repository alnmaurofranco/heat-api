"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messagesRouter = void 0;

var _express = require("express");

var _CreateMessageFactory = require("../factory/CreateMessageFactory");

var _GetLast3MessagesFactory = require("../factory/GetLast3MessagesFactory");

var _EnsureAuthenticated = require("../middlewares/EnsureAuthenticated");

const messagesRouter = (0, _express.Router)();
exports.messagesRouter = messagesRouter;
messagesRouter.post("/", _EnsureAuthenticated.EnsureAuthenticated, (request, response) => (0, _CreateMessageFactory.CreateMessageFactory)().handle(request, response));
messagesRouter.get("/last3", (request, response) => (0, _GetLast3MessagesFactory.GetLast3MessagesFactory)().handle(request, response));