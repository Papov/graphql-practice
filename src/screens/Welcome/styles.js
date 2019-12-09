import {StyleSheet} from 'react-native';
import {colors} from 'utils';

export default StyleSheet.create({
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
  separator: {
    height: 8,
  },
});
