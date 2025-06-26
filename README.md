# Developing Notes
This website is built with the vite framework + react library, designed with SCSS and javascript.

### Requirements
* node.js version 20.13.2 or 22.14.0
  * for testing and deployment
* SASS CLI - 1.86.0 compiled with dart2js 3.7.2
  * Used for developing and compiling scss files

### Web Testing - Locally
1. cd into the root of the project directory
2. If newely cloned you will need to run the following CLI command: **npm i**
3. To start the local dev server run the follwing command: **npm run dev**
4. the terminal will display a localhost url, vist that

### Web Deployment
1. Ensure that the latest updates are on the main branch and that you are currently on the main branch
2. If newely cloned you will need to run the following CLI command: **npm i**
3. You will need to build a production version of the website by running the following command: **npm run build**
4. Finally deploy the new build by running the following command: **npm run deploy**

### Web desing - SCSS Compiling
Do not edit the CSS files as those are generated when the SCSS files are compiled.
To edit the design of the website use one of the following methods:
* The usage of CSS via inline styling
* Reusing class names
* Editing and compiling of scss files

To debug and compile the scss files use the following SASS CLI command: **sass ./src/design/scss:./src/design/css --style=compressed --no-source-map**
If multiple updates are needed you can add the following to the end of the command: **--watch**
This will allow the terminal to automatically compile the SCSS when the file is updated and saved

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
