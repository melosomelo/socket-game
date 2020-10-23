import React, { useRef } from "react";

import Racket from "../../components/Racket/Racket";

function Game() {
  return (
    <>
      <Racket color="red" scorePosition="topLeft" />
      <Racket color="blue" controlledByPlayer scorePosition="bottomRight" />
    </>
  );
}
export default Game;
