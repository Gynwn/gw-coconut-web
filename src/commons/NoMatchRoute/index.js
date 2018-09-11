import React from 'react';
import {
  Link
} from 'react-router-dom'

const NoMatchRoute = () => (
  <div>
    <h1>Error Page</h1>
    <Link to="/" >返回首页</Link>
  </div>
);

export default NoMatchRoute;