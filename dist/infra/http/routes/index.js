"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _AuthenticateUserFactory = require("../factory/AuthenticateUserFactory");

var _accounts = require("./accounts.routes");

var _messages = require("./messages.routes");

const router = (0, _express.Router)();
exports.router = router;
router.get("/signin/callback", (request, response) => {
  const {
    code
  } = request.query;
  return response.json(code);
});
router.post("/authenticate", (request, response) => (0, _AuthenticateUserFactory.AuthenticateUserFactory)().handle(request, response));
router.use("/accounts", _accounts.accountsRouter);
router.use("/messages", _messages.messagesRouter);