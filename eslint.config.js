const typescriptParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const reactjsPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const unusedImportPlugin = require('eslint-plugin-unused-imports');
const importPlugin = require('eslint-plugin-import');
const reactFuncPlugin = require('eslint-plugin-react-func');
const reactQueryPlugin = require('@tanstack/eslint-plugin-query');

module.exports = [
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
    ],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        window: true,
        document: true,
        describe: true,
        test: true,
        expect: true,
        navigator: true,
        API_URL: true,
        APP_URL: true,
        NODE_ENV: true,
        PORT: true,
        $: true,
        localStorage: true,
        sessionStorage: true,
        Blob: true,
        Image: true,
        process: true,
        __dirname: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactjsPlugin,
      import: importPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      'unused-imports': unusedImportPlugin,
      '@tanstack/query': reactQueryPlugin,
      'react-func': reactFuncPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    ignores: ['node_modules', 'vite.config.ts'],
    rules: {
      'no-console': ['error', { allow: ['error'] }],
      'linebreak-style': [0, { allow: ['windows'] }],
      'react-hooks/rules-of-hooks': [
        0,
        { allow: ['useSocket', 'useStorage', 'useCookie', 'useHttpRequest'] },
      ],
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-inferrable-types': [
        2,
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          endOfLine: 'auto',
        },
      ],
      'import/no-unresolved': [
        2,
        {
          ignore: ['virtual:pwa-register'],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'max-lines': [
        2,
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'react-func/max-lines-per-function': [
        'error',
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],
      'max-params': [2, 3],
      'max-depth': [2, 4],
      'max-statements': [2, 30],
      'max-statements-per-line': [2, { max: 1 }],
      'quote-props': [0, 'always'],
      'import/named': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'index',
            'sibling',
            'parent',
            'object',
            'type',
          ],
        },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['*.spec.ts'],
    rules: {
      'max-lines-per-function': 'off',
    }
  },
  {
    files: ['**/styled.ts'],
    rules: {
      'prettier/prettier': [
        'off',
        {
          'singleQuote': true,
        }
      ]
    }
  },
];
