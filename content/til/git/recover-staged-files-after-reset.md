---
date: 2025-07-14
title: Recover staged files after a reset
tags: ['git']
---

TLDR, this [SO answer](https://stackoverflow.com/a/58853981/1715138) proved to be what worked for me.
Basically run this command:

```bash
git fsck --full --no-reflogs --unreachable --lost-found | grep blob | cut -d\  -f3 | while read in; do printf "blob: $in\n"; git cat-file -p $in; printf "\n--------------------------------\n"; done > recover.txt
```

and search through the generated file for the changes you're looking for.

You need to use the `git fsck` command to get a list of dangling _blobs_ and their associated SHAs.
You then need to get the contents of each object to see if it has the changes you're looking for.

I was testing some automated changes to a lot of files so I was regularly running `git reset --hard` to undo and try again.
I had a number of untracked files sitting in my working directory from some other work in progress but I knew that they wouldn't be affected since they're untracked.
I also knew that I was playing with fire for so late on a Friday afternoon.
And sure enough, at some point I wanted to test an incremental change so I staged all the changes so that I could then compare new modifications with what was in the index.
I then did another hard reset but I forgot that I had added everything including the untracked files to the index so now those files were also deleted.

I did have some hope because I remember reading that it was possible to recover changes that had been staged but it turned out to be a bit more involved simply recovering something from the reflog.

[original post I found](https://blog.plover.com/2016/04/16/)
