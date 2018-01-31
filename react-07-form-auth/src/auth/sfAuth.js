import React from 'react'
import { Field, SubmissionError , reduxForm } from 'redux-form'
import { withRouter, Redirect, Route, Link } from 'react-router-dom'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// Auth state is local, so it's OK
const auth = {
  isAuthenticated: false,
  // What means `cb` ??
  authenticate(cb) {
    this.isAuthenticated = true
    console.log(cb)
    setTimeout(cb, 1000) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 1000)
  }
}


  
export const SFAuthStatus = withRouter(({ history }) => (
  auth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        auth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>SFAuthStatus: you are not logged in. <Link to="/sf-login">SFLogin</Link> </p>
  )
))

export class SFLogin extends React.Component {
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
          <SFLoginForm />
        </div>
      )
    }
  }
  
export const SFPrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      auth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/sf-login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
  
// SubmitValidationForm.js


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )


function submit(values) {
    return sleep(1000).then(() => {
      // simulate server latency
      if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        throw new SubmissionError({
          username: 'User does not exist',
          _error: 'Login failed!'
        })
      } else if (values.password !== 'redux-form') {
        throw new SubmissionError({
          password: 'Wrong password',
          _error: 'Login failed!'
        })
      }else{
        auth.authenticate(()=>{})
      }
    })
}

const SubmitValidationForm = props => {
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        {error && <strong>{error}</strong>}
        <div>
          <button type="submit" disabled={submitting}>
            Log In
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
  
const SFLoginForm = reduxForm({
    form: 'submitValidation' // a unique identifier for this form
  })(SubmitValidationForm)

export default SFLoginForm
