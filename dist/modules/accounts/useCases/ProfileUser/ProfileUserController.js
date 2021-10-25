"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileUserController = void 0;

class ProfileUserController {
  constructor(profileUser) {
    this.profileUser = profileUser;
  }

  async handle(request, response) {
    try {
      const {
        user_id
      } = request;
      const result = await this.profileUser.execute({
        user_id
      });
      return response.json(result);
    } catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }

}

exports.ProfileUserController = ProfileUserController;