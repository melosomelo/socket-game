import socket from "../socket";

/* This function deals with the moving of the rackets, be it the one controlled by the player or not. 
  Since we're dealing with both cases, we should only emit the socket when we're capturing the player 
  pressing the arrow keys. Therefore, we need the 'emitSocket' parameter.
*/

function moveRacket(
  event: KeyboardEvent,
  setLeftOffset: React.Dispatch<React.SetStateAction<number>>, //the setState function returned by the hook.
  emitSocket = true
) {
  switch (event.key) {
    //still no validation for the limits of the viewport
    case "ArrowLeft":
      //if moving left, then we need to decrease offset
      setLeftOffset((prevState) => prevState - 12);
      if (emitSocket) {
        socket.emit("move racket", "left");
      }
      break;
    case "ArrowRight":
      //if moving right, we need to increase it
      setLeftOffset((prevState) => prevState + 12);
      if (emitSocket) {
        socket.emit("move racket", "right");
      }
      break;
  }
}

export default moveRacket;
