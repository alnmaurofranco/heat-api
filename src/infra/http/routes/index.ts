import { Router } from "express";
import { GetLast3MessagesController } from "../../../modules/accounts/useCases/GetLast3Messages/GetLast3MessagesController";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ProfileUserController } from "../../../modules/accounts/useCases/ProfileUser/ProfileUserController";
import { CreateMessageFactory } from "../factory/CreateMessageFactory";
import { AuthenticateUserFactory } from "../factory/AuthenticateUserFactory";

const getLast3MessagesController = new GetLast3MessagesController();
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

router.get("/messages/last3", getLast3MessagesController.handle);

router.get("/profile", EnsureAuthenticated, profileUserController.handle);

export { router };
