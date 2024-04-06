This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## ============== Step1 configure test cases  ===============

 npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom


## // create file: jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // <= setup file here 
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);

## // create file: jest.setup.js
import "@testing-library/jest-dom";

## ============== Step 2: Install the necessary dependencies for ESLint, Prettier, Husky, and lint-staged:  ===============

npm add --dev eslint prettier husky lint-staged eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier prettier-plugin-tailwindcss eslint-config-next

## =============== Step 3: Create Prettier Configurations ============
Create an Prettier configuration file (.prettierrc) and a Prettier ignore file (.prettierignore):

.prettierrc:

{
  "bracketSpacing": true,
  "endOfLine": "lf",
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "plugins": ["prettier-plugin-tailwindcss"]
}

.prettierignore :

.next
.cache
package-lock.json
public
node_modules
next-env.d.ts
next.config.ts
yarn.lock

## =========== Step 4: Create ESLint Configurations ==========

Create an ESLint configuration file (.eslintrc.js) and a ESLint ignore file (.eslintignore): 

.eslintrc.js:
The .eslintrc.js file is the main ESLint configuration file for your project. It contains a JavaScript object that defines the ESLint settings and rules to be applied to your codebase.

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'next',
    'eslint:recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // JavaScript rules
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'object-shorthand': 'warn',
    'quote-props': ['warn', 'as-needed'],
    // TypeScript rules
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    // React rules
    'react/jsx-fragments': ['warn', 'syntax'], // Shorthand syntax for React fragments
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['ts', 'tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

.eslintignore: 

.next
.cache
package-lock.json
public
node_modules
next-env.d.ts
next.config.ts
yarn.lock

## =========== Step 5: Create Husky Configurations ========

Create an Husky configuration file (.huskyrc): 

.huskyrc :
{
    "hooks": {
      "pre-commit": "lint-staged"
    }
}

The .huskyrc file is used to configure Git hooks using the Husky tool. Husky is a tool that allows you to easily set up and manage Git hooks in your project. Git hooks are scripts that run at specific points in the Git workflow, such as before a commit (pre-commit), before a push (pre-push), etc. 

## =============== Step 6: Create Lint Stage Configurations =========

Create an Lint Stage configuration file (.lintstagedrc):



The .lintstagedrc file is used to configure the behavior of lint-staged, a tool that runs linters on pre-committed files in a Git repository. lint-staged helps ensure that only files that pass certain linting checks are committed to the version control system.

.lintstagedrc:
{
    "*/**/*.{js,jsx,ts,tsx}": [
        "prettier --write",
        "eslint --fix",
        "eslint"
    ],
    "*/**/*.{json,css,md}": [
        "prettier --write"
    ]
}

## ==== Step 7: Add Scripts to package.json=====

  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 4000",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "lint:strict": "next lint '*/**/*.{js,jsx,ts,tsx}'",
    "prettier": "prettier --write */**/*.{js,jsx,json,ts,tsx,scss,css,md}",
    "prepare": "husky install"
  },

  ##  ========= Step 8: Test Your Setup ======== 

npm run lint
npm run lint:fix
npm run lint:strict
npm run prettier


## ====
