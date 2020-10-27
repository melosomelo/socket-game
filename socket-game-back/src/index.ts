import express from "express";
import http from "http";
import socketio from "socket.io";

import websockets from "./websockets";

const app = express();

const server = http.createServer(app);
const io = socketio(server);

let connectedPlayers = 0;

io.on("connection", (socket) => {
  console.log(connectedPlayers);
  if (connectedPlayers === 0) {
    io.emit("player 1 connected");
    //assigning the color of the first player
    socket.emit("assign color", "red");
    connectedPlayers += 1;
  } else if (connectedPlayers === 1) {
    io.emit("player 2 connected");
    socket.emit("assign color", "blue");
    connectedPlayers += 1;
  } else {
    socket.emit("match is full");
  }

  socket.on("match start", () => {
    console.log("match is starting!");
    io.emit("match start");
  });

  socket.on("disconnect", () => {
    io.emit("player disconnected!");
    connectedPlayers -= 1;
  });
});

app.use((req, res) => {
  res.send("<h1>eai!</h1>");
});

server.listen(5000);
