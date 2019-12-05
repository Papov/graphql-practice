// @flow
import React, {useMemo} from 'react';
import {FlatList} from 'react-native';

import {ListItem} from 'react-native-elements';

type Props = {|
  characters: Array<Object>, // TODO fix types
|};

function Characters(props: Props) {
  function renderItem(item: Object) {
    return (
      <ListItem
        title={item.name}
        subtitle={item.species}
        leftAvatar={{source: {uri: item.image}}}
        bottomDivider
      />
    );
  }

  return (
    <FlatList
      data={props.characters || []}
      renderItem={({item, index}) => renderItem(item, index)}
    />
  );
}

export default props => useMemo(() => <Characters {...props} />, []);
