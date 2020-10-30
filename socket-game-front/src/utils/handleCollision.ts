type Direction = "left" | "right" | "up" | "down";

function oppositeDirection(direction: Direction) {
  switch (direction) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "up":
      return "down";
    case "down":
      return "up";
  }
}

function handleCollision(
  direction: BallDirection,
  setDirection: React.Dispatch<React.SetStateAction<BallDirection>>,
  leftOffset: number,
  setLeftOffset: React.Dispatch<React.SetStateAction<number>>,
  topOffset: number,
  setTopOffset: React.Dispatch<React.SetStateAction<number>>
) {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  //check if has horizontal collision
  const hasHorizontalCollision =
    (direction.x === "left" && leftOffset === 0) ||
    (direction.x === "right" && leftOffset === clientWidth - 42);
  //check if has vertical collision
  const hasVerticalCollision =
    (direction.y === "up" && topOffset === 0) ||
    (direction.y === "down" && topOffset === clientHeight - 42);

  if (hasVerticalCollision) {
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
