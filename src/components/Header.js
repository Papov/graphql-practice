// @flow
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Header, Text} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from 'utils';

const hitSlop = {left: 10, right: 10, top: 10, bottom: 10};

const s = StyleSheet.create({
  title: {fontSize: 24, color: colors.white},
});

type Props = {|
  back?: () => any,
  menu?: () => any,
  title?: string,
  color?: 'light-content' | 'dark-content',
  backgroundColor?: string,
|};

function HeaderComponent(props: Props) {
  function renderLeftAction() {
    if (!props.back) {
      return null;
    }
    return (
      <TouchableOpacity
        hitSlop={hitSlop}
        disabled={!props.back}
        onPress={() => props.navigation.goBack()}>
        <Icon name="chevron-left" size={24} color={colors.white} />
      </TouchableOpacity>
    );
  }

  function renderRightAction() {
    if (!props.menu) {
      return null;
    }
    return (
      <TouchableOpacity
        hitSlop={hitSlop}
        disabled={!props.menu}
        // TODO add menu
        onPress={() => props.menu}>
        <Icon name="bars" size={24} color={colors.white} />
      </TouchableOpacity>
    );
  }
  return (
    <Header
      barStyle={props.color || 'default'}
      leftComponent={renderLeftAction()}
      rightComponent={renderRightAction()}
      centerComponent={
        props.title ? <Text style={s.title}>{props.title}</Text> : null
      }
      backgroundColor={props.backgroundColor || colors.header}
    />
  );
}

export default withNavigation(HeaderComponent);
