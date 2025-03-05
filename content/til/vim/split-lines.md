---
date: 2025-03-04
title: Split lines in Vim
tags: ['vim']
---

I've long wanted a command that was the opposite of `J` (join lines), and I finally took the time to see if it's possible.
Turns out there a few solutions.

The simplest way if you want to split on a whitespace character is to just type `r` `enter`.
I can't believe I never thought of that before.

You can also install the [vim-split-line](https://github.com/drzel/vim-split-line) plugin, which adds the `:SplitLine` command.
This command will split the current line at the cursor position.

But, as they note in their README, you can also use the following command to split the line at the cursor position:

```vim
nnoremap S :keeppatterns substitute/\s*\%#\s*/\r/e <bar> normal! ==<CR>
```