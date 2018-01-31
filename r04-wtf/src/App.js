import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <form>
          <p>
            <label>telephone: </label>
              <input type="tel" id="telephone" />            
          </p>
          <p>
            <label> password: </label> 
            <input type="password" id="memo" />
          </p>
          <p>
            <label> color: </label> 
            <input type="color" id="color" />
          </p>
          <p>
            <label> date: </label> 
            <input type="date" id="date" />
          </p>
          <p>
            <input type="submit" value="GO" />
            <input type="button" value="cancel" />
          </p>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
