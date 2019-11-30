// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <View style={s.container}>
      <Text>Work</Text>
    </View>
  );
}

export default App;
