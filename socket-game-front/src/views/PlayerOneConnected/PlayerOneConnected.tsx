import React from "react";

const PlayerOneConnected: React.FC = () => {
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
      <h1 className="message" style={{ color: "red", marginBottom: "3rem" }}>
        Red player has connected.
      </h1>
      <h1 className="message" style={{ color: "blue" }}>
        Waiting for blue...
      </h1>
    </div>
  );
};

export default PlayerOneConnected;
