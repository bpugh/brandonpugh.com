---
date: 2025-06-20
title: Use skip-worktree to ignore modified files
tags: ['git']
---

Today I learned about the `--skip-worktree` command in git which will treat a file like it hasn't been modified.
This is useful if you have to modify a file locally but don't ever want to commit it (config files are a common scenario).

Like me, you may have seen `--assume-unchanged` used in this way but that's not what it's meant for since it's "designed for cases where it is expensive to check whether a group of files have been modified".
As a result you're likely to lose the changes you have made to those files.
[This post](https://web.archive.org/web/20200604104042/http://fallengamer.livejournal.com/93321.html) shows a good summary of the outcomes of common operations with each command.

The advantage of `--skip-worktree` is that git really tries to preserve the changes you've made to those files.
This works pretty well if the files aren't changed very often but it can be pretty tedious if they change frequently even when those changes wouldn't have caused merge conflicts as git will refuse to modify the files.

Say for example you need to make a change to a config file for your environment. You would run:

```bash
git update-index --skip-worktree config/local.conf
```

If changes are rarely committed to this than you may not have to think about it again.

However, if you need to switch to a branch with changes to this file then you'll get an error like:

> error: Your local changes to the following files would be overwritten by checkout:
    path/to/file

If you run `git stash` now, that file won't be affected.

So now you need to run:

```bash
git update-index --no-skip-worktree config/local.conf

# now you can run stash
git stash

git switch other-branch

git stash pop

# you'll need to resolve conflicts if any otherwise skip the file again

git update-index --skip-worktree config/local.conf

# you can run this to see which files have skip-worktree set
git ls-files -v | grep '^S'
```

Depending on how frequently you have to deal with this, you'll quickly end up making an alias or script for it.
