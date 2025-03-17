---
author: 'Brandon Pugh'
comments: true
date: 2019-06-29T10:54:24+02:00
lastmod: 2025-03-17
draft: false
image: ''
menu: ''
share: true
tags:
  - javascript
  - tooling
  - vscode
title: My Always-Up-to-Date VS Code Setup for Web Development
---

I've gone through the setup and daily use of a number of editors over the years including most current popular ones for front end development (i.e. sublime, atom, and vs code) and for me VS code is the best choice for front end development at the moment.

The team has put a lot of effort into making it a great javascript experience out of the box and it shows (VS code itself is written in typescript and the team uses vs code to build vs code) and with some additional work you can have _the best_ experience while writing javascript.

## Extensions

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): See [http://editorconfig.org/](http://editorconfig.org/) if you don't already have a `.editorconfig` file in your project
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): format javascript using the excellent new [Prettier](https://github.com/jlongster/prettier) project by [James Long](http://jlongster.com/)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates [ESLint](https://eslint.org/) JavaScript linter into VS Code
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode): AI assisted intellisense for Python, TypeScript/JavaScript and Java
- [Pretty Typescript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors): Makes typescript errors _much_ more readable in VS Code—really should be built-in
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): Integration for the [Jest](https://facebook.github.io/jest/) testing framework
- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets): Common code snippets for unit tests
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): An excellent spell checker that works well with camelCase code
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Autocompletes filenames, handy when typing paths to import modules
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Auto rename paired tag in HTML/XML and JSX
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Auto add closing tags in HTML/XML and JSX
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): Shows the latest version for each dependency in your `package.json`
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint): Markdown linting and style checking for Visual Studio Code. Handy for editing Readme files
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint): Modern CSS/SCSS/Less linter
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons): Very extensive set of icons for just about every file type imaginable
- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock): Subtly change the workspace color of your workspace. Ideal when you have multiple VS Code instances and you want to quickly identify which is which

## React Specific

- [css2React](https://marketplace.visualstudio.com/items?itemName=gottfired.css2react): Convert selection between CSS and React inline style syntax and vice versa
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): The name says it all. See the full list of [snippets here](https://github.com/ults-io/vscode-react-javascript-snippets/blob/master/docs/Snippets.md)
- [Sapling](https://marketplace.visualstudio.com/items?itemName=team-sapling.sapling): Creates an interactive component dependency tree embedded within the VS Code sidebar

## Angular Specific

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template): Rich editing support for Angular html templates
- [Angular2 inline](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline): Syntax highlighting for Angular inline templates
- [Angular snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2&wt.mc_id=angularessentials-github-jopapa): Angular v8 snippets
- [Angular Component Extractor](https://marketplace.visualstudio.com/items?itemName=PKief.angular-component-extractor): Helper to extract components from templates

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

- `"editor.fontFamily": "Fira Code"` - [Fira Code font](https://github.com/tonsky/FiraCode)
- `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }` - Any fixable eslint issues will be automatically fixed on save
- `"editor.fontLigatures": true` - Requires a font that supports ligatures like Fira Code
- `"workbench.editor.showTabs": false` - VS Code has excellent tab switching built and IMHO eliminates the need for displaying tabs across the top

## Profiles

Now in VS code you can create various [profiles](https://code.visualstudio.com/docs/editor/profiles) as a way to group various customizations and extensions. For example, an Angular and a React profile. I highly recommend checking it out.
