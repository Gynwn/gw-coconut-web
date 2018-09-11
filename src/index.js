import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouteConfig from './config/AppRouteConfig';

ReactDOM.render(<AppRouteConfig />, document.getElementById('root'));
registerServiceWorker();
