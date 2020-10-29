import React, { createContext, useEffect, useState, useMemo } from "react";

import useInterval from "../hooks/useInterval";

// This component is responsible for moving the parts of the game.
// The components that want to move themselves need to speak to this component and queue their movement.
// This component sets an interval in which it executes the first movement on the queue.
// This approach was taken in order to make the movement seem smoother.
// I got inspiration from this post on StackOverflow: https://stackoverflow.com/questions/29118791/how-to-move-an-element-via-arrow-keys-continuously-smoothly

interface Context {
  queueMovement: (mov: Movement<any>) => void;
}

const Context = createContext<Partial<Context>>({});

const MovementProvider: React.FC = ({ children }) => {
  const [movements, setMovements] = useState<Movement<any>[]>([]);

  useInterval(() => {
    if (movements.length > 0) {
      const nextMovement = movements[0];
      nextMovement.movementHandler(nextMovement.payload);
      setMovements((prevState) => {
        const newState = [...prevState];
        newState.shift();
        return newState;
      });
    }
  }, 1000 / 24);

  function queueMovement(movement: Movement<any>) {
    setMovements((prevState) => [movement, ...prevState]);
  }

  return (
    <Context.Provider value={{ queueMovement }}>{children}</Context.Provider>
  );
};

export { Context, MovementProvider };
