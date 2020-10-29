import React, { useState, useEffect, useContext } from "react";
import { Wrapper, Score, Rectangle } from "./styles";
import socket from "../../socket";

import moveRacket from "../../utils/moveRacket";
import { Context as MovementContext } from "../../context/MovementContext";

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
  const { queueMovement } = useContext(MovementContext);

  useEffect(() => {
    if (controlledByPlayer) {
      document.onkeydown = (event) => {
        let payload: RacketMovement = {
          event,
          setLeftOffset,
          emitSocket: false,
        };

        const movement: Movement<RacketMovement> = {
          movementHandler: moveRacket,
          payload,
        };

        const isMovement =
          event.key === "ArrowLeft" || event.key === "ArrowRight";
        //we need to check queueMovement because it's an optional propert in the context props interface
        if (queueMovement && isMovement) {
          queueMovement(movement);
        }
        //moveRacket({ event, setLeftOffset, emitSocket: true });
      };
    }

    socket.on("other player movement", (direction: Direction) => {
      if (!controlledByPlayer) {
        const keydownEvent = new KeyboardEvent("onkeydown", {
          key: direction === "left" ? "ArrowLeft" : "ArrowRight",
        });

        //moveRacket({ event: keydownEvent, setLeftOffset, emitSocket: false });

        if (queueMovement) {
          queueMovement({
            movementHandler: moveRacket,
            payload: {
              event: keydownEvent,
              setLeftOffset,
              emitSocket: true,
            },
          });
        }
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
