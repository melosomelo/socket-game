import { Socket } from "socket.io";

interface Player {
  socket: SocketIO.Socket;
  color: string;
}

type GameStatus =
  | "Player 1 connected"
  | "Player 2 connected"
  | "Start"
  | "Waiting for connection";

type RacketDirection = "left" | "right";
