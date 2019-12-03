// @flow
import React, {useEffect, useMemo} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {ListItem, Text} from 'react-native-elements';

import {Query} from 'react-apollo';

import {styles} from 'utils';
import {Api} from 'core';

function Episodes(props) {
  const query = Api.makeRequest('episodes', undefined, [
    {results: ['id', 'name', 'air_date', 'episode']},
    {info: ['count', 'pages']},
  ]);

  useEffect(() => {
    props.setParams({title: 'Episodes'});
  }, []);

  function goToEpisode(element: any) {
    props.navTo('episode', {
      id: element.id,
      episode: element.episode,
      client: props.client,
    });
  }

  function renderItem(element: Object, index: number) {
    return (
      <ListItem
        onPress={() => {
          goToEpisode(element);
        }}
        key={index}
        title={element.name}
        subtitle={element.air_date}
        rightSubtitle={element.episode}
        bottomDivider
      />
    );
  }

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
          <FlatList
            data={data.episodes.results}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => `${item.name}${index}`}
          />
        );
      }}
    </Query>
  );
}

export default props => useMemo(() => <Episodes {...props} />, []);
