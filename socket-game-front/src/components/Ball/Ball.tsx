import React, { useState, useEffect } from "react";

import { Ball } from "./styles";
import useInterval from "../../hooks/useInterval";
import moveBall from "../../utils/moveBall";

/* When the game first starts, we need to set a few things: 
  1. The direction the ball will first move (up or down)
  2. The angle in which the ball will go to that direction. This can be at max 45deg, be that to the left 
  or right.
  */

const BallComponent: React.FC = () => {
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

  console.log(leftOffset, topOffset);

  useInterval(() => {
    moveBall(direction, setLeftOffset, setTopOffset);
  }, 1000 / 24);

  return <Ball left={leftOffset} top={topOffset} />;
};

export default BallComponent;
