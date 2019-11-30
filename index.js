/**
 * @format
 */
import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import {ApolloProvider} from '@apollo/react-hooks';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(() => {}),
    new HttpLink({
      uri: 'https://rickandmortyapi.com/graphql/',
    }),
  ]),
  cache: new InMemoryCache(),
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => ApolloApp);
