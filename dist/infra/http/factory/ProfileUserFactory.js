"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileUserFactory = void 0;

var _PrismaUsersRepository = require("../../../modules/accounts/repositories/prisma/PrismaUsersRepository");

var _ProfileUser = require("../../../modules/accounts/useCases/ProfileUser/ProfileUser");

var _ProfileUserController = require("../../../modules/accounts/useCases/ProfileUser/ProfileUserController");

const ProfileUserFactory = () => {
  const usersRepository = new _PrismaUsersRepository.PrismaUsersRepository();
  const profileUser = new _ProfileUser.ProfileUser(usersRepository);
  const controller = new _ProfileUserController.ProfileUserController(profileUser);
  return controller;
};

exports.ProfileUserFactory = ProfileUserFactory;