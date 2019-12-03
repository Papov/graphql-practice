// @flow
import React, {useEffect, useMemo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-elements';
import {Query} from 'react-apollo';

import Characters from '../Characters';

import {styles} from 'utils';
import s from './styles';
import {Api} from 'core';

type Props = {|
  id: number,
  episode: string,
  client: any,
  setParams: any, // TODO fix types
|};

function Episode(props: Props) {
  const query = Api.makeRequest('episode', {id: props.id}, [
    'name',
    'episode',
    'air_date',
    {
      characters: [
        'name',
        'id',
        'image',
        'species',
        {
          origin: ['name', 'type', 'dimension', 'id'],
        },
        {
          location: ['name', 'type', 'dimension', 'id'],
        },
      ],
    },
  ]);

  useEffect(() => {
    props.setParams({title: props.episode});
  }, []);

  return (
    <Query query={query} client={props.client}>
      {({data, error, loading}) => {
        if (error) {
          return (
            <View style={styles.container}>
              <Text h4>Something went wrong!</Text>
            </View>
          );
        }
        if (loading) {
          return (
            <View style={styles.container}>
              <ActivityIndicator size="small" />
            </View>
          );
        }
        return (
          <View style={s.container}>
            <Characters characters={data.episode.characters} />
          </View>
        );
      }}
    </Query>
  );
}

export default props => useMemo(() => <Episode {...props} />, []);
