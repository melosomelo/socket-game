import express from "express";
import http from "http";
import socketio from "socket.io";

import websockets from "./websockets";

const app = express();

const server = http.createServer(app);
const io = socketio(server);

interface Player {
  socket: socketio.Socket;
  color: string;
}

type GameStatus =
  | "Player 1 connected"
  | "Player 2 connected"
  | "Start"
  | "Waiting for connection";

type Direction = "left" | "right";

let connectedPlayers: Array<Player> = [];
let gameStatus: GameStatus = "Waiting for connection";

io.on("connection", (socket) => {
  if (connectedPlayers.length === 0) {
    gameStatus = "Player 1 connected";
    io.emit("player 1 connected");

    //assigning the color of the first player
    socket.emit("assign color", "red");

    connectedPlayers.push({ socket, color: "red" });
  } else if (connectedPlayers.length === 1) {
    io.emit("player 2 connected");
    gameStatus = "Player 2 connected";

    socket.emit("assign color", "blue");

    connectedPlayers.push({
      socket,
      color: "blue",
    });
  } else {
    socket.emit("match is full");
  }

  //player 2 signals that he is connected and the game should start
  socket.on("match start", () => {
    io.emit("match start");
    gameStatus = "Start";
  });

  socket.on("move racket", (direction: Direction) => {
    const otherPlayer = connectedPlayers.find(
      (player) => player.socket.id !== socket.id
    );
    console.log(otherPlayer.socket, socket);

    otherPlayer.socket.emit("other player movement", direction);
  });

  socket.on("disconnect", () => {
    io.emit("player disconnected!");
    /* We need to worry about a disconnect in two cases: 
      1. The game is almost starting. The server is awaiting the socket from the client to officially start 
      the match.

      2. The game has already begun and the players are in the middle of the match. 

      The other cases are not relevant and don't need special care 
      */
    const disconnectedPlayerIndex = connectedPlayers.findIndex(
      (player) => player.socket.id === socket.id
    );
    const [disconnectedPlayer] = connectedPlayers.splice(
      disconnectedPlayerIndex
    );
  });
});

app.use((req, res) => {
  res.send("<h1>eai!</h1>");
});

server.listen(5000);
