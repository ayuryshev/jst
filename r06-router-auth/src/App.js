import React, { Component } from 'react'
import logo from './static/logo.svg'
import './static/App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  Login,
  PrivateRoute,
  AuthButton
} from './auth/auth'

const AppHeader = () => (
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
  <AuthButton />
  </header>
)

const AppIntro = () => (
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
)

const Routes = () => (
  <div>
    <Route path="/login" component={Login}/>
    <Route exact="true" path="/" component={Home}/>
    <Route path="/mui" component={MuiDemo}/>
    <PrivateRoute path="/grid" component={GridDemo}/>
    <PrivateRoute path="/protected" component={HOC("Protected")}/>
  </div>
)

class App extends Component {
  render() {
    return (    
      <Router>        
      <div className="App">
        <AppHeader />
        <AppIntro />
        <Routes />
      </div>          
    </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const HOC = (name) => () => (
  <div>
    <h2>{name}</h2>
  </div>
)

const MuiDemo = HOC("MuiDemo")
const GridDemo = HOC("GridDemo")


export default App
