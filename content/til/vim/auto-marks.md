---
date: 2024-11-24
title: Vim sets auto marks
tags: ["vim"]
---

Today I learned that Vim has some special marks which it sets automatically:

| Command      | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| `` `. ``     | jump to position where last change occurred in current buffer |
| `` `" ``     | jump to position where last exited current buffer             |
| `` `0 ``     | jump to position in last file edited (when exited Vim)        |
| `` `1 ``     | like `` `0 `` but the previous file (also `` `2 `` etc)       |
| `''`         | jump back (to line in current buffer where jumped from)       |
| ` `` `       | jump back (to position in current buffer where jumped from)   |
| `'[` or `']` | jump to beginning/end of previously changed or yanked text    |
| `'<` or `'>` | jump to beginning/end of last visual selection                |

The funny thing is VsVim displays these in the gutter by default and I never knew what the symbols meant.
Vscode-vim has an option to display marks in the gutter but only the regular marks and not these.
