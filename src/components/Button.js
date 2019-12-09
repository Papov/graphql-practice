// @flow
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {colors} from 'utils';

const s = StyleSheet.create({
  button: {
    height: 45,
    borderColor: colors.header,
    borderWidth: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 17, color: colors.fontDark},
  top: {borderTopLeftRadius: 14, borderTopRightRadius: 14},
  bottom: {borderBottomLeftRadius: 14, borderBottomRightRadius: 14},
  left: {borderBottomLeftRadius: 14, borderTopLeftRadius: 14},
  right: {borderBottomRightRadius: 14, borderTopRightRadius: 14},
  center: {borderRadius: 14},
});

type Props = {|
  title: string | {text: string, style: Object},
  onPress: () => void,
  style?: Object,
  color?: string,
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center',
|};

function Button(props: Props) {
  const {title = {text: ''}, style, position, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[s.button, style, s[position]]}>
      <Text style={[s.text, title.style || {}]}>{title.text || title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
