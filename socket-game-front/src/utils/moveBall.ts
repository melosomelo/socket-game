function moveBall(
  direction: BallDirection,
  setLeftOffset: React.Dispatch<React.SetStateAction<number>>, //set x coordinate
  setTopOffset: React.Dispatch<React.SetStateAction<number>> //set y coordinate
) {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  switch (direction.x) {
    case "left":
      setLeftOffset((prevState) => {
        if (prevState - 5 < 0) return 0;

        return prevState - 5;
      });
      break;
    case "right":
      setLeftOffset((prevState) => {
        if (prevState + 5 > clientWidth - 42) {
          return clientWidth - 42;
        }

        return prevState + 5;
      });
      break;
  }

  switch (direction.y) {
    case "up":
      setTopOffset((prevState) => {
        if (prevState - 5 < 0) return 0;

        return prevState - 5;
      });
      break;
    case "down":
      setTopOffset((prevState) => {
        if (prevState + 5 > clientHeight - 42) return clientHeight - 42;

        return prevState + 5;
      });
      break;
  }
}

export default moveBall;
