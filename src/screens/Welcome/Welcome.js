// @flow
import React from 'react';
import {View, ImageBackground, StatusBar} from 'react-native';

import {styles} from 'utils';
import {Button} from 'components';
import {images} from 'resources';

import s from './styles';

function Welcome(props) {
  function goToAuth(application: string) {
    props.navTo('auth', {application});
  }

  return (
    <View style={[styles.container, s.container]}>
      <StatusBar barStyle="light-content" />
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
      <View style={s.separator} />
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
