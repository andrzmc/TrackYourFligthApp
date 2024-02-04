module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@/constants': ['./src/constants'],
          '@/context': ['./src/context'],
          '@/documents': ['./assets/documents'],
          '@/elements': ['./src/components/elements'],
          '@/fonts': ['./assets/fonts'],
          '@/images': ['./assets/images'],
          '@/models': ['./src/models'],
          '@/hooks': ['./src/hooks'],
          '@/layouts': ['./src/components/layouts'],
          '@/modules': ['./src/components/modules'],
          '@/navigation': ['./src/navigation'],
          '@/screens': ['./src/screens'],
          '@/services': ['./src/services'],
          '@/styles': ['./src/styles'],
          '@/translation': ['./src/translation'],
          '@/utils': ['./src/utils'],
        },
      },
    ],
  ],
};
