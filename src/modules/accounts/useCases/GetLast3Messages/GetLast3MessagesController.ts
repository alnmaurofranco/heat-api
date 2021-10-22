import { Request, Response } from "express";
import { GetLast3Messages } from "./GetLast3Messages";

class GetLast3MessagesController {
  constructor(private readonly getLast3Messages: GetLast3Messages) {}

  async handle(_request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.getLast3Messages.execute();

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { GetLast3MessagesController };
