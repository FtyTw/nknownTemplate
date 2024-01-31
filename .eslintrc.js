module.exports = {
  root: true,
  plugins: ['react', 'react-native'],
  extends: ['@react-native', '@react-native-community'],
  rules: {
    'react-native/sort-styles': 0,
    'no-console': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 0,
    'react-hooks/exhaustive-deps': 'off',
    'no-extra-boolean-cast': 'off',
    'no-bitwise': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
};
