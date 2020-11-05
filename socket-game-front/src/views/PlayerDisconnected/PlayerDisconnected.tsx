import React from "react";

const PlayerDisconnected: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        A player has disconnected. Waiting for another one to connect...
      </h1>
    </div>
  );
};

export default PlayerDisconnected;
