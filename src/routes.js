import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Team from "./pages/Team";
import Dashboard from "./pages/Dashboard";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/team" exact component={Team} />
    <Redirect from='*' to='/' />
  </Switch>
);

export default Routes;
