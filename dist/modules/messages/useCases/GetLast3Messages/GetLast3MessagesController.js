"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLast3MessagesController = void 0;

class GetLast3MessagesController {
  constructor(getLast3Messages) {
    this.getLast3Messages = getLast3Messages;
  }

  async handle(_request, response) {
    try {
      const result = await this.getLast3Messages.execute();
      return response.json(result);
    } catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }

}

exports.GetLast3MessagesController = GetLast3MessagesController;