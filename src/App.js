// @flow
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import * as SCREENS from './components';

// create custom navigation
function createNavigation({navigation}) {
  return {
    ...navigation.state.params,
    navBack: () => navigation.navBack(),
    navTo: (screen: string, params: any) => navigation.navigate(screen, params),
  };
}

const AuthContainer = createStackNavigator(
  {
    welcome: {
      screen: props => <SCREENS.Welcome {...createNavigation(props)} />,
    },
    auth: {
      screen: props => <SCREENS.Auth {...createNavigation(props)} />,
    },
  },
  {
    initialRouteName: 'welcome',
    headerMode: 'none',
  },
);

const RickMorty = createStackNavigator({
  episodes: {
    screen: props => (
      <SCREENS.RickMorty.Episodes {...createNavigation(props)} />
    ),
  },
});

const Marvel = createStackNavigator(
  {
    home: {
      screen: props => <SCREENS.Marvel.Home {...createNavigation(props)} />,
    },
  },
  {
    headerMode: 'none',
  },
);

const MainNavigator = createStackNavigator(
  {
    welcome: AuthContainer,
    rickMorty: RickMorty,
    marvel: Marvel,
  },
  {
    initialRouteName: 'welcome',
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
