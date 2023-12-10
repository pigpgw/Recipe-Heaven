module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'react-hooks', 'import'],
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
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
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
        extensions: ['.js', '.jsx'],
      },
      alias: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
