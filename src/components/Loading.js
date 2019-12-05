// @flow
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles, colors} from 'utils';

export default function() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.fontDark} />
    </View>
  );
}
