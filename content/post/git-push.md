---
author: 'Brandon Pugh'
comments: true
date: 2024-07-14
lastmod: 2024-07-14
image: ''
menu: ''
share: true
tags:
  - tooling
  - git
title: Git force push with `--force-if-includes`
---

TLDR: Use the `--force-if-includes` option added in git 2.30.0, i.e. `git push --force-with-lease --force-if-includes` if you don't want to accidentally overwrite changes when force pushing to a branch.

## The problem with `force-with-lease`

It's widely accepted that using `git push -force` can be dangerous and so ever since `--force-with-lease` was added to git, most posts you read will recommend you always use this instead of `--force` if you need to do a force push to a branch. Most git clients and IDEs will use `--force-with-lease` under the hood when you click the "force push" button.

The problem is that there is a significant caveat with `--force-with-lease` that I see few people mention.
  If you run `git fetch` _without_ `git pull` the remote tracking branch

The [docs](https://git-scm.com/docs/git-push#Documentation/git-push.txt---force-with-leaseltrefnamegtltexpectgt) explain this in detail

##

Sometimes, though, you _do_ want to completely replace what's on the remote then use `--no-force-if-includes`
