---
date: 2024-02-07
title: Git ORIG_HEAD
tags: ["git"]
---

Today I learned that `ORIG_HEAD` is a reference that git maintains to the previous commit `HEAD` pointed to before it "was modified in a drastic way".

The docs mention these operations as examples of when `ORIG_HEAD` is updated: (git am, git merge, git rebase, git reset)

This is useful when you want to undo one of those operations.

You can use `git reset --hard ORIG_HEAD` (or [`--keep`]({{< ref "reset-keep" >}})) to put your branch back to where it was before the operation.
