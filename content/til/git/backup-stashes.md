---
date: 2025-08-29
title: You can backup your git stashes
tags: ['git']
---

As of Git [2.51](https://github.blog/open-source/git/highlights-from-git-2-51/) there is now a process for backing up your git stashes.

The gist of it is there is now `stash export` command to export your stashes as a single reference and push them to a remote:

```bash
git stash export --to-ref refs/stashes/my-stash
git push origin refs/stashes/my-stash
```

and then on another machine or a different clone of the repo:

```bash
git fetch origin '+refs/stashes/*:refs/stashes/*'
git stash import refs/stashes/my-stash
```

Unfortunately this process isn't that great for regular backups but can be useful if you need easily move lots stashes to another machine.
For one off stashes though, it might be easier to create a [patch file]({{< ref "apply-patch" >}}).
