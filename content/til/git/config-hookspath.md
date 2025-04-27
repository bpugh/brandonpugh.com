---
date: 2023-06-28
title: Use `core.hooksPath` for shared hooks
tags: ['git']
---

Sometime around 2019, git added the [`core.hooksPath`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-corehooksPath) config setting to change the directory where git will look for [hooks](https://git-scm.com/docs/githooks).

This is handy for commiting shared hooks into a repo so you no longer need workarounds like a script to copy them into the default `$GIT_DIR/hooks` folder or creating symlinks or relying on tools like [Husky](https://typicode.github.io/husky/).

[This post](https://dev.to/anibalardid/how-to-check-commit-message-and-branch-name-with-git-hooks-without-any-new-installation-n34) is a good example of how you can use it.
