import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {default as NotSoSimpleForm} from './NotSoSimpleForm'
// import logo from './Chaos_star.svg';
// import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)



const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div align="center">
              <p>
              <h1> Redux Form with MUI </h1>
              </p>
              <NotSoSimpleForm onSubmit={showResults} />
            </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}


export default App;
