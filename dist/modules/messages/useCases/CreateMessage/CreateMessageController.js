"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMessageController = void 0;

class CreateMessageController {
  constructor(createMessage) {
    this.createMessage = createMessage;
  }

  async handle(request, response) {
    try {
      const {
        user_id
      } = request;
      const {
        text
      } = request.body;
      const result = await this.createMessage.execute({
        text,
        user_id
      });
      return response.json(result);
    } catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }

}

exports.CreateMessageController = CreateMessageController;