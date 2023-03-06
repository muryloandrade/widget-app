module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'prettier',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'standard-with-typescript',
      'plugin:storybook/recommended',
      'plugin:prettier/recommended',
      'plugin:mdx/recommended',
      'plugin:typescript-sort-keys/recommended',
    ],
    parser: '@typescript-eslint/parser',
    overrides: [{ files: ['*.mdx'], extends: 'plugin:mdx/recommended' }],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
    },
    plugins: [
      'react',
      'react-hooks',
      'import-helpers',
      '@typescript-eslint',
      'eslint-plugin-import-helpers',
      'prettier',
      'typescript-sort-keys',
    ],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/consistent-indexed-object-style': [
        'error',
        'index-signature',
      ],
  
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^[A-Z]',
            match: true,
          },
        },
      ],
      'no-shadow': 'off',
      'no-console': 'off',
      'no-import-assign': 'off',
      'no-useless-constructor': 'off',
      'no-empty-function': 'off',
      'no-use-before-define': 'off',
      'no-unused-vars': 'off',
      'import/no-unresolved': 'error',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['/^react/', 'module', '/^@/', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'typescript-sort-keys/string-enum': 'error',
      'typescript-sort-keys/interface': [
        'error',
        'asc',
        { caseSensitive: true, natural: false, requiredFirst: false },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
      'mdx/code-blocks': true,
      'mdx/language-mapper': {},
    },
  }
  