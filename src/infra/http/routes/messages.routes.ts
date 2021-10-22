import { Router } from "express";

import { CreateMessageFactory } from "../factory/CreateMessageFactory";
import { GetLast3MessagesFactory } from "../factory/GetLast3MessagesFactory";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";

const messagesRouter = Router();

messagesRouter.post("/", EnsureAuthenticated, (request, response) =>
  CreateMessageFactory().handle(request, response)
);

messagesRouter.get("/last3", (request, response) =>
  GetLast3MessagesFactory().handle(request, response)
);

export { messagesRouter };
