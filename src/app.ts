import express from "express";

const app: express.Application = express();

app.use(express.json());

app.get("/", (request, response) => response.send("Welcome"));

export { app };
