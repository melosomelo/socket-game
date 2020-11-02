import { useState } from "react";

import useInterval from "../hooks/useInterval";

import moveBall from "../utils/moveBall";
import handleCollision from "../utils/handleCollision";

type setBallDirectionFN = React.Dispatch<React.SetStateAction<BallDirection>>;

function useBallMovement(
  ballDirection: BallDirection,
  setBallDirection: React.Dispatch<React.SetStateAction<BallDirection | null>>
) {
  console.log(ballDirection, setBallDirection);
  const [direction, setDirection] = useState<BallDirection>(() => {
    let direction: BallDirection = {
      y: null,
      x: null,
    };

    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
      direction.y = "down";
    } else {
      direction.y = "up";
    }

    randomNumber = Math.random();
    if (randomNumber < 0.5) {
      direction.x = "right";
    } else {
      direction.x = "left";
    }
    return direction;
  });

  //setting its initial position
  const [leftOffset, setLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 42) / 2;
  });
  const [topOffset, setTopOffset] = useState(() => {
    return (document.documentElement.clientHeight - 42) / 2;
  });

  useInterval(() => {
    moveBall(ballDirection, setLeftOffset, setTopOffset);
    handleCollision(
      ballDirection,
      setBallDirection as setBallDirectionFN,
      leftOffset,
      setLeftOffset,
      topOffset,
      setTopOffset
    );
  }, 1000 / 24);

  return { leftOffset, topOffset };
}

export default useBallMovement;
