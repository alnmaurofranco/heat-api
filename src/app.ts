import "dotenv/config";
import express from "express";
import { router } from "./routes";

const app: express.Application = express();

// Configuration
app.use(express.json());

// Routes
app.get("/", (request, response) =>
  response.send("Welcome to HeatAPI - ✨ Versão 1.0 ✨")
);

app.get("/github", (request, response) =>
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
);

app.use("/api", router);

export { app };
