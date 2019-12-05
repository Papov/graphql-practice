// @flow
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {styles} from 'utils';

type Props = {|
  message?: string,
|};

export default function(props: Props) {
  return (
    <View style={styles.container}>
      <Text h4>{props.message || 'Something went wrong.'}</Text>
    </View>
  );
}
