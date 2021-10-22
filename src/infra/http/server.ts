import { serverHttp } from "./app";

const port = process.env.PORT || 3333;

serverHttp.listen(port, () =>
  console.log(`Server started on http://localhost:${port} ⚡`)
);
