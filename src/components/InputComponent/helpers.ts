import { INPUT_COMPONENT_TYPES } from '@components/InputComponent/types.ts';
import { Platform, TextInputProps } from 'react-native';

export const defaultInputConfigs: Record<
  INPUT_COMPONENT_TYPES,
  TextInputProps
> = {
  email: {
    keyboardType: 'email-address',
    ...Platform.select({
      ios: {
        textContentType: 'emailAddress',
      },
      android: {},
    }),
  },
  password: {
    autoComplete: 'password',
    autoCapitalize: 'none',
  },
  phone: {
    keyboardType: 'phone-pad',
  },
  textarea: {
    multiline: true,
  },
};
