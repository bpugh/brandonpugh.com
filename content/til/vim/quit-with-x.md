---
date: 2024-01-07
title: Quit vim with :x
tags: ['vim']
---

People like to joke that vim is impossible to exit, but I just discovered that there are actually [several different ways](https://hashrocket.com/blog/posts/how-to-quit-vim) to quit and `:x` is my new favorite.

The `:x` command will save and quit but it differs from `:wq` in that it will only write the file to disc if there were any changes so the _modified date_ of the file won't get updated unnecessarily.

This seems like the preferred behavior most of the time.
That coupled with the fact that it's slightly faster to type has made it my new default way to exit vim.