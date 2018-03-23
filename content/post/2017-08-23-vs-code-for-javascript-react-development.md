---
author: "Brandon Pugh"
comments: true
date: 2017-08-23T10:54:24+02:00
draft: false
image: ""
menu: ""
share: true
tags:
- javascript
- environment
title: VS Code for Javascript & React Development
---
I've gone through the setup and daily use of a number of editors over the years including most current popular ones for front end development (i.e. sublime, atom, and vs code) and for me VS code is the best choice for front end development at the moment.

The team has put a lot of effort into making it a great javascript experience out of the box and it shows (VS code itself is written in typescript and the team uses vs code to build vs code) and with some additional work you can have *the best* experience while writing javascript.

## Extensions

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): See [http://editorconfig.org/](http://editorconfig.org/) if you don't already have a `.editorconfig` file in your project
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): format javascript using the excellent new [Prettier](https://github.com/jlongster/prettier) project by [James Long](http://jlongster.com/)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates [ESLint](https://eslint.org/) JavaScript linter into VS Code
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): Integration for the [Jest](https://facebook.github.io/jest/) testing framework
- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets): Common code snippets for unit tests
- [React Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets): Common React code snippets, especially handy for proptypes
- [css2React](https://marketplace.visualstudio.com/items?itemName=gottfired.css2react): Convert selection between CSS and React inline style syntax and vice versa
- [React Pure To Class](https://marketplace.visualstudio.com/items?itemName=angryobject.react-pure-to-class-vscode): Common React code snippets, especially handy for proptypes
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): A basic spell checker that works well with camelCase code
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Use the VS Code debugger to debug your project running in Chrome
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Autocompletes filenames, handy when typing paths to import modules
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Auto rename paired tag in HTML/XML and JSX
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Auto add closing tags in HTML/XML and JSX
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): Shows the latest version for each dependency in your `package.json`

### Make use of VS Code's recommended extensions feature

VS Code has a nifty feature where you can add an `extensions.json` file to the root of your project so when a teammate opens the directory in vs code for the first they'll be prompted to view the recommended extensions for the workspace. [Read more about here](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)

Below is the file you can use for all the extensions I've mentioned above:

extensions.json:

```javascript
{
  // Recommended extensions for VS Code
  // See http://go.microsoft.com/fwlink/?LinkId=827846
  // for the documentation about the extensions.json format
  "recommendations": [
    // Extension identifier format: ${publisher}.${name}.
    "formulahendry.auto-close-tag",
    "formulahendry.auto-rename-tag",
    "angryobject.react-pure-to-class-vscode",
    "streetsidesoftware.code-spell-checker",
    "EditorConfig.EditorConfig",
    "dbaeumer.vscode-eslint",
    "xabikos.ReactSnippets",
    "gottfired.css2react",
    "andys8.jest-snippets",
    "Orta.vscode-jest",
    "christian-kohler.path-intellisense",
    "msjsdiag.debugger-for-chrome",
    "pflannery.vscode-versionlens",
    "esbenp.prettier-vscode"
  ]
}
```

## Some handy settings

- `"editor.fontFamily": "Fira Code"` [Fira Code font](https://github.com/tonsky/FiraCode)
- `"editor.fontLigatures": true` - Requires a font that supports ligatures like Fira Code
- `"workbench.editor.showTabs": false` - VS Code has excellent tab switching built and IMHO eliminates the need for displaying tabs across the top
- `"window.menuBarVisibility": "toggle"` - I almost never the menu bar across the top so might as well hide it by default (only applies on Windows machines)
