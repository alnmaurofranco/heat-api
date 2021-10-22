import { Request, Response } from "express";
import { GetLast3Messages } from "./GetLast3Messages";

class GetLast3MessagesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    try {
      const getLast3Messages = new GetLast3Messages();
      const result = await getLast3Messages.execute();

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { GetLast3MessagesController };
