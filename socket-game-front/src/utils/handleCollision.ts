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
  opponentLeftOffset: number
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

  const collisionWithRackets = calculateCollisionsWithRackets(
    direction,
    ballLeftOffset,
    ballTopOffset,
    playerLeftOffset,
    opponentLeftOffset,
    clientHeight
  );

  if (hasVerticalCollision || collisionWithRackets) {
    setDirection((prevState) => ({
      ...prevState,
      y: prevState.y === "down" ? "up" : "down",
    }));
  }

  if (hasHorizontalCollision) {
    setDirection((prevState) => ({
      ...prevState,
      x: prevState.x === "left" ? "right" : "left",
    }));
  }
}

export default handleCollision;
