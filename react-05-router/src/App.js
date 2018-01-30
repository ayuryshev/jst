import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello router</h1>
        </header>
        <p className="App-intro">
          <ul align="left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gods">Gods</Link></li>
          </ul>          
          <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/gods" component={Gods}/> 
        </p>
      </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Choose your <Link to="/gods">god </Link></h2>
  </div>
)

const Gods = ({ match }) => (
  <div>
    <h2>Choose your god</h2>
    <ul align='left'>
      <li>
        <Link to={`${match.url}/undivided`}>
          Chaos Undivided
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/khorne`}>
          Khorne
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/slaanesh`}>
          Slaanesh
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/tzinch`}>
          Tzinch
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/nurgle`}>
          Nurgle
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:god`} component={God}/>
    <Route exact path={match.url} render={() => (
      <Redirect to="/undivided" />
      // <h3>Choose your god</h3>
    )}/>
  </div>
)

const God = ({ match }) => (
  <div>
    <h3>Aspiring Champion of {match.params.god}</h3>
  </div>
)

export default App;
