import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Room } from "./model/room";

const app = express();
const httpServer = createServer(app);
const port = 3000;
const io = new Server(httpServer);

// 本来はDBで管理するのが好ましい
const rooms: Room[] = [
  { id: 1, messages: [] },
  { id: 2, messages: [] },
  { id: 3, messages: [] },
];

app.get("/", (_, res) => {
  res.send("hello world");
});

app.get("/rooms", (_, res) => {
  res.send(rooms);
});

app.get("/room/:id", (req, res) => {
  const room = rooms.find((room) => `${room.id}` === req.params.id) ?? rooms[0];
  res.send(room);
});

io.on("connection", (socket) => {
  console.log("connected");
});

httpServer.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
