import React, { useEffect, useState } from "react";
import socket from "./socket";

import Loading from "./views/Loading/Loading";
import Game from "./views/Game/Game";
import PlayerOneConnected from "./views/PlayerOneConnected/PlayerOneConnected";
import BothPlayersConnected from "./views/BothPlayersConnected/BothPlayersConnected";

type GameStatus =
  | "Loading..." //client is talking to the server in order to see in which state the match is
  | "Player 1 connected"
  | "Player 2 connected"
  | "Start";

function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("Loading...");
  const [playerColor, setPlayerColor] = useState<string | null>(null);
  const [ballDirection, setBallDirection] = useState<BallDirection | null>(
    null
  );

  useEffect(() => {
    socket.on("player 1 connected", () => {
      setGameStatus("Player 1 connected");
    });

    socket.on("player 2 connected", () => {
      setGameStatus("Player 2 connected");
    });

    socket.on("assign color", (color: string) => {
      console.log(`The player's color is ${color}`);
      //if the color is blue, then this player is the second one.
      //therefore, he/she will emit a socket to the server signaling that the
      // match should start
      if (color === "blue") {
        socket.emit("match start");
      }
      setPlayerColor(color);
    });

    socket.on("match start", (direction: BallDirection) => {
      setGameStatus("Start");

      setBallDirection(direction);
    });

    socket.on("new ball direction", (direction: BallDirection) => {
      setBallDirection(direction);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (gameStatus === "Loading...") {
    return <Loading />;
  } else if (gameStatus === "Player 1 connected") {
    return <PlayerOneConnected />;
  } else if (gameStatus === "Player 2 connected") {
    return <BothPlayersConnected />;
  } else if (gameStatus === "Start") {
    return (
      <Game
        playerColor={playerColor}
        ballDirection={ballDirection as BallDirection}
        setBallDirection={setBallDirection}
      />
    );
  }

  return <h1>EAi</h1>;
}

export default App;
