import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div className="hero  github">
            <p className="button is-danger">DANGER</p>
            <p className="button is-primary">PRIMARY</p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </div>
        </p>
      </div>
    );
  }
}

export default App;
