import React, { useState, useEffect } from "react";

import { Ball } from "./styles";

/* When the game first starts, we need to set a few things: 
  1. The direction the ball will first move (up or down)
  2. The angle in which the ball will go to that direction. This can be at max 45deg, be that to the left 
  or right.
  */

type BallDirection = "up" | "down";

const BallComponent: React.FC = () => {
  const [firstDirection, setFirstDirection] = useState<BallDirection>(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      return "down";
    }
    return "up";
  });

  const [angle, setAngle] = useState(() => {
    //first, right or left?
    const direction = Math.random() < 0.5 ? "right" : "left";
    //now, the angle
    let angle = Math.random() * 45;
    if (direction === "left") angle *= -1;

    return angle;
  });

  return <Ball />;
};

export default BallComponent;
