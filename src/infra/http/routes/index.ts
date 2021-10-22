import { Router } from "express";
import { AuthenticateUserController } from "../../../modules/accounts/useCases/AuthenticateUser/AuthenticateUserController";
import { CreateMessageController } from "../../../modules/accounts/useCases/CreateMessage/CreateMessageController";
import { GetLast3MessagesController } from "../../../modules/accounts/useCases/GetLast3Messages/GetLast3MessagesController";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ProfileUserController } from "../../../modules/accounts/useCases/ProfileUser/ProfileUserController";

const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController();
const profileUserController = new ProfileUserController();

const router = Router();

router.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

router.post("/authenticate", authenticateUserController.handle);

router.post("/messages", EnsureAuthenticated, createMessageController.handle);

router.get("/messages/last3", getLast3MessagesController.handle);

router.get("/profile", EnsureAuthenticated, profileUserController.handle);

export { router };
