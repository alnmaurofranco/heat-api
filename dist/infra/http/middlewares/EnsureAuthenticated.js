"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnsureAuthenticated = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = require("../../../config/auth");

const EnsureAuthenticated = (request, response, next) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      errorCode: "token.invalid"
    });
  }

  const [, token] = authToken.split(" ");

  try {
    const {
      sub
    } = (0, _jsonwebtoken.verify)(token, _auth.authConfig.secret);
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).json({
      errorCode: "token.expired"
    });
  }
};

exports.EnsureAuthenticated = EnsureAuthenticated;