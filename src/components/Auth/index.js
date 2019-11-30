// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles as s} from 'utils';

function Auth(props) {
  return (
    <View style={s.container}>
      <Text>Auth</Text>
      <Button
        title="go to home"
        onPress={() => {
          props.navigation.navigate('home');
        }}
      />
    </View>
  );
}

export default Auth;
