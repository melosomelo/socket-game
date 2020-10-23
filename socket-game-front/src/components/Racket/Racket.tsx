import React, { useState, useEffect } from "react";
import { Wrapper, Score, Rectangle } from "./styles";

import moveRacket from "../../utils/moveRacket";

interface Props {
  color: string;
  controlledByPlayer?: boolean;
  scorePosition: "topLeft" | "bottomRight";
  wrapperPosition: "top" | "bottom";
}

const Racket: React.FC<Props> = ({
  color,
  controlledByPlayer,
  scorePosition,
  wrapperPosition,
}) => {
  const [leftOffset, setLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });

  useEffect(() => {
    document.onkeydown = (event) => {
      moveRacket(event, setLeftOffset);
    };
  }, []);

  return (
    <Wrapper wrapperPosition={wrapperPosition}>
      <Score scoreColor={color} scorePosition={scorePosition}>
        0
      </Score>
      <Rectangle rectangleColor={color} left={leftOffset} />
    </Wrapper>
  );
};

export default Racket;
