import { style, mainColors } from '@assets';

export const textStyles = {
  small: {
    ...style.fontSmall,
  },
  regular: {
    ...style.fontRegular,
  },
  huge: {
    ...style.fontHuge,
  },
};

export const textColors = {
  primary: { color: mainColors.softWhite },
  inactive: { color: mainColors.heavyGrey },
  active: { color: mainColors.green },
  info: { color: mainColors.smoke },
  error: { color: mainColors.darkRed },
  infoBright: { color: mainColors.blue },
  simple: { color: mainColors.black },
};
