import { Response, Request } from "express";
import { CreateMessage } from "./CreateMessage";

type CreateMessageControllerRequest = {
  text: string;
};

class CreateMessageController {
  constructor(private readonly createMessage: CreateMessage) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request;
      const { text } = request.body as CreateMessageControllerRequest;

      const result = await this.createMessage.execute({
        text,
        user_id,
      });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateMessageController };
