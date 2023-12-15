module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:testing-library/react',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-indent': ['error', 2],
    'react/require-default-props': 'off',
    'react/jsx-indent-props': ['warn', 'first'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    quotes: [2, 'single'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
