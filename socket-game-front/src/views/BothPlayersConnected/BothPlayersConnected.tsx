import React from "react";

const BothPlayersConnected: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "310px",
      }}
    >
      <h1 className="message" style={{ marginBottom: "3rem" }}>
        Both players are connected.
      </h1>
      <h1 className="message">Starting game...</h1>
    </div>
  );
};

export default BothPlayersConnected;
