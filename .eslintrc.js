module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/no-unused-components': 'off',
    'no-restricted-syntax': 'off',
    'import/no-cycle': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'constructor-super': 'off',
    'no-mixed-operators': 'off',
    'no-case-declarations': 'off',
    'default-case': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off', // todo временно
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-continue': 'off',
    'no-sequences': 'off',
    'no-new': 'off',
    'max-len': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
