import React, { useState, useEffect } from "react";
import { Wrapper, Score, Rectangle } from "./styles";
import socket from "../../socket";

import moveRacket from "../../utils/moveRacket";

interface Props {
  color: string;
  controlledByPlayer: boolean;
  scorePosition: "topLeft" | "bottomRight";
  wrapperPosition: "top" | "bottom";
}

type Direction = "right" | "left";

const Racket: React.FC<Props> = ({
  color,
  controlledByPlayer,
  scorePosition,
  wrapperPosition,
}) => {
  const [leftOffset, setLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });

  const [acceptSocket, setAcceptSocket] = useState(true);

  useEffect(() => {
    if (controlledByPlayer) {
      document.onkeydown = (event) => {
        moveRacket(event, setLeftOffset);
      };
    }

    socket.on("other player movement", (direction: Direction) => {
      if (!controlledByPlayer) {
        const keydownEvent = new KeyboardEvent("onkeydown", {
          key: direction === "left" ? "ArrowLeft" : "ArrowRight",
        });
        moveRacket(keydownEvent, setLeftOffset, false);
      }
    });
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
