module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'react/prop-types': 0,
    'function-paren-newline': 0,
    'operator-linebreak': 0,
    'react/no-array-index-key': 0,
    'space-in-parens': 0,
    'spaced-comment': 0,
    'no-confusing-arrow': 0,
  },
};
