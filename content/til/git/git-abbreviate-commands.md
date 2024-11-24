---
date: 2024-02-02
title: Git rebase.abbreviateCommands
tags: ["git", "vim"]
---

This is probably a very niche use case, but I learned today that you can abbreviate commands that git populates in the todo list during an interactive rebase.

So it'll look like this:

```bash
    p deadbee The oneline of the commit
    p fa1afe1 The oneline of the next commit
```

You can enable this with `git config --global rebase.abbreviateCommands true`.

To be clear, you can always use the abbreviated commands, but since I use Vim to edit the list, it makes it slightly more convenient to edit the commands.

For instance, before when the command was `pick`, and I wanted to squash a commit, I would jump to the line, type `ciw` to delete the word `pick` and enter insert mode, then type `s` and then `esc`.

But when the command is `p`, I can just type `r` and `s`.

So if you're counting, that's **three** fewer keystrokes for each command. Mission. Accomplished.
