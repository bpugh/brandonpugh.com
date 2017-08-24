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
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): Integration for the [Jest](https://facebook.github.io/jest/) testing framework
- [Mocha Snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets): Common code snippets for unit tests
- [React Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets): Common React code snippets, especially handy for proptypes
- [Autoclose Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Automagically add closing tag in HTML and JSX
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Autocompletes filenames, handy when typing paths to import modules
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Auto rename paired tag in HTML and JSX

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
    "EditorConfig.EditorConfig",
    "dbaeumer.vscode-eslint",
    "xabikos.ReactSnippets",
    "spoonscen.es6-mocha-snippets",
    "Orta.vscode-jest",
    "christian-kohler.path-intellisense",
    "msjsdiag.debugger-for-chrome",
    "esbenp.prettier-vscode"
  ]
}
```

## Some handy settings
- `"editor.fontFamily": "Fira Code"` [Fira Code font](https://github.com/tonsky/FiraCode)
- `"editor.fontLigatures": true` - Requires a font that supports ligatures like Fira Code
- `"workbench.editor.showTabs": false` - VS Code has excellent tab switching built and IMHO eliminates the need for displaying tabs across the top
- `"window.menuBarVisibility": "toggle"` - I almost never the menu bar across the top so might as well hide it by default (only applies on Windows machines)
