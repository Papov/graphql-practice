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
    setParams: params => navigation.setParams(params),
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
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const RickMorty = createStackNavigator({
  episodes: {
    screen: props => (
      <SCREENS.RickMorty.Episodes {...createNavigation(props)} />
    ),
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title'),
      };
    },
  },
  episode: {
    screen: props => <SCREENS.RickMorty.Episode {...createNavigation(props)} />,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title'),
      };
    },
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
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
