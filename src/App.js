import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
