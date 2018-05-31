import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from "./components/home/HomeComponent";

class App extends Component {
  render() {
    return (
      <div>
        <HomeComponent/>
      </div>
    );
  }
}

export default App;
