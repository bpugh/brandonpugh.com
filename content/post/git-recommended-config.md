---
author: 'Brandon Pugh'
comments: true
date: 2022-03-05
lastmod: 2024-01-31
image: ''
menu: ''
share: true
tags:
  - tooling
  - git
title: Git Config Settings I Always Recommend
---

If you've ever worked on a project with me then I've probably recommended at least one of these config settings in git.

* `git config --global pull.rebase true` - tells git to always pull with rebase instead of merge (the equivalent of `pull --rebase`).
This not only saves you having to type the flag every time, but also ensures gui clients will also use rebase when pulling.
***Note:*** You should only enable this if you're comfortable with rebasing.
* `git config --global fetch.prune true` - tells git to automatically run `git remote prune` after a `fetch`. This will clean up any local objects that no longer exist on the remote like tracking branches that have been deleted from the remote server.
* `git config --global rebase.autoStash true` - tells git to automatically stash when you perform a pull and then attempt to unstash them once the rebase is complete. This is almost always my workflow so it's nice to have git do it for me.
* `git config --global rebase.autosquash true` - tells git to automatically include the `--autosquash` parameter when doing a `git rebase --interactive`. You should [read more about autosquashing][autosquash] commits if you're unfamiliar with it. I use it all the time for fixing up or rewording previous commits.

## Newer settings

If you haven't updated git in a couple years then you should as it's worth it just for these new config options.

* `git config --global push.useForceIfIncludes true` (2.30.0) - This setting makes `push --force-with-lease` even safer. [See the docs][pushdocs] for more info.
* `git config --global push.autoSetupRemote true` (2.37.0) - Git will automatically setup an upsteam tracking when you run `git push` from a new branch.
* `git config --global rebase.updateRefs true` (2.38.0) - the `--update-refs` option [makes working with stacked branches easier][updateref]

## Personal preference

You might find these useful depending on your personal workflow.

* `git config --global commit.verbose true` - Git will include the diff of the changes at the bottom of the commit message template. I like this because your text editor can then autocomplete variable or function names you want to include in the commit message.
* `git config --global rerere.enabled true` - It stands for Reuse Recorded Resolution, and tells Git to remember how you resolved a merge conflict and automatically reapply if it sees it again.

[updateref]: https://andrewlock.net/working-with-stacked-branches-in-git-is-easier-with-update-refs/
[autosquash]: https://thoughtbot.com/blog/autosquashing-git-commits
[pushdocs]: https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-if-includes
