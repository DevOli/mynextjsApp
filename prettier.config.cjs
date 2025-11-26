// Prettier configuration for a Next.js + TypeScript project

module.exports = {
  // Format lines at 100 columns for readability in longer JSX/TSX files
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',

  // Use the prettier-plugin-tailwindcss plugin to automatically sort Tailwind classes.
  // It's installed as a dev dependency in this project, but Prettier will auto-load it as well.
  plugins: ['prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      options: { parser: 'json' },
    },
    {
      files: ['*.md'],
      options: { proseWrap: 'preserve' },
    },
  ],
};
