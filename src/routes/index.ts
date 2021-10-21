import { Router } from "express";
import { AuthenticateUserController } from "../AuthenticateUserController";
import { CreateMessageController } from "../CreateMessageController";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";

const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();

const router = Router();

router.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

router.post("/authenticate", authenticateUserController.handle);

router.post("/messages", EnsureAuthenticated, createMessageController.handle);

router.use("/users", () => {});

export { router };
