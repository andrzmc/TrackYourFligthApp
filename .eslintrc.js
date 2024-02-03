module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'prettier', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-console': 'warn',
        'no-eval': 'error',
        'no-unused-vars': 'warn',
        'import/first': 'error',
        'react/prop-types': 'error',
        'react/display-name': 0,
        'no-mixed-spaces-and-tabs': 'error',
        'react/no-unescaped-entities': 0,
        'react/jsx-no-duplicate-props': 'error',
        'react/react-in-jsx-scope': 0,
      },
    },
  ],

};
