---
date: 2025-07-12
title: Share git configuration in repo
tags: ['git']
---

Today I learned that you can share a git config file in a repository for easily sharing certain local config settings with your team.

```bash
git config --local include.path ../.gitconfig
```

This adds the following to your local `config`

```properties
[include]
    path = ../.gitconfig
```

and will load any config values set in that file.

This has a couple advantages in that we only have to run a single git
command and if we need to make future changes we only have to update the
config file instead of requiring devs to run additional commands to get
the update.

These are a couple of common settings I use on a team:

```properties
[core]
    hooksPath = ./src/git-hooks/
[blame]
    ignoreRevsFile = .git-blame-ignore-revs
```
