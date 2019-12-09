// @flow
import React from 'react';
import {View, Text} from 'react-native';

import {styles} from 'utils';
import {Header} from 'components';

function Home() {
  return (
    <React.Fragment>
      <Header home title="Marvel" />
      <View style={styles.container}>
        <Text>Marvel will be soon!</Text>
      </View>
    </React.Fragment>
  );
}

export default Home;
