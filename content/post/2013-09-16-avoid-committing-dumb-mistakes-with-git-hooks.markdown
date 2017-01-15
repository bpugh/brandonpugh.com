---
layout: post
title: Avoid Committing Dumb Mistakes with Git hooks
date: 2013-08-14 00:12:00
comments: true
categories: null
published: true
---
**TLDR**: Git hooks are an awesome way to automatically verify your code as you commit your changes

I'm sure we've all been there where we accidentally committed a change that we were supposed to undo or wasn't ready to be pushed and don't realize it until the build breaks or QA finds a bug.

The first step I take to avoid committing anything unintentionally is instead of just running `git add -A` I make sure to review all the changes in the files I'm potentially committing. This is where a graphical tool like Gitk or SmartGit comes in handy as they allow you to click on your modified files and easily view a diff and then select which changes to stage.
Unfortunately changes still slip through as happened to me yesterday when a change of mine got pushed all the way to Test before it was noticed. This led me to create an additional safety net.

### Enter Git hooks
Client side Git hooks are simply scripts that reside in you local repo in the `.git/hooks` directory. These scripts get run at specific times during your local workflow depending on the name of the hook. So for me I wrote a pre-commit hook that checks all the files that are about to be committed and looks for the string `'todo: remove'`
``` bash
# Redirect output to stderr.
exec 1>&2
FORBIDDEN='todo: remove'
git diff --cached --name-only | \
    xargs grep --with-filename -i -n "$FORBIDDEN" && echo "COMMIT REJECTED Found '$FORBIDDEN' references. Please remove them before commiting" && exit 1
exit
```
So now if I make any change that I want to undo before committing, say like commenting out a conditional to make testing easier, I just add a comment like `//todo: remove` and git won't let me commit the changes.

You could also have it look for common debug statements like `console.log` in javascript files or even have it run a code analysis tool against the files staged for commit.

You can download the above hook from this gist: [https://gist.github.com/bpugh/6a9617ac277c93bc86fe5f1507f5ec90](https://gist.github.com/bpugh/6a9617ac277c93bc86fe5f1507f5ec90) 