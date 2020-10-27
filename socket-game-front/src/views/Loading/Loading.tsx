import React from "react";

const Loading: React.FC = () => {
  return (
    <h1
      className="message"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Loading...
    </h1>
  );
};

export default Loading;
