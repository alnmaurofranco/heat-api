"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accountsRouter = void 0;

var _express = require("express");

var _ProfileUserFactory = require("../factory/ProfileUserFactory");

var _EnsureAuthenticated = require("../middlewares/EnsureAuthenticated");

const accountsRouter = (0, _express.Router)();
exports.accountsRouter = accountsRouter;
accountsRouter.get("/profile", _EnsureAuthenticated.EnsureAuthenticated, (request, response) => (0, _ProfileUserFactory.ProfileUserFactory)().handle(request, response));