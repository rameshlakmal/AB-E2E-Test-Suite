import { defineConfig, globalIgnores } from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import pluginQuery from '@tanstack/eslint-plugin-query';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginSecurity from 'eslint-plugin-security';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/next.config.js']),
  eslintConfigPrettier,
  ...pluginQuery.configs['flat/recommended'],
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      security: pluginSecurity.configs.recommended,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
      },
    },

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      ],

      'react/jsx-props-no-spreading': 'off',

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

      'no-nested-ternary': 'off',
      'import/prefer-default-export': 'off',
      'security/detect-object-injection': 'off',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
]);
