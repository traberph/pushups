# Pushups Frontend

To build and run the frontend container, you can use these commands:

**File Naming**

kebab-case
for example `my-component.tsx`

**Component Naming**

PascalCase
for example `MyComponent`

**Function and Variable Naming**

camelCase
for example `fetchUserData`

**Constants and Enum Naming**

UPPER_SNAKE_CASE
for example `MAX_PUSHUPS`
kebab-case also prevents naming conflicts on case-insensitive file systems, ensuring your codebase remains consistent across different environments.

Component Naming

When naming components in a React project, it’s important to use PascalCase. This convention capitalizes the first letter of each word, making component names easy to distinguish from regular HTML elements.

For example, a component that displays a user profile might be named UserProfile.

Function and Variable Naming

camelCase is the preferred convention for naming functions and variables in a React project. This convention uses lowercase letters for the first word and capitalizes subsequent words, making names easy to read and understand.
Also Object Properties and Custom Hooks should be named in camelCase.

For example, a function that fetches user data might be named fetchUserData. This convention is widely used in JavaScript and React and helps maintain consistency across your codebase.

# Welcome XY

**Last pushups received**
time | prompted by
[loading bar for cooldown]

**Last pushups sent**
time | prompted by

btn prompt a user
[loading spinner for cooldown]

btn add Friends



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
