import { BallDirection } from "../global";

function setBallInitialDirection(): BallDirection[] {
  let playerOneDirection: BallDirection = {
    y: null,
    x: null,
  };
  let playerTwoDirection: BallDirection = {
    x: null,
    y: null,
  };

  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    playerOneDirection.y = "down";
    playerTwoDirection.y = "up";
  } else {
    playerOneDirection.y = "up";
    playerTwoDirection.y = "down";
  }

  randomNumber = Math.random();
  if (randomNumber < 0.5) {
    playerOneDirection.x = "right";
    playerTwoDirection.x = "left";
  } else {
    playerOneDirection.x = "left";
    playerTwoDirection.x = "right";
  }
  return [playerOneDirection, playerTwoDirection];
}

export default setBallInitialDirection;
