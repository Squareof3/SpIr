import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Components
import Navbar from './components/Navbar'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home path="/" />       
      </div>
    );
  }
}

export default App;
