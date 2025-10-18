import { globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginHtml from 'eslint-plugin-html'
import pluginNode from 'eslint-plugin-n';
import configPrettier from 'eslint-config-prettier';

import globals from 'globals';

export default [
  pluginJs.configs.recommended,
  pluginNode.configs['flat/recommended-script'],
  globalIgnores(['**/.idea', '**/.vscode', '**/node_modules', '**/dist', '**/package-lock.json']),
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        requireConfigFile: false,
      },
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
    }
  },
  {
    files: ['**/*.html'],
    plugins: { pluginHtml },
  },
  configPrettier
];
