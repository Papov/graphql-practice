// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Text, Button} from 'react-native-elements';

import {styles} from 'utils';

const s = StyleSheet.create({
  button: {marginBottom: 8},
});

function Welcome(props) {
  function goToAuth(application: string) {
    props.navTo('auth', {application});
  }

  return (
    <View style={styles.container}>
      <Text style={s.button} h3>
        Applications
      </Text>
      <Button
        style={s.button}
        title="Rick and Morty"
        onPress={() => goToAuth('rickMorty')}
      />
      <Button
        style={s.button}
        title="Marvel"
        onPress={() => goToAuth('marvel')}
      />
    </View>
  );
}

export default Welcome;
