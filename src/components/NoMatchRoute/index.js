import React from 'react';
import {
  Link
} from 'react-router-dom'

const NoMatchRoute = ({ location }) => (
  <div>
    <h1>Not Found</h1>
    <p>The requested URL {location.pathname} was not found on this server.----->> <Link to="/" >返回首页</Link></p>
  </div>
);

export default NoMatchRoute;