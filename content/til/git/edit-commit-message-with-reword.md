---
date: 2024-11-02
comments: true
title: "Edit commit message with git reword"
tags: ["git"]
---

I discovered that a [`reword`](https://git-scm.com/docs/git-commit?ref=blog.gitbutler.com#Documentation/git-commit.txt---fixupamendrewordltcommitgt) option was added to `--fixup` back in [git 2.32](https://devclass.com/2021/06/07/got-typos-git-2-32-lands-finally-offers-way-to-reword-commits/)

The basic command looks like `git commit --fixup=reword:<commit>` and you can use it like you would the other [autosquash](https://thoughtbot.com/blog/autosquashing-git-commits) commands.

I recommend creating an alias for it though.
Thanks to [this post](https://jordanelver.co.uk/blog/2020/06/04/fixing-commits-with-git-commit-fixup-and-git-rebase-autosquash/), I've had a `fixup` alias that uses [`fzf`](https://github.com/junegunn/fzf) to select form recent commits so I created a similar one for reword:

```bash
[alias]
  reword = "!git log -n 50 --pretty=format:'%h %s' --no-merges | fzf | cut -c -7 | xargs -o -I{} git commit --fixup=reword:{}"
```

Note, if you're on Windows, you can install `fzf` via [Chocolatey](https://chocolatey.org/packages/fzf).
And you might also be interested in [PSFzf](https://github.com/kelleyma49/PSFzf) which a Powershell module that wraps `fzf`.
