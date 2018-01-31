import React from 'react'
import {
    withRouter,
    Redirect,
    Route,
    Link
 } from 'react-router-dom'

 const auth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 1000) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 1000)
    }
  }
  

export const AuthStatus = withRouter(({ history }) => (
  auth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        auth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in. <Link to="/login">Login</Link> </p>
  )
))

export class Login extends React.Component {
    state = {
      redirectToReferrer: false
    }
  
    login = () => {
      auth.authenticate(() => {
        this.setState({ redirectToReferrer: true })
      })
    }
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state
      
      if (redirectToReferrer) {
        return (
          <Redirect to={from}/>
        )
      }
      
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
  }
  
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      auth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
  