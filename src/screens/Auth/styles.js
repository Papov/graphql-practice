import {StyleSheet} from 'react-native';
import {colors} from 'utils';

export default StyleSheet.create({
  container: {padding: 8},
  button: {marginBottom: 4},
  textInput: {padding: 0, margin: 0, color: colors.fontDark},
  image: {
    position: 'absolute',
    height: '35%',
    top: 0,
    width: '100%',
    resizeMode: 'contain',
  },
  rickMortyText: {
    color: colors.fontDark,
  },
  marvelText: {
    color: colors.white,
  },
  rickMortyBG: {
    backgroundColor: colors.rickMortyBG,
  },
  marvelBG: {
    backgroundColor: colors.marvelBG,
  },
});
