import { Request, Response } from "express";
import { ProfileUser } from "./ProfileUser";

class ProfileUserController {
  constructor(private readonly profileUser: ProfileUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request;

      const result = await this.profileUser.execute({ user_id });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ProfileUserController };
