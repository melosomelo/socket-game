import React, { useState } from "react";

import useInterval from "../hooks/useInterval";

import moveBall from "../utils/moveBall";
import handleCollision from "../utils/handleCollision";

function useBallMovement() {
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
    moveBall(direction, setLeftOffset, setTopOffset);
    handleCollision(
      direction,
      setDirection,
      leftOffset,
      setLeftOffset,
      topOffset,
      setTopOffset
    );
  }, 1000 / 24);

  return { leftOffset, topOffset };
}

export default useBallMovement;
