module.exports = {
  root: true,
  plugins: ['markdown'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:mdx/recommended',
  ],
  env: {
    "node": true,
    "browser": true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'mdx/code-blocks': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
    },
    {
      files: ['**/*.{md,mdx}/**'],
      extends: ['plugin:mdx/code-blocks'],
    },
  ],
};
