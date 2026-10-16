module.exports = {
  extends: [
    require.resolve('@umijs/max/eslint'),
    'plugin:prettier/recommended'
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'prettier/prettier': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000(?!.*\\.(?:css|less|scss)$)'],
          ['^react', '^@?\\w'],
          ['^@/'],
          ['^\\.\\.(?!/?$)(?!.*\\.(?:css|less|scss)$)', '^\\.\\./?$'],
          ['^\\./(?!.*\\.(?:css|less|scss)$)'],
          ['^\\u0000.+\\.(?:css|less|scss)$', '^.+\\.(?:css|less|scss)$']
        ]
      }
    ],
    'simple-import-sort/exports': 'warn'
  }
}
