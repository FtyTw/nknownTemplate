module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src': './src',
          '@redux': './src/redux',
          '@components': './src/components',
          '@assets': './src/assets',
          '@navigator': './src/navigator',
          '@helpers': './src/helpers',
          '@asyncStorage': './src/asyncStorage',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
