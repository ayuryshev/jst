import React from 'react'
import ReactDOM from 'react-dom'
import './static/index.css'
import App from './App' 
// import registerServiceWorker from './lib/registerServiceWorker'
const registerServiceWorker = require('./lib/registerServiceWorker').default

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
