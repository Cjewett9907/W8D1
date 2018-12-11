import React from 'react'
import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const ERROR_HANDLER = "ERROR_HANDLER"

export const login = (user) => (
  SessionAPIUtil.login(user)
  .then( user => dispatch({ type: RECEIVE_CURRENT_USER, currentUser: user}),
  err => dispatch({ type: ERROR_HANDLER, errors: err.responseJSON})
));

export const logout = () => (
  SessionAPIUtil.logout()
  .then( () => dispatch({ type: LOGOUT_CURRENT_USER}))
);

export const signUp = (user) => (
  SessionAPIUtil.signUp(user)
  .then( user => dispatch({ type: RECEIVE_CURRENT_USER, currentUser: user}),
  err => dispatch({ type: ERROR_HANDLER, errors: err.responseJSON})
  )
);

// export const receiveCurrentUser = (currentUser) => (
//
// )
// }
//
// export const logoutCurrentUser = () => (
//
// )


// export const receiveErrors = (errors) => (
//
// )
