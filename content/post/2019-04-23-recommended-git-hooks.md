---
author: 'Brandon Pugh'
comments: true
date: 2019-05-01T10:54:24+02:00
draft: false
image: ''
menu: ''
share: true
tags:
  - git
  - tooling
title: You Should be Using Git Hooks
---

In my opinion Git hooks are an incredibly useful yet under-utilized feature of git.
There are lots of resources that go into hooks in detail but here I'm just going to list some of the ones
I find myself using over and over again.

## prepare-commit-msg

This hooks is great for templating your commit messages. [This post](https://medium.com/nulab/git-commit-messages-for-the-bold-and-the-daring-3cc91a91e29b) does a great job of highlighting some powerful
possibilities. I like to use it to automatically insert a ticket number from the current branch name.

## pre-commit

### Run static code analysis

These hooks are by far used the most often but the trick is to make sure that you don't cause each
commit to take too long to run the checks. Some popular use cases:

- linters
- spell checkers
- code auto formatting

These checks can save a lot of time on pull requests or code reviews as you're automating a lot of the trivial
issues that can come up and eliminating unnecessary back and forth.

For example the javascript community uses [Prettier](https://prettier.io) to eliminate _any_ formatting inconsistencies.
The dotnet community has a new tool from the core team [dotnet format](https://github.com/dotnet/format) though much
more limited in scope as it only supports formatting configured with an `.editorConfig` file
(see [dotnet coding conventions](https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-code-style-settings-reference?view=vs-2019)).

They can also be helpful for preventing common mistakes you find yourself making as I detailed in a previous post
a while back: [Avoid Committing Dumb Mistakes with Git hooks](https://www.brandonpugh.com/blog/2013/08/avoid-committing-dumb-mistakes-with-git-hooks/)

## pre-push

This is a much less used hook but I find it helpful to use it to check to make sure you don't accidentally push certain types of temporary commits for example `--fixup`
or `--squash` commits or sometimes even `WIP` commits.

## OK I'm sold, now what?

There are a lot of great resources online already for getting started with hooks and a lot of great tools
for managing them. I recommend starting with [Git Hooks](https://githooks.com/) and I will also have a followup post
where I go into detail on the setup and specific hooks I use on my projects.
