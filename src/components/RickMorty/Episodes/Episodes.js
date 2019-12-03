// @flow
import React from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

import {Query} from 'react-apollo';

import {styles} from 'utils';
import {Api} from 'core';

function Episodes(props) {
  const query = Api.makeRequest('episodes', undefined, [
    'id',
    'name',
    'air_date',
    'episode',
    'created',
  ]);

  function renderItem(element: Object, index: number) {
    return (
      <ListItem
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
          return null;
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

export default Episodes;
