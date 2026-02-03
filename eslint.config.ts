import { defineConfig, globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginTypeScriptESLint from 'typescript-eslint';
import parserTypeScript from '@typescript-eslint/parser';
import pluginHtml from 'eslint-plugin-html';
import pluginNode from 'eslint-plugin-n';
import configPrettier from 'eslint-config-prettier';

import globals from 'globals';

export default defineConfig([
  pluginJs.configs.recommended,
  pluginTypeScriptESLint.configs.recommended,
  pluginNode.configs['flat/recommended-script'],
  globalIgnores(['**/.idea', '**/.vscode', '**/node_modules', '**/dist', '**/package-lock.json']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        parser: parserTypeScript,
        requireConfigFile: false
      }
    },
    rules: {
      eqeqeq: 'error',
      'no-case-declarations': 'off',
      'no-trailing-spaces': 'error',
      'no-unsafe-optional-chaining': 'off',
      'no-control-regex': 'off',
      'no-unused-vars': 'off',
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['**/*.html'],
    plugins: { pluginHtml }
  },
  configPrettier
]);
