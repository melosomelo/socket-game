// function that handles keypresses and moves the racket's rectangle
function moveRacket(
  event: KeyboardEvent,
  setLeftOffset: React.Dispatch<React.SetStateAction<number>>
) {
  switch (event.key) {
    //still no validation for the limits of the viewport
    case "ArrowLeft":
      //if moving left, then we need to decrease offset
      console.log("Moving left");
      setLeftOffset((prevState) => prevState - 8);
      break;
    case "ArrowRight":
      //if moving right, we need to increase it
      console.log("Moving right");
      setLeftOffset((prevState) => prevState + 8);
      break;
  }
}

export default moveRacket;
