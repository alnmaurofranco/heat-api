import { Response, Request } from "express";
import { CreateMessage } from "./CreateMessage";

type CreateMessageControllerRequest = {
  text: string;
  user_id: string;
};

class CreateMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request;
      const { text } = request.body as CreateMessageControllerRequest;

      const createMessage = new CreateMessage();
      const result = await createMessage.execute({
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
