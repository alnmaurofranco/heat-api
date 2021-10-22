import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";

import { Server } from "socket.io";
import { router } from "./routes/index";

const app: express.Application = express();

// Configuration Socket.io
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User connected on socket ${socket.id}`);
});

// Configuration
app.use(express.json());
app.use(cors());

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

export { app, io, serverHttp };
