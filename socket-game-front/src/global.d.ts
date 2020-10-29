//it describes a movement of a part of the game
interface Movement<T> {
  movementHandler: (payload: T) => void;
  payload: T;
}

interface RacketMovement {
  event: KeyboardEvent;
  setLeftOffset: React.Dispatch<React.SetStateAction<number>>;
  emitSocket: boolean;
}
