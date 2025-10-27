---
date: 2025-07-22
title: Apply a patch file
tags: ['git']
---

Today I learned how to create and apply a patch file with Git.

If you want to quickly create patch a file from your current changes just run:

```bash
git diff > mypatch.patch
```

or if like me you just want specific changes then stage them and then run:

```bash
git diff --cached > mypatch.patch
```

then to apply the changes all you need is `git apply mychanges.patch`

Unfortunately if there are conflicts then git will just give you an error: `patch does not apply`

I found if you add the following parameters it'll be more likely to apply cleanly and if not then it'll add conflict markers to the files and you can try to fix the conflicts and generate a new patch:

```bash
git apply --3way --ignore-space-change --ignore-whitespace mychanges.patch
```

I've been using this as a more convenient way to frequently re-apply changes I need locally compared to something like [`--skip-worktree`]({{< ref "skip-worktree-ignore-modified-files" >}}).

I've also found it convenient for sending some quick changes to a teammate.
