"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsonwebtoken = require("jsonwebtoken");

var _auth = require("../../../../config/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticateUser {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    code
  }) {
    const url = "https://github.com/login/oauth/access_token";
    const {
      data: accessTokenResponse
    } = await _axios.default.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      },
      headers: {
        Accept: "application/json"
      }
    });
    const {
      data: githubUserResponse
    } = await _axios.default.get("https://api.github.com/user", {
      headers: {
        authorization: `Bearer ${accessTokenResponse.access_token}`
      }
    });
    const {
      id,
      name,
      login,
      avatar_url
    } = githubUserResponse;
    let user = await this.usersRepository.findByGitHubId(id);

    if (!user) {
      user = await this.usersRepository.create({
        name,
        login,
        github_id: id,
        avatar_url
      });
    }

    const token = (0, _jsonwebtoken.sign)({
      user: {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url
      }
    }, _auth.authConfig.secret, {
      subject: user.id,
      expiresIn: "1d"
    });
    return {
      user,
      token
    };
  }

}

exports.AuthenticateUser = AuthenticateUser;