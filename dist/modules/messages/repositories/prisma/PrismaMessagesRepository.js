"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaMessagesRepository = void 0;

var _prisma = require("../../../../infra/prisma");

var _MessageMapper = require("../../mappers/MessageMapper");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PrismaMessagesRepository {
  constructor() {
    _defineProperty(this, "repository", _prisma.prisma.message);
  }

  async findAll() {
    return await this.repository.findMany();
  }

  async findLastThreeMessages() {
    return await this.repository.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        user: true
      }
    });
  }

  async create(message) {
    const data = await _MessageMapper.MessageMapper.toPersistence(message);
    return await this.repository.create({
      data,
      include: {
        user: true
      }
    });
  }

}

exports.PrismaMessagesRepository = PrismaMessagesRepository;