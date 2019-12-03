// @flow

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';

type Props = {
  component: React$ComponentType,
  params: {|
    uri: string,
  |},
};

function createClient({uri}: $PropertyType<Props, 'params'>) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(() => {}),
      new HttpLink({
        uri,
      }),
    ]),
    cache: new InMemoryCache(),
  });
}

export default createClient;
