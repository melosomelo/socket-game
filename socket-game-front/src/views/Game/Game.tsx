import React, { useState } from "react";

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
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  const { playerLeftOffset, oponentLeftOffset } = useRacketMovement();

  const { leftOffset, topOffset } = useBallMovement(
    ballDirection,
    setBallDirection,
    playerLeftOffset,
    oponentLeftOffset,
    setPlayerScore,
    setOpponentScore
  );

  return (
    <>
      <Racket
        color={playerColor === "blue" ? "red" : "blue"}
        scorePosition="topLeft"
        wrapperPosition="top"
        controlledByPlayer={false}
        leftOffset={oponentLeftOffset}
        score={opponentScore}
      />
      <Ball leftOffset={leftOffset} topOffset={topOffset} />
      <Racket
        color={playerColor as string}
        controlledByPlayer
        scorePosition="bottomRight"
        wrapperPosition="bottom"
        leftOffset={playerLeftOffset}
        score={playerScore}
      />
    </>
  );
};
export default Game;
