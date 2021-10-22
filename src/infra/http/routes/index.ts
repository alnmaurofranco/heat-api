import { Router } from "express";

import { AuthenticateUserFactory } from "../factory/AuthenticateUserFactory";
import { CreateMessageFactory } from "../factory/CreateMessageFactory";
import { GetLast3MessagesFactory } from "../factory/GetLast3MessagesFactory";
import { ProfileUserFactory } from "../factory/ProfileUserFactory";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";

const router = Router();

router.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

router.post("/authenticate", (req, res) =>
  AuthenticateUserFactory().handle(req, res)
);

router.post("/messages", EnsureAuthenticated, (req, res) =>
  CreateMessageFactory().handle(req, res)
);

router.get("/messages/last3", (req, res) =>
  GetLast3MessagesFactory().handle(req, res)
);

router.get("/profile", EnsureAuthenticated, (req, res) =>
  ProfileUserFactory().handle(req, res)
);

export { router };
