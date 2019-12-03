// @flow
import gql from 'graphql-tag';
import {makeQueryGraphQL, makeParamsForResults} from 'utils';

type Resources = 'characters' | 'locations' | 'episodes';
type Queries = Object;
type Results = Object;

export default function makeRequest(
  resource: Resources,
  query: Queries = {},
  results: Results,
) {
  const _query = makeQueryGraphQL(query);
  const _results = makeParamsForResults(results);
  return gql`
    query {
      ${resource}${_query ? `(${_query})` : ''} {
        ${_results}
      }
    }
  `;
}
