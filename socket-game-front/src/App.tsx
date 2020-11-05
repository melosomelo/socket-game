import React, { useEffect, useState } from "react";
import socket from "./socket";

import Loading from "./views/Loading/Loading";
import Game from "./views/Game/Game";
import PlayerOneConnected from "./views/PlayerOneConnected/PlayerOneConnected";
import BothPlayersConnected from "./views/BothPlayersConnected/BothPlayersConnected";
import GameOver from "./views/GameOver/GameOver";
import PlayerDisconnected from "./views/PlayerDisconnected/PlayerDisconnected";

type GameStatus =
  | "Loading..." //client is talking to the server in order to see in which state the match is
  | "Player 1 connected"
  | "Player 2 connected"
  | "Start"
  | "Over"
  | "Player disconnected";

function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("Loading...");
  const [playerColor, setPlayerColor] = useState<string | null>(null);
  const [ballDirection, setBallDirection] = useState<BallDirection | null>(
    null
  );

  const [winner, setWinner] = useState<null | string>(null);

  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

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

    socket.on("other player disconnected", () => {
      setGameStatus("Player disconnected");
    });

    socket.on("game over", (winnerColor: string) => {
      console.log(winnerColor);
      setWinner(winnerColor);
      setGameStatus("Over");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (playerScore === 5) {
      socket.emit("game over", playerColor);
    }
  }, [playerScore, opponentScore]);

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
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
        opponentScore={opponentScore}
        setOpponentScore={setOpponentScore}
      />
    );
  } else if (gameStatus === "Over") {
    return (
      <GameOver winner={winner as string} playerColor={playerColor as string} />
    );
  } else if (gameStatus === "Player disconnected") {
    return <PlayerDisconnected />;
  }

  return <h1>EAi</h1>;
}

export default App;
