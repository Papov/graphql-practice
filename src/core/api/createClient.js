// @flow
import React from 'react';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import {ApolloProvider} from '@apollo/react-hooks';

type Props = {
  component: React$ComponentType,
};

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(() => {}),
    new HttpLink({
      uri: 'https://rickandmortyapi.com/graphql/',
    }),
  ]),
  cache: new InMemoryCache(),
});

function createClient(props: Props) {
  if (!props || !props.component) {
    return null;
  }
  const Component = props.component;

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}
export default createClient;
