import React, { useState } from "react";
import { Wrapper, Score, Rectangle } from "./styles";

interface Props {
  color: string;
  controlledByPlayer: boolean;
  scorePosition: "topLeft" | "bottomRight";
  wrapperPosition: "top" | "bottom";
  leftOffset: number;
}

const Racket: React.FC<Props> = ({
  color,
  controlledByPlayer,
  scorePosition,
  wrapperPosition,
  leftOffset,
}) => {
  /*
  const [leftOffset, setLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });
  */

  const [
    currentDirection,
    setCurrentDirection,
  ] = useState<null | RacketDirection>(null);

  /*
  useInterval(() => {
    if (currentDirection !== null) {
      moveRacket(currentDirection, setLeftOffset, true);
    }
  }, 1000 / 24);

  useEffect(() => {
    //we only set the key capture event if this racket is controlled by the player
    if (controlledByPlayer) {
      document.onkeydown = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowLeft":
            setCurrentDirection("left");
            break;
          case "ArrowRight":
            setCurrentDirection("right");
            break;
        }
      };
    }

    socket.on("other player movement", (direction: RacketDirection) => {
      if (!controlledByPlayer) {
        moveRacket(direction, setLeftOffset, false);
      }
    });
  }, []);
  */

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
