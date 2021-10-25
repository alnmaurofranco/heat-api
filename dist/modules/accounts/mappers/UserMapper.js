"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMapper = void 0;

class UserMapper {
  static async toPersistence(user) {
    return {
      id: user.id,
      name: user.name,
      login: user.login,
      avatar_url: user.avatar_url,
      github_id: user.github_id
    };
  }

}

exports.UserMapper = UserMapper;