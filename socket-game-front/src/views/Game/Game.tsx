import React from "react";

import Racket from "../../components/Racket/Racket";
import Ball from "../../components/Ball/Ball";
import useBallMovement from "../../hooks/useBallMovement";
import useRacketMovement from "../../hooks/useRacketMovement";

interface Props {
  playerColor: string | null;
  ballDirection: BallDirection;
  setBallDirection: React.Dispatch<React.SetStateAction<BallDirection | null>>;
}

const Game: React.FC<Props> = ({
  playerColor,
  ballDirection,
  setBallDirection,
}) => {
  const { playerLeftOffset, oponentLeftOffset } = useRacketMovement();

  const { leftOffset, topOffset } = useBallMovement(
    ballDirection,
    setBallDirection,
    playerLeftOffset,
    oponentLeftOffset
  );

  /*
  const [playerLeftOffset, setPlayerLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });

  const [
    playerDirection,
    setPlayerDirection,
  ] = useState<RacketDirection | null>(null);

  const [oponentLeftOffset, setOponentLeftOffset] = useState(() => {
    return (document.documentElement.clientWidth - 400) / 2;
  });

  useEffect(() => {
    document.onkeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          setPlayerDirection("left");
          break;
        case "ArrowRight":
          setPlayerDirection("right");
          break;
      }
    };

    socket.on("other player movement", (direction: RacketDirection) => {
      console.log("player is moving to " + direction);
      moveRacket(direction, setOponentLeftOffset, false);
    });
  }, []);

  useInterval(() => {
    if (playerDirection !== null) {
      moveRacket(playerDirection, setPlayerLeftOffset, true);
    }
  }, 1000 / 24);
  */

  return (
    <>
      <Racket
        color={playerColor === "blue" ? "red" : "blue"}
        scorePosition="topLeft"
        wrapperPosition="top"
        controlledByPlayer={false}
        leftOffset={oponentLeftOffset}
      />
      <Ball leftOffset={leftOffset} topOffset={topOffset} />
      <Racket
        color={playerColor as string}
        controlledByPlayer
        scorePosition="bottomRight"
        wrapperPosition="bottom"
        leftOffset={playerLeftOffset}
      />
    </>
  );
};
export default Game;
