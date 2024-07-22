module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/app': './src/app',
          '@/screens': './src/screens',
          '@/widgets': './src/widgets',
          '@/features': './src/features',
          '@/entities': './src/entities',
          '@/shared': './src/shared',
        },
      },
    ],
  ],
};
