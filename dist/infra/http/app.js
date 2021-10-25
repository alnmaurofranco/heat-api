"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverHttp = exports.io = exports.app = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _socket = require("socket.io");

var _index = require("./routes/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // Configuration Socket.io

exports.app = app;

const serverHttp = _http.default.createServer(app);

exports.serverHttp = serverHttp;
const io = new _socket.Server(serverHttp, {
  cors: {
    origin: "*"
  }
});
exports.io = io;
io.on("connection", socket => {
  console.log(`User connected on socket ${socket.id}`);
}); // Configuration

app.use(_express.default.json());
app.use((0, _cors.default)()); // Routes

app.get("/", (request, response) => response.send("Welcome to HeatAPI - ✨ Versão 1.0 ✨"));
app.get("/github", (request, response) => response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`));
app.use("/api", _index.router);