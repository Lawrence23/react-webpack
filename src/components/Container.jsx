import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Forms from './Forms.jsx';
import Preview from './Preview.jsx';
require("!style-loader!css-loader!sass-loader!../styles/container.scss");

export default class Container extends React.Component {
  render() {
    return (
      <main className="container-fluid main-content">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/preview' component={Preview}/>
        </Switch>
      </main>
    );
  }
}