---
date: 2026-02-20
lastmod: 2026-03-06
title: "My git cheatsheet"
tags: ["git"]
---

## Submodules

Command to run after first cloning a repo that uses submodules:

```bash
git submodule update --init --recursive
```

## Keep fork updated

```bash
git remote add upstream https://github.com/adityatelange/hugo-PaperMod.git
git fetch upstream/master
```
