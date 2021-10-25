"use strict";

var _app = require("./app");

const port = process.env.PORT || 3333;

_app.serverHttp.listen(port, () => console.log(`Server started on http://localhost:${port} ⚡`));