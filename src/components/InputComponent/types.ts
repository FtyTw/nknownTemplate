import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { ReactElement } from 'react';

export enum INPUT_COMPONENT_TYPES {
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
  TEXTAREA = 'textarea',
}

export interface InputComponentProps extends TextInputProps {
  containerStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<ViewStyle>;
  type?: INPUT_COMPONENT_TYPES;
  zIndex?: number;
  rightElement?: (onPasswordBtnPress?: () => void) => ReactElement;
}
