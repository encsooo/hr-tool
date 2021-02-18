import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import {createStore} from "redux";
import {Provider} from "react-redux"
import { allReducers } from './store/reducers/allReducers';
import './css/App.css'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);


