import React from 'react'
import ReactDOM from 'react-dom'
// import Root from './components/root';
// import configureStore from './store/store';
import { login, logout, signUp } from './actions/session_actions'



document.addEventListener("DOMContentLoaded", () => {

  window.login = login
  window.logout = logout
  window.signUp = signUp

  ReactDOM.render(<h2>Welcome to the Root page</h2>,
     document.getElementById("root"));
});
