import { StyleProp, TextProps, TextStyle } from 'react-native';
import React from 'react';

export type StyledTextFonts = 'small' | 'regular' | 'huge';
export type StyledTextTypes =
  | 'primary'
  | 'inactive'
  | 'active'
  | 'info'
  | 'error'
  | 'infoBright'
  | 'simple';
export interface TextComponentProps extends TextProps {
  size?: StyledTextFonts;
  type?: StyledTextTypes;
  children: React.ReactNode | string;
  extraStyles?: StyleProp<TextStyle>;
  uppercase?: boolean;
  bold?: boolean;
  onPress?: () => void;
  animated?: boolean;
}
