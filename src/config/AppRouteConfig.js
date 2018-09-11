import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import NoMatchRoute from '../commons/NoMatchRoute';
import Test from '../Test';

const AppRouteConfig = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route component={NoMatchRoute} />
    </Switch>
  </Router>
);

export default AppRouteConfig;