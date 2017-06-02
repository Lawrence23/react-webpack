import React from 'react';
require("!style-loader!css-loader!sass-loader!../styles/header.scss");

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Life Speed</h1>
      </header>
    );
  }
}
