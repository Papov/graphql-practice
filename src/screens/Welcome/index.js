// @flow
import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import {styles, colors} from 'utils';
import {Button} from 'components';
import {images} from 'resources';

const s = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
});

function Welcome(props) {
  function goToAuth(application: string) {
    props.navTo('auth', {application});
  }

  return (
    <View style={[styles.container, s.container]}>
      <ImageBackground
        resizeMode="cover"
        style={s.background}
        source={images.rickMortyWelcome}>
        <Button
          position="center"
          title="Rick and Morty"
          onPress={() => goToAuth('rickMorty')}
          style={s.button}
        />
      </ImageBackground>
      <ImageBackground
        resizeMode="cover"
        style={s.background}
        source={images.marvelWelcome}>
        <Button
          position="center"
          title="Marvel"
          onPress={() => goToAuth('marvel')}
          style={s.button}
        />
      </ImageBackground>
    </View>
  );
}

export default Welcome;
