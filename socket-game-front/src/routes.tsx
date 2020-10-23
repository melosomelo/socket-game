import React from "react";
import { Switch, Route } from "react-router-dom";

import Game from "./views/Game/Game";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Game />
      </Route>
    </Switch>
  );
}

export default Routes;
