module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'promise',
    'react',
    'react-native',
    'react-hooks',
    'prettier',
    'import',
    'testing-library',
  ],
  rules: {
    'react/prop-types': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'prettier/prettier': 'error',
    'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
    // prevent eslint to complain about the "styles" variable being used before it was defined
    'no-use-before-define': ['error', { variables: false }],
    'react-hooks/rules-of-hooks': 'error',
    },
};
