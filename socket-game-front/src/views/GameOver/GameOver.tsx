import React from "react";

interface Props {
  winner: string;
  playerColor: string;
}

const GameOver: React.FC<Props> = ({ winner, playerColor }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {winner === playerColor ? (
        <h1 style={{ textAlign: "center" }}>You have won! Congratulations!</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>You have lost. Too bad :(</h1>
      )}
    </div>
  );
};

export default GameOver;
