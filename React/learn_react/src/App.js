import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponents';

class App extends React.Component {


  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
  


export default App;
