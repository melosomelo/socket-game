import { Socket } from "dgram";

interface Player {
  socket: SocketIO.Socket;
  color: string;
}

type GameStatus =
  | "Player 1 connected"
  | "Player 2 connected"
  | "Start"
  | "Waiting for connection"
  | "Over";

type RacketDirection = "left" | "right";

interface BallDirection {
  x: "left" | "right" | null;
  y: "up" | "down" | null;
}
