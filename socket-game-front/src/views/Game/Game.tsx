import React, { useRef } from "react";

import Racket from "../../components/Racket/Racket";
import Ball from "../../components/Ball/Ball";

function Game() {
  return (
    <>
      <Racket color="red" scorePosition="topLeft" wrapperPosition="top" />
      <Ball />
      <Racket
        color="blue"
        controlledByPlayer
        scorePosition="bottomRight"
        wrapperPosition="bottom"
      />
    </>
  );
}
export default Game;
