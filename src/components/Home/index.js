// @flow
import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import {styles as s} from 'utils';
import {Api} from 'core';

function Auth(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData([{name: 'Vlad'}, {name: 'Dasha'}]);
  }, []);

  function renderItem(item) {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  }

  return (
    <View style={s.container}>
      <Text>Home</Text>
      <Button
        title="go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => `${item.name}`}
      />
    </View>
  );
}

export default Auth;
