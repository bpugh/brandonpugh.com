---
date: 2026-02-20
lastmod: 2026-03-06
title: "My git cheatsheet"
tags: ["git"]
---

## Submodules

See [Demystifying git submodules](https://www.cyberdemon.org/2024/03/20/submodules.html)

Command to run after first cloning a repo that uses submodules:

```bash
git submodule update --init --recursive
```

if submodule has been updated on remote, then run this after git pull:

```bash
git submodule update
```

## Keep fork updated

```bash
git remote add upstream https://github.com/adityatelange/hugo-PaperMod.git
git fetch upstream/master
```
