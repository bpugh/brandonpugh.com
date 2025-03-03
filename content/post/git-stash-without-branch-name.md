---
title: "Git Stash Without the Branch Name"
date: 2025-02-28T14:52:50-06:00
comments: true
tags: ["git"]
---

I found a way to stash changes in git without including the branch name in the stash message.
This might be a very niche use case but it's been a minor annoyance for me for some time.
If you just want the alias, then add the following to your `.gitconfig`:

```bash
[alias]
    sm = "!f() { git stash || exit 1; rev=$(git rev-parse stash@{0}) && git stash drop stash@{0} || exit 1; git stash store -m \"$1\" $rev; }; f"
```

You can also use this technique for renaming stashes.

## Why?

When I stash changes in git, it's usually work that is independent of the branch I'm working on.
If I have work in progress that does belong on a particular branch, then I'll create a WIP ("work in progress") commit on that branch instead.

This means that git's default behavior of including the branch name in the stash message just adds noise for me.

```bash
❯  git stash list
stash@{0}: On feature/get-user-groups: Potential refactor of auth flow
stash@{1}: On 123-fix-login-bug: disable-dupe-check
```
On top of that, most GUI clients show stashes in a sidebar so the important part of the message tends to be cut off.

Unfortunately there isn't a built-in way to change this behavior but we can get around it with a git alias (formatted for clarity):

```bash
sm = "!f() {
    git stash || exit 1;
    rev=$(git rev-parse stash@{0}) && git stash drop stash@{0} || exit 1;
    git stash store -m \"$1\" $rev;
}; f"
```

This will stash the changes, drop the stash, and then use the `stash store` command to create a new stash from the commit of the dropped stash.
The store command won't include the branch name in the message, so running `git sm "Potential refactor of auth flow"` will give you:

```bash
❯  git stash list
stash@{0}: Potential refactor of auth flow
```

