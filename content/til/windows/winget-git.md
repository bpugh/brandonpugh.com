---
date: 2025-06-05
title: Use winget to install Git for Windows with Unix tools
comments: true
tags: ['windows']
---

For years I've been using Chocolately for quickly installing git on new Windows and it's pretty handy.
Recently though I looked into doing the same with winget since it comes built into Windows now which makes it easier to just give to the command to a co-worker.

One thing I always do though is enable the option to add the common linux tools to the path.

With Chocolately you could just add the `/GitAndUnixToolsOnPath` param like this:

`choco install git.install -y --params="'/GitAndUnixToolsOnPath'"`

It turns out that is a convenience option added to the chocolately package so it took a bit of digging to figure out how do it with winget but I eventually arrived at the following:

`winget install --id Git.Git -e --source winget --custom '/o:PathOption=CmdTools'`

You need the `--custom` param for the [install command](https://learn.microsoft.com/en-us/windows/package-manager/winget/install) that let's you pass arguments to the git installer.

Then I just had to reference the handy [docs for the installer](https://gitforwindows.org/silent-or-unattended-installation.html) for git for windows and find which [arguments](https://gitforwindows.org/mapping-between-git-installer-gui-settings-and-command-line-arguments.html) corresponded to the options I wanted. `PathOption=CmdTools` in this case.
