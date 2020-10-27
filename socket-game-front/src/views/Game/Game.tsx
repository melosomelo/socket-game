import React, { useEffect, useState } from "react";

import Racket from "../../components/Racket/Racket";
import Ball from "../../components/Ball/Ball";

interface Props {
  playerColor: string | null;
}

const Game: React.FC<Props> = ({ playerColor }) => {
  return (
    <>
      <Racket
        color={playerColor === "blue" ? "red" : "blue"}
        scorePosition="topLeft"
        wrapperPosition="top"
      />
      <Ball />
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
