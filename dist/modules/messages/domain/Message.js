"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Message {
  constructor({
    text,
    user_id
  }) {
    _defineProperty(this, "id", void 0);

    _defineProperty(this, "text", void 0);

    _defineProperty(this, "user_id", void 0);

    _defineProperty(this, "user", void 0);

    _defineProperty(this, "createdAt", void 0);

    return Object.assign(this, {
      text,
      user_id
    });
  }

}

exports.Message = Message;