import axios from "axios";
import { sign } from "jsonwebtoken";
import { authConfig } from "@config/auth";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "@modules/accounts/domain/User";

interface IAccessTokenResponse {
  access_token: string;
}

interface IGithubUserDTO {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

type AuthenticateUserRequest = {
  code: string;
};

type AuthenticateUserResponse = {
  user: User;
  token: string;
};

class AuthenticateUser {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    code,
  }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const url = "https://github.com/login/oauth/access_token";

    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      });

    const { data: githubUserResponse } = await axios.get<IGithubUserDTO>(
      "https://api.github.com/user",
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    const { id, name, login, avatar_url } = githubUserResponse;

    let user = await this.usersRepository.findByGitHubId(id);

    if (!user) {
      user = await this.usersRepository.create({
        name,
        login,
        github_id: id,
        avatar_url,
      });
    }

    const token = sign(
      {
        user: {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
        },
      },
      authConfig.secret,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { user, token };
  }
}

export { AuthenticateUser };
