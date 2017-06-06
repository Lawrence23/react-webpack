import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SideNav from './SideNav.jsx';
import Container from './Container.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SideNav />
        <Container />
      </div>
    );
  }
}