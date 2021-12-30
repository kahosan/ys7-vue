module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          endOfLine: 'auto',
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
          singleQuote: true,
        },
      ],
      'no-unused-vars': [1],
      // semi: [0, "never"],
      'comma-dangle': [1, 'only-multiline'],
      'no-inline-styles': 'off',
    },
  };
  