import React, { useState, useEffect } from "react";

import Racket from "../../components/Racket/Racket";
import Ball from "../../components/Ball/Ball";
import useBallMovement from "../../hooks/useBallMovement";
import useRacketMovement from "../../hooks/useRacketMovement";
import socket from "../../socket";

interface Props {
  playerColor: string | null;
  ballDirection: BallDirection;
  setBallDirection: React.Dispatch<React.SetStateAction<BallDirection | null>>;
  playerScore: number;
  opponentScore: number;
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>;
  setOpponentScore: React.Dispatch<React.SetStateAction<number>>;
}

const Game: React.FC<Props> = ({
  playerColor,
  ballDirection,
  setBallDirection,
  playerScore,
  opponentScore,
  setPlayerScore,
  setOpponentScore,
}) => {
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
