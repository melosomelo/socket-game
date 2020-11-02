import { useState, useEffect } from "react";
import socket from "../socket";
import moveRacket from "../utils/moveRacket";
import useInterval from "./useInterval";

function useRacketMovement() {
  const [playerLeftOffset, setPlayerLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });

  const [
    playerDirection,
    setPlayerDirection,
  ] = useState<RacketDirection | null>(null);

  const [oponentLeftOffset, setOponentLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });

  useEffect(() => {
    document.onkeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          setPlayerDirection("left");
          break;
        case "ArrowRight":
          setPlayerDirection("right");
          break;
      }
    };

    socket.on("other player movement", (direction: RacketDirection) => {
      moveRacket(direction, setOponentLeftOffset, false);
    });
  }, []);

  useInterval(() => {
    if (playerDirection !== null) {
      moveRacket(playerDirection, setPlayerLeftOffset, true);
    }
  }, 1000 / 24);

  return { playerLeftOffset, oponentLeftOffset };
}

export default useRacketMovement;
