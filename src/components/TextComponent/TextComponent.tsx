import React from 'react';
import { Animated, Text } from 'react-native';

/*** types ***/
import { TextComponentProps } from '@components/TextComponent/types.ts';

/*** styles ***/
import { style } from '../../assets';
import { textColors, textStyles } from '@components/TextComponent/helpers.ts';

export const TextComponent = ({
  size = 'small',
  type = 'primary',
  children,
  extraStyles,
  uppercase,
  bold,
  onPress,
  animated,
  ...textProps
}: TextComponentProps) => {
  const Tag = animated ? Animated.Text : Text;
  return (
    <Tag
      onPress={onPress}
      style={[
        textStyles[size as keyof typeof textStyles],
        textColors[type as keyof typeof textColors],
        extraStyles,
        uppercase && style.uppercase,
        bold && style.bold,
      ]}
      {...textProps}>
      {children}
    </Tag>
  );
};
