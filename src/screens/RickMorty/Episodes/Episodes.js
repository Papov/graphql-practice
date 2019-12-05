// @flow
import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import {Query} from 'react-apollo';

import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Loading, Error, Header} from 'components';

import {Api} from 'core';
import {models} from 'core';
import {colors} from 'utils';

function Episodes(props) {
  const GET_EPISODES = Api.getQuery.getEpisodes();

  function goToEpisode(element: models.EpisodesItem) {
    props.navTo('episode', {
      id: element.id,
      client: props.client,
    });
  }

  function fetchMoreEpisodes(fetchMore: () => any, data: models.Episodes) {
    if (!data.episodes.info.next) {
      return;
    }
    fetchMore({
      variables: {page: data.episodes.info.next},
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          episodes: {
            ...fetchMoreResult.episodes,
            results: [
              ...prev.episodes.results,
              ...fetchMoreResult.episodes.results,
            ],
          },
        };
      },
    });
  }

  function renderItem(element: models.EpisodesItem, index: number) {
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
        chevron={<Icon name="chevron-right" color={colors.gray} size={18} />}
      />
    );
  }

  return (
    <Query
      query={GET_EPISODES}
      client={props.client}
      variables={{page: 1}}
      fetchPolicy="cache-first">
      {({data, error, loading, fetchMore}) => {
        if (error) {
          return <Error />;
        }
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <Header title="Episodes" color="light-content" menu />
            <FlatList
              data={data.episodes.results}
              renderItem={({item, index}) => renderItem(item, index)}
              keyExtractor={(item, index) => `${item.name}${index}`}
              onEndReached={() => fetchMoreEpisodes(fetchMore, data)}
              initialNumToRender={10}
              onEndReachedThreshold={0.8}
            />
          </>
        );
      }}
    </Query>
  );
}

export default props => useMemo(() => <Episodes {...props} />, []);
