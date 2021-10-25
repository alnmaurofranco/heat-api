"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileUser = void 0;

class ProfileUser {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    user_id
  }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists.");
    }

    return user;
  }

}

exports.ProfileUser = ProfileUser;