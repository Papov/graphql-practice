// @flow
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Header, Text} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from 'utils';

const hitSlop = {left: 10, right: 10, top: 10, bottom: 10};

const s = StyleSheet.create({
  title: {fontSize: 20, color: colors.white},
});

type Props = {|
  back?: () => any,
  home?: () => any,
  title?: string | {text: string, style: Object},
  color?: 'light-content' | 'dark-content',
  backgroundColor?: string,
|};

function HeaderComponent(props: Props) {
  const {color, title = {}, back, backgroundColor, home} = props;

  function renderLeftAction() {
    if (!back) {
      return null;
    }
    return (
      <TouchableOpacity
        hitSlop={hitSlop}
        disabled={!back}
        onPress={() => props.navigation.goBack()}>
        <Icon
          name="chevron-left"
          size={24}
          color={back.color || colors.white}
        />
      </TouchableOpacity>
    );
  }

  function renderRightAction() {
    if (!home) {
      return null;
    }
    return (
      <TouchableOpacity
        hitSlop={hitSlop}
        disabled={!home}
        onPress={() => props.navigation.navigate('welcome')}>
        <Icon name="home" size={24} color={home.color || colors.white} />
      </TouchableOpacity>
    );
  }
  return (
    <Header
      barStyle={color || 'default'}
      pointerEvents="none"
      leftComponent={renderLeftAction()}
      rightComponent={renderRightAction()}
      centerComponent={
        title.text ? (
          <Text style={[s.title, title.style || {}]}>
            {title.text || title}
          </Text>
        ) : null
      }
      backgroundColor={backgroundColor || colors.header}
    />
  );
}

export default withNavigation(HeaderComponent);
