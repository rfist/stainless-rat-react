import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Header from './components/header'
import About from './components/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Main/>
      </div>
    );
  }
}

export default App;
