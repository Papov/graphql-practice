// @flow
import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

import {Api} from 'core';
import {styles, colors} from 'utils';
import {Button, Header} from 'components';
import {images} from 'resources';

import s from './styles';

function Auth(props) {
  const [client, setClient] = useState(null);

  function authorise(isSkip: boolean) {
    const application = props.application;
    const uri = application && Api.URIs[application];
    if (!uri) {
      return;
    }
    if (isSkip) {
      setClient(
        Api.createClient({
          uri,
        }),
      );
    }
  }

  useEffect(() => {
    if (client) {
      const application = props.application;
      props.navTo(application, {client});
    }
  }, [client]);

  function renderImage() {
    const image = `${props.application}Auth`;
    if (!image) {
      return null;
    }
    return <Image source={images[image]} style={s.image} />;
  }

  const buttonBG = s[`${props.application}BG`];
  const textColor = s[`${props.application}Text`];
  const headerButtonColor = {color: colors[`${props.application}BG`]};
  return (
    <>
      <Header
        back={headerButtonColor}
        color="dark-content"
        backgroundColor={colors.white}
      />
      <View style={[styles.container, s.container]}>
        {renderImage()}
        <Button
          position="top"
          onPress={authorise}
          style={[s.button, buttonBG]}
          title={{text: 'sign in', style: textColor}}
        />
        <Button
          onPress={authorise}
          style={[s.button, buttonBG]}
          color={colors.white}
          title={{text: 'sign up', style: textColor}}
        />
        <Button
          position="bottom"
          onPress={authorise}
          style={[s.button, buttonBG]}
          title={{text: 'skip', style: textColor}}
        />
      </View>
    </>
  );
}

export default Auth;
