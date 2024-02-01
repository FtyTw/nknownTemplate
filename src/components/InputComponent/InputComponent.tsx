import React, { forwardRef, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

/*** helpers ***/
import { defaultInputConfigs } from './helpers';

/*** types ***/
import { INPUT_COMPONENT_TYPES, InputComponentProps } from './types';

/*** styles ***/
import { mainColors, style } from '@assets';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: mainColors.white,
  },
  input: {
    flex: 1,
  },
  linkWrapper: {
    width: 40,
    height: '100%',
  },
});

export const InputComponent = forwardRef<TextInput, InputComponentProps>(
  (
    {
      containerStyles,
      inputStyles,
      placeholder = 'Type here...',
      type,
      zIndex,
      rightElement,
      ...inputProps
    }: InputComponentProps,
    ref,
  ) => {
    const isPassword = type === INPUT_COMPONENT_TYPES.PASSWORD;
    const [showPassword, setShowPassword] = useState<boolean>(isPassword);
    const staticConfigs = useMemo(
      () => (type ? defaultInputConfigs[type] : {}),
      [type],
    );
    const dynamicSecureTextEntry = useMemo(
      () =>
        type === INPUT_COMPONENT_TYPES.PASSWORD
          ? {
              secureTextEntry: showPassword,
            }
          : {},
      [showPassword, type],
    );
    const togglePasswordAppearing = () => setShowPassword(p => !p);
    return (
      <View style={[styles.container, { zIndex }, containerStyles]}>
        <TextInput
          ref={ref}
          keyboardType={'default'}
          autoComplete={'off'}
          style={[styles.input, inputStyles]}
          placeholder={placeholder}
          placeholderTextColor={mainColors.grey}
          {...staticConfigs}
          {...dynamicSecureTextEntry}
          {...inputProps}
        />
        {isPassword
          ? rightElement?.(togglePasswordAppearing) ?? (
              <TouchableOpacity
                onPress={togglePasswordAppearing}
                style={[style.justifyAlign, styles.linkWrapper]}>
                <Text style={style.link}>Show</Text>
              </TouchableOpacity>
            )
          : rightElement?.()}
      </View>
    );
  },
);
