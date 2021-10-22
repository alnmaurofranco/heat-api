import { Router } from "express";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ProfileUserController } from "../../../modules/accounts/useCases/ProfileUser/ProfileUserController";
import { CreateMessageFactory } from "../factory/CreateMessageFactory";
import { AuthenticateUserFactory } from "../factory/AuthenticateUserFactory";
import { GetLast3MessagesFactory } from "../factory/GetLast3MessagesFactory";

const profileUserController = new ProfileUserController();

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

router.get("/profile", EnsureAuthenticated, profileUserController.handle);

export { router };
