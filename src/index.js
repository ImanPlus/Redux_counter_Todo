import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,} from "redux";
import App from "./App";
import reducerIndex from './Reducers'
import {Provider} from 'react-redux';

const store = createStore(reducerIndex)
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
