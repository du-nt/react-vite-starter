module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'unused-imports',
    'react-hooks'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$']
            ]
          }
        ]
      }
    }
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'unused-imports/no-unused-imports': 'warn'
  }
}
