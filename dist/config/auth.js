"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authConfig = void 0;
const authConfig = {
  secret: process.env.JWT_SECRET
};
exports.authConfig = authConfig;