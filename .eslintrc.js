module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:mdx/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'mdx/code-blocks': true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['markdown'],
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
