import React from 'react';
import { Link } from 'react-router-dom';
require("!style-loader!css-loader!sass-loader!../styles/sideNav.scss");

export default class SideNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default sidebar" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>      
          </div>
          <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li ><Link to='/'>Dashboard<span className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></Link></li>
              <li ><Link to='/forms'>Form Builder<span className="pull-right hidden-xs showopacity glyphicon glyphicon-th-list"></span></Link></li>        
              <li ><Link to='/preview'>Preview Forms<span className="pull-right hidden-xs showopacity glyphicon glyphicon-tags"></span></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}