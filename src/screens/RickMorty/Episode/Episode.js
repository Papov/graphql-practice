// @flow
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Query} from 'react-apollo';

import {Error, Loading, Header} from 'components';
import Characters from '../Characters';
import s from './styles';

import {Api} from 'core';
import type {models} from 'core';

type Props = {|
  id: number,
  client: any,
|};

type QueryRenderProps = {|
  data: $Exact<models.Episode>,
  loading: boolean,
  error: Object,
|};

function Episode(props: Props) {
  const GET_EPISODE = Api.getQuery.getEpisode();
  return (
    <Query query={GET_EPISODE} client={props.client} variables={{id: props.id}}>
      {({data, error, loading}: QueryRenderProps) => {
        if (error) {
          return <Error />;
        }
        if (loading) {
          return <Loading />;
        }
        return (
          <View style={s.container}>
            <Header back title={data.episode.name} color="light-content" menu />
            <Characters characters={data.episode.characters} />
          </View>
        );
      }}
    </Query>
  );
}

export default props => useMemo(() => <Episode {...props} />, []);
