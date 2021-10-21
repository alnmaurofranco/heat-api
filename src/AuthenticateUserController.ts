import { Request, Response } from "express";
import { AuthenticateUser } from "./AuthenticateUser";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { code } = request.body;

      const authenticateUser = new AuthenticateUser();
      const result = await authenticateUser.execute({ code });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };
