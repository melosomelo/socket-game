import React, { useState } from "react";
import { Wrapper, Score, Rectangle } from "./styles";

interface Props {
  color: string;
  controlledByPlayer: boolean;
  scorePosition: "topLeft" | "bottomRight";
  wrapperPosition: "top" | "bottom";
  leftOffset: number;
  score: number;
}

const Racket: React.FC<Props> = ({
  color,
  controlledByPlayer,
  scorePosition,
  wrapperPosition,
  leftOffset,
  score,
}) => {
  return (
    <Wrapper wrapperPosition={wrapperPosition}>
      <Score scoreColor={color} scorePosition={scorePosition}>
        {score}
      </Score>
      <Rectangle
        rectangleColor={color}
        left={leftOffset}
        wrapperPosition={wrapperPosition}
      />
    </Wrapper>
  );
};

export default Racket;
