import {StyleSheet} from 'react-native';
import {mainColors} from './colors';

// define own fontStyles used for the project
export const fontFamily = 'Roboto-Regular';
export const fontFamilyBold = 'Roboto-Medium';
export const fontFamilyExtraBold = 'Roboto-Bold';

const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
  fdRow: {
    flexDirection: 'row',
  },
  w100: {
    width: '100%',
  },
});

const trackColorToggle = {
  false: mainColors.white,
  true: mainColors.black,
};

export {style, trackColorToggle};
