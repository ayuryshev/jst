import React, { Component } from 'react';
import logo from './static/logo.svg';
import './static/App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {loginApp} from './loginApp'

let store = createStore(loginApp)

const AppHeader = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to redux</h1>
  </header>
)

function AppIntro(props) {
  return (
    <p className="App-intro">
      {props.children}
    </p>
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>      
        <div className="App">
          <AppHeader />  
          <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
          </AppIntro>
        </div>
      </Provider>
    );
  }
}

export default App;
