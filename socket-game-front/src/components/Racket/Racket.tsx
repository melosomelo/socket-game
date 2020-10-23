import React, { useState, useEffect } from "react";
import { Wrapper, Score, Rectangle } from "./styles";

import moveRacket from "../../utils/moveRacket";

interface Props {
  color: string;
  controlledByPlayer?: boolean;
  scorePosition: "topLeft" | "bottomRight";
}

const Racket: React.FC<Props> = ({
  color,
  controlledByPlayer,
  scorePosition,
}) => {
  const [leftOffset, setLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });

  useEffect(() => {
    console.log("eai");
    document.onkeydown = (event) => {
      moveRacket(event, setLeftOffset);
    };
  }, []);

  return (
    <Wrapper>
      <Score scoreColor={color} scorePosition={scorePosition}>
        0
      </Score>
      <Rectangle rectangleColor={color} left={leftOffset} />
    </Wrapper>
  );
};

export default Racket;
