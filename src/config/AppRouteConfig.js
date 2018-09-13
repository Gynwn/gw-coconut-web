import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import NoMatchRoute from '../components/NoMatchRoute';

const AppRouteConfig = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatchRoute} />
    </Switch>
  </Router>
);

export default AppRouteConfig;