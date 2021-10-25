"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserController = void 0;

class AuthenticateUserController {
  constructor(authenticateUser) {
    this.authenticateUser = authenticateUser;
  }

  async handle(request, response) {
    try {
      const {
        code
      } = request.body;
      const result = await this.authenticateUser.execute({
        code
      });
      return response.json(result);
    } catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }

}

exports.AuthenticateUserController = AuthenticateUserController;