// @flow
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, Input, Text} from 'react-native-elements';

import {Api} from 'core';
import {styles, colors} from 'utils';

const s = StyleSheet.create({
  container: {padding: 8},
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {flex: 1, margin: 8},
  roundButton: {
    alignSelf: 'flex-start',
  },
  textInput: {padding: 0, margin: 0, color: colors.fontDark},
  skipContainer: {
    width: '100%',
  },
  skipButton: {
    marginHorizontal: 8,
  },
});

function Auth(props) {
  const [client, setClient] = useState(null);
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

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
    if (!client && props.application === 'rickMorty') {
      authorise(true);
    }
    if (client) {
      const application = props.application;
      props.navTo(application, {client});
    }
  }, [client]);

  return (
    <View style={[styles.container, s.container]}>
      <Text h4>Authorization</Text>
      <Input
        style={s.textInput}
        placeholder="email@address.com"
        placeholderTextColor={colors.gray}
        value={email}
        onChangeText={setMail}
      />
      <Input
        style={s.textInput}
        placeholder="password"
        textContentType="newPassword"
        placeholderTextColor={colors.gray}
        value={password}
        onChangeText={setPassword}
      />
      <View style={s.buttonGroup}>
        <Button containerStyle={s.button} title="sign in" />
        <Button containerStyle={s.button} title="sign up" />
      </View>
      <View style={s.skipContainer}>
        <Button
          onPress={() => {
            authorise(true);
          }}
          buttonStyle={s.skipButton}
          title="skip"
        />
      </View>
    </View>
  );
}

export default Auth;
