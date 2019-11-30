// @flow
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Api} from 'core';

import * as SCREEN from './components';

const MainNavigator = createStackNavigator(
  {
    auth: {screen: SCREEN.Auth},
    home: {screen: SCREEN.Home},
  },
  {
    initialRouteName: 'auth',
    headerMode: 'none',
  },
);

function App() {
  return Api.createClient({
    component: createAppContainer(MainNavigator),
  });
}

export default App;
