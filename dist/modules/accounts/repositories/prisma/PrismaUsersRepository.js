"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaUsersRepository = void 0;

var _prisma = require("../../../../infra/prisma");

var _UserMapper = require("../../mappers/UserMapper");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismaUsersRepository {
  constructor() {
    _defineProperty(this, "repository", _prisma.prisma.user);
  }

  async findById(user_id) {
    const user = await this.repository.findFirst({
      where: {
        id: user_id
      }
    });
    if (!user) return null;
    return user;
  }

  async findByGitHubId(id) {
    const user = await this.repository.findFirst({
      where: {
        github_id: id
      }
    });
    if (!user) return null;
    return user;
  }

  async create(user) {
    const data = await _UserMapper.UserMapper.toPersistence(user);
    return await this.repository.create({
      data
    });
  }

}

exports.PrismaUsersRepository = PrismaUsersRepository;