import { BallDirection } from "../global";

function setBallInitialDirection(): BallDirection {
  let direction: BallDirection = {
    y: null,
    x: null,
  };

  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    direction.y = "down";
  } else {
    direction.y = "up";
  }

  randomNumber = Math.random();
  if (randomNumber < 0.5) {
    direction.x = "right";
  } else {
    direction.x = "left";
  }
  return direction;
}

export default setBallInitialDirection;
