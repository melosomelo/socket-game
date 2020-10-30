import React, { useState, useEffect } from "react";

import { Ball } from "./styles";
import useInterval from "../../hooks/useInterval";
import moveBall from "../../utils/moveBall";
import handleCollision from "../../utils/handleCollision";

/* When the game first starts, we need to set a few things: 
  1. The direction the ball will first move (up or down)
  2. The angle in which the ball will go to that direction. This can be at max 45deg, be that to the left 
  or right.
  */

interface Props {
  leftOffset: number;
  topOffset: number;
}

const BallComponent: React.FC<Props> = ({ leftOffset, topOffset }) => {
  return <Ball left={leftOffset} top={topOffset} />;
};

export default BallComponent;
