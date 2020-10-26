import React, { useEffect, useRef } from "react";
import io from "socket.io-client";

import Racket from "../../components/Racket/Racket";
import Ball from "../../components/Ball/Ball";

function Game() {
  const socket = io("http://localhost:5000");
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
