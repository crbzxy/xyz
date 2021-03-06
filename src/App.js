import React from 'react';

import "./scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hueso from "../src/views/Hueso"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/" exact>
              <Hueso/>
            </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
