import { StyleSheet } from 'react-native';
import { mainColors } from './colors';

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
  justifyAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: { textDecorationLine: 'underline', color: mainColors.blue },
  /*** fonts ***/
  fontSmall: {
    fontFamily,
    fontSize: 14,
  },
  fontRegular: {
    fontFamily,
    fontSize: 16,
  },
  fontHuge: {
    fontFamily,
    fontSize: 20,
  },
  bold: { fontFamily: fontFamilyBold },
  extraBold: { fontFamily: fontFamilyExtraBold },
  uppercase: { textTransform: 'uppercase' },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
});

const trackColorToggle = {
  false: mainColors.white,
  true: mainColors.black,
};

export { style, trackColorToggle };
