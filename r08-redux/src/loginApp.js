import {combineReducers } from 'redux'

// actions/action types
const LOGIN = 'LOGIN'
const SIGNOUT = 'SIGNOUT'

// action creators
export function login(){
    return LOGIN 
}

export function signout() {
    return SIGNOUT
}

// initial state

const initialState = false


// reducers
const isAuthenticated = (state = initialState, action) => {
    switch (action) {
        case LOGIN:
            return true
        case SIGNOUT:
            return false
        default:
            return state
    }
}


export const loginApp = combineReducers({
    isAuthenticated
})

// export default loginApp