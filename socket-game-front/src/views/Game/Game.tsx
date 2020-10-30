import React, { useEffect, useState, useMemo } from "react";

import Racket from "../../components/Racket/Racket";
import Ball from "../../components/Ball/Ball";
import useBallMovement from "../../hooks/useBallMovement";

interface Props {
  playerColor: string | null;
}

const Game: React.FC<Props> = ({ playerColor }) => {
  const { leftOffset, topOffset } = useBallMovement();

  return (
    <>
      <Racket
        color={playerColor === "blue" ? "red" : "blue"}
        scorePosition="topLeft"
        wrapperPosition="top"
        controlledByPlayer={false}
      />
      <Ball leftOffset={leftOffset} topOffset={topOffset} />
      <Racket
        color={playerColor as string}
        controlledByPlayer
        scorePosition="bottomRight"
        wrapperPosition="bottom"
      />
    </>
  );
};
export default Game;
