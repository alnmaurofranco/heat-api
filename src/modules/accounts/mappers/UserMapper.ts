import { User } from "@modules/accounts/domain/User";
class UserMapper {
  public static async toPersistence(user: User) {
    return {
      id: user.id,
      name: user.name,
      login: user.login,
      avatar_url: user.avatar_url,
      github_id: user.github_id,
    };
  }
}

export { UserMapper };
