---
author: 'Brandon Pugh'
comments: true
date: 2019-04-23T10:54:24+02:00
draft: false
image: ''
menu: ''
share: true
tags:
  - git
  - tooling
title: My Recommended Git Hooks
---

In my opinion Git hooks are an incredibly useful yet under-utilized feature of git.
There are lots of resources that go into hooks in detail but here I'm just going to list some of the ones
I find myself using over and over again.

## prepare-commit-msg

Automatically insert ticket number from branch name

## pre-commit

### Run static code analysis

These hooks are by far used the most often but the trick is to make sure that you don't cause each
commit to take too long to run the checks.

- linters
- spell checkers
- auto format code

## pre-push

Check to make sure you don't accidentally push certain types of temporary commits for example `--fixup`
or `--squash` commits or sometimes even `WIP` commits.
