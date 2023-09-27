import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const port = 3000;
const io = new Server(httpServer);

app.get("/", (_, res) => {
  res.send("hello world");
});

io.on("connection", (socket) => {
  console.log("connected");
});

httpServer.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
