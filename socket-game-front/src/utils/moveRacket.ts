// function that handles keypresses and moves the racket's rectangle
function moveRacket(
  event: KeyboardEvent,
  setLeftOffset: React.Dispatch<React.SetStateAction<number>>
) {
  switch (event.key) {
    case "ArrowLeft":
      console.log("Moving left");
      setLeftOffset((prevState) => prevState - 8);
      break;
    case "ArrowRight":
      console.log("Moving right");
      setLeftOffset((prevState) => prevState + 8);
      break;
  }
}

export default moveRacket;
