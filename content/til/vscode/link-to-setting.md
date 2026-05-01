---
date: 2025-05-03
title: Link directly to a VS code setting
tags: ['vscode']
---


Today I learned that you can link directly to specific VS Code settings using the `vscode:` URL scheme.
They follow this format: `vscode://settings/editor.formatOnSave`, where you put the setting ID at the end of the URL.

So if you click [this link](vscode://settings/editor.formatOnSave), VS Code should open straight to that setting.

This is probably most useful for folks who like to write about VS Code features (like me), but it's also handy if you're helping like a teammate you can just send them a link to a setting to make it easier for them.

Also, in VS Code, you can click the gear icon next to a setting and select "Copy Setting URL" to get the link.
