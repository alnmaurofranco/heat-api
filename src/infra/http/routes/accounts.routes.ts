import { Router } from "express";

import { ProfileUserFactory } from "../factory/ProfileUserFactory";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";

const accountsRouter = Router();

accountsRouter.get("/profile", EnsureAuthenticated, (request, response) =>
  ProfileUserFactory().handle(request, response)
);

export { accountsRouter };
