import socket from "../socket";

function calculateCollisionsWithRackets(
  direction: BallDirection,
  ballLeftOffset: number,
  ballTopOffset: number,
  playerLeftOffset: number,
  oponentLeftOffset: number,
  clientHeight: number
) {
  const hasCollidedWithPlayer =
    ballLeftOffset >= playerLeftOffset && //needs to be within the racket's width
    ballLeftOffset <= playerLeftOffset + 400 &&
    clientHeight - (45 + 92 + ballTopOffset) < 5 && //checks if the ball is vertically on the same level as the racket
    direction.y === "down";
  const hasCollidedWithOpponent =
    ballLeftOffset >= oponentLeftOffset &&
    ballLeftOffset <= oponentLeftOffset + 400 &&
    ballTopOffset - 95 < 5 && //needs to be smaller than 5 cause the balls moves 5px at a time
    direction.y === "up";

  return hasCollidedWithOpponent || hasCollidedWithPlayer;
}

function handleCollision(
  direction: BallDirection,
  setDirection: React.Dispatch<React.SetStateAction<BallDirection>>,
  ballLeftOffset: number,
  ballTopOffset: number,
  playerLeftOffset: number,
  opponentLeftOffset: number,
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>,
  setOpponentScore: React.Dispatch<React.SetStateAction<number>>,
  setBalLeftOffset: React.Dispatch<React.SetStateAction<number>>,
  setBallTopOffset: React.Dispatch<React.SetStateAction<number>>
) {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;

  //collisions with the edges of the screen
  const hasHorizontalCollision =
    (direction.x === "left" && ballLeftOffset === 0) ||
    (direction.x === "right" && ballLeftOffset === clientWidth - 42);
  const hasVerticalCollision =
    (direction.y === "up" && ballTopOffset === 0) ||
    (direction.y === "down" && ballTopOffset === clientHeight - 42);

  //collisions with the rackets
  const collisionWithRackets = calculateCollisionsWithRackets(
    direction,
    ballLeftOffset,
    ballTopOffset,
    playerLeftOffset,
    opponentLeftOffset,
    clientHeight
  );

  if (hasVerticalCollision) {
    /*
    if the ball hit the edges at the top/bottom of the screen, we need to:
     1.increment the score of one of the players (done)
     2.stop it  (done)
     3.replace the ball at the center (done)
     4. talk to the server so that it sends a new direction for the ball for both players (done)
     5. receive answer (done)
     6. start the game again  (done)
    */

    //incrementing score
    if (direction.y === "up") {
      setPlayerScore((prevState) => prevState + 1);
    } else {
      setOpponentScore((prevState) => prevState + 1);
    }

    //stopping the ball
    setDirection(() => ({
      x: null,
      y: null,
    }));

    //placing it at the center
    setBalLeftOffset(() => (clientWidth - 42) / 2);
    setBallTopOffset(() => (clientHeight - 42) / 2);

    //talk to the server so that it sends a new direction
    socket.emit("new ball direction");
  } else if (collisionWithRackets) {
    setDirection((prevState) => ({
      ...prevState,
      y: prevState.y === "down" ? "up" : "down",
    }));
  } else if (hasHorizontalCollision) {
    setDirection((prevState) => ({
      ...prevState,
      x: prevState.x === "left" ? "right" : "left",
    }));
  }
  //the rest is being done in other components
  //receive answer && starting the game again is are being done in the app.tsx component
}

export default handleCollision;
