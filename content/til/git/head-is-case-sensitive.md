---
date: 2025-10-11
title: Lowercase head behaves differently in git worktrees
tags: ['git']
---

Today I discovered that referencing `HEAD` in git commands should technically always be uppercase.

On case-insensitive file systems you can use lowercase `head` most of the time and it just works... as long as you don't use worktrees.

If you use `head` while in a worktree then it resolves to the head of the _main_ worktree and not the head of the worktree you're currently in like you would expect.

I learned this the hard way after getting some very confusing results from the git command I was running.

[This Stackoverflow answer](https://stackoverflow.com/questions/48137927/git-head-lowercase-vs-head-uppercase/56346962#56346962) explains exactly why it happens and gives the very sensible advice to "Avoid this bad habit: if you don't like typing `HEAD` in all uppercase, use `@`".
