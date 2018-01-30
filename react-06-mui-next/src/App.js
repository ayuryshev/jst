import React, { Component } from 'react'
import logo from './static/logo.svg'
import './static/App.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
}
   from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div>
            <ul align="left">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mui">MuiDemo</Link></li>
              <li><Link to="/grid">GridDemo</Link></li>
              <li><Link to="/protected">Protected</Link></li>
            </ul>
          </div>
        </div> 
          <Route exact="true" path="/" component={Home}/>
          <Route path="/mui" component={Home}/>
          <Route path="/grid" component={GridDemo}/>
          <Route path="/protected" component={HOC("Protected")}/>
      </div>          
      </Router>
    )
  }
}

const HOC = (name) => () => (
  <div>
    <h2>{name}</h2>
  </div>
)

const MuiDemo = HOC("MuiDemo")
const GridDemo = HOC("GridDemo")

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default App
