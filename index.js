/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {store } from './app/store';

console.log("running from index.js");

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
