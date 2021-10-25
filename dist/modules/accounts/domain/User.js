"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class User {
  constructor({
    name,
    login,
    avatar_url,
    github_id
  }) {
    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "avatar_url", void 0);

    _defineProperty(this, "login", void 0);

    _defineProperty(this, "github_id", void 0);

    _defineProperty(this, "messages", void 0);

    return Object.assign(this, {
      name,
      login,
      avatar_url,
      github_id
    });
  }

}

exports.User = User;