import { useState, useEffect } from "react";

import useInterval from "../hooks/useInterval";

import moveBall from "../utils/moveBall";
import handleCollision from "../utils/handleCollision";
import socket from "../socket";

type setBallDirectionFN = React.Dispatch<React.SetStateAction<BallDirection>>;

//outsorces the logic behind the ball movement
function useBallMovement(
  ballDirection: BallDirection,
  setBallDirection: React.Dispatch<React.SetStateAction<BallDirection | null>>,
  playerLeftOffset: number,
  oponentLeftOffset: number,
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>,
  setOpponentScore: React.Dispatch<React.SetStateAction<number>>
) {
  //setting its initial position
  const [leftOffset, setLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 42) / 2;
  });
  const [topOffset, setTopOffset] = useState(() => {
    //95
    //document.documentElement.clientHeight - 95 + 42
    return (document.documentElement.clientHeight - 42) / 2;
  });

  const [ballMovements, setBallMovements] = useState(0);

  useEffect(() => {
    socket.on("move ball", () => {
      setBallMovements((prevState) => prevState + 1);
    });
  }, []);

  useInterval(() => {
    if (
      ballDirection.x !== null &&
      ballDirection.y !== null &&
      ballMovements !== 0
    ) {
      moveBall(ballDirection, setLeftOffset, setTopOffset);
      handleCollision(
        ballDirection,
        setBallDirection as setBallDirectionFN,
        leftOffset,
        topOffset,
        playerLeftOffset,
        oponentLeftOffset,
        setPlayerScore,
        setOpponentScore,
        setLeftOffset,
        setTopOffset
      );
    }
  }, 1000 / 24);

  return { leftOffset, topOffset };
}

export default useBallMovement;
