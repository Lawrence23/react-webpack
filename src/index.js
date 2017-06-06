import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'
import App from './components/App.jsx';
import Home from './components/Home.jsx';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);