import { Router } from "express";
import { AuthenticateUserFactory } from "../factory/AuthenticateUserFactory";

import { accountsRouter } from "./accounts.routes";
import { messagesRouter } from "./messages.routes";

const router = Router();

router.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

router.post("/authenticate", (request, response) =>
  AuthenticateUserFactory().handle(request, response)
);

router.use("/accounts", accountsRouter);
router.use("/messages", messagesRouter);

export { router };
