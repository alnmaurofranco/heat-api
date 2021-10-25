"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserFactory = void 0;

var _PrismaUsersRepository = require("../../../modules/accounts/repositories/prisma/PrismaUsersRepository");

var _AuthenticateUser = require("../../../modules/accounts/useCases/AuthenticateUser/AuthenticateUser");

var _AuthenticateUserController = require("../../../modules/accounts/useCases/AuthenticateUser/AuthenticateUserController");

const AuthenticateUserFactory = () => {
  const usersRepository = new _PrismaUsersRepository.PrismaUsersRepository();
  const authenticateUser = new _AuthenticateUser.AuthenticateUser(usersRepository);
  const controller = new _AuthenticateUserController.AuthenticateUserController(authenticateUser);
  return controller;
};

exports.AuthenticateUserFactory = AuthenticateUserFactory;