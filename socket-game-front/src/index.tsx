import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { MovementProvider } from "./context/MovementContext";

import GlobalStyles from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <MovementProvider>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </MovementProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
