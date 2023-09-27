import express from "express";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);
const port = 3000;

app.get("/", (_, res) => {
  res.send("hello world");
});

httpServer.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
