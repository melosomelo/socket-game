import socket from "../socket";

/* This function deals with the moving of the rackets, be it the one controlled by the player or not. 
  Since we're dealing with both cases, we should only emit the socket when we're capturing the player 
  pressing the arrow keys. Therefore, we need the 'emitSocket' parameter.
*/

function moveRacket(
  direction: RacketDirection,
  setLeftOffset: React.Dispatch<React.SetStateAction<number>>, //the setState function returned by the hook.
  emitSocket = true
) {
  const clientWidth = document.documentElement.clientWidth;
  switch (direction) {
    //still no validation for the limits of the viewport
    case "left":
      //if moving left, then we need to decrease offset
      setLeftOffset((prevState) => {
        if (prevState - 12 < 0) {
          return 0;
        }
        return prevState - 12;
      });
      if (emitSocket) {
        socket.emit("move racket", "left");
      }
      break;
    case "right":
      //if moving right, we need to increase it
      setLeftOffset((prevState) => {
        /* The maximum value for the LeftOffset is clientWidth - 400, here's why: 

          When the game start, the leftOffset is equal to (clientWidth - 400)/2, since 400 is its fixed with. 
          With this value, we can place it exactly in the middle. 

          ----- RACKET (400px) ----- 
          ^ these 5 dashes are equal to (clienWidth - 400)/2. Therefore, when the racket is as far right 
          as it can be, we would only be moving the right 5 dashes to the left, resulting in 10 dashes, which is 
          equal to clientWidth - 400.
        
        */

        if (prevState + 12 > clientWidth - 400) {
          return clientWidth - 400;
        }
        return prevState + 12;
      });
      if (emitSocket) {
        socket.emit("move racket", "right");
      }
      break;
  }
}

export default moveRacket;
