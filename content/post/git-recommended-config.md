---
author: 'Brandon Pugh'
comments: true
date: 2022-03-05
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
* `git config --global fetch.prune true` - tells git to automatically run `git remote prune` after a `fetch`. This will clean up any local objects that no longer exist on the remote like tracking branches that have been deleted from the remote server.
* `git config --global rebase.autoStash true` - tells git to automatically stash when you perform a pull and then attempt to unstash them once the rebase is complete. This is almost always my workflow so it's nice to have git do it for me.
* `git config --global rebase.autosquash true` - tells git to automatically include the `--autosquash` parameter when doing a `git rebase --interactive`. You should [read more about autosquashing](https://thoughtbot.com/blog/autosquashing-git-commits) commits if you're unfamiliar with it. I use it all the time for fixing up or rewording previous commits.
