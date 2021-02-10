import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import {createStore} from "redux";
import {Provider} from "react-redux"
import {authenticationReducer} from "./reducers/authenticationReducer"
import './css/App.css'


const store = createStore(
  authenticationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);


