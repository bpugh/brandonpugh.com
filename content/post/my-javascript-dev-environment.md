---
author: "Brandon Pugh"
comments: true
date: 2017-02-04T10:54:24+02:00
draft: false
image: ""
menu: ""
share: true
tags:
- javascript
- environment
title: The Best Javascript Development Experience
---
## VS Code Setup
To be fair the team behind VS Code puts a lot of effort into making the javascript experience great out of the box but I've found a few great extensions that make it even better.

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): See [http://editorconfig.org/](http://editorconfig.org/) for more info
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): format javascript using the excellent new [Prettier](https://github.com/jlongster/prettier) project by [James Long](http://jlongster.com/)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Mocha Snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets)
- [React Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
- [Autoclose Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Automagically add closing tag in HTML and JSX
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Auto rename paired tag in HTML and JSX

- [Fira Code font](https://github.com/tonsky/FiraCode)
- no tabs
- recommended extensions
- Automatic Typing Acquisition - show Intellisense
- package.json Intellisense

### Extensions

- Jest
- Path Intellisense
- Mocha snippets
- React snippets

## Project Setup

## Eslint
  - react plugin
  - a11y plugin
  - import plugin

## React
- react devtools
- redux devtools
- hot reloading

extensions.json:
```json
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
    "ms-vscode.csharp"
  ]
}
```