---
date: 2025-03-14
title: Profiles in Visual Studio Code
tags: ['vscode', 'tooling']
---

I recently learned that VScode let's you create different [profiles](https://code.visualstudio.com/docs/editor/profiles) that let you switch between different sets of settings, keyboard shortcuts, snippets, and most importantly, extensions.

This is really if, like me, you have various extensions for different types of projects and don't need them all running all the time. For example, I have extensions for C#, react, angular, or markdown projects (apparently I had 86 extensions installed 😱).

The profile editor is actually pretty nice, letting you copy from an existing profiles for from some builtin templates.

Unfortunately it doesn't let you easily copy only certain extensions so the easiest way I found to get a list of all my extensions by running `code --list-extensions` from the command line and then creating an `extensions.json` file in a workspace.
When you open that folder, VScode will see those as [recommended extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) for that workspace and let you install them all with one click.
