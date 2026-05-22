---
date: 2026-05-12
title: List installed node versions with Volta
tags: ['node', 'tooling']
---

[Volta](https://volta.sh/) is my preferred node version manager these days but the commands are a bit different to what I'm used to.

* `volta list` - show the current tool versions in use
* `volta list node` - show all the versions of node downloaded to the machine
* `volta install node@version` - use the specified version of node. It will download and install it if hasn't before otherwise it will just select it (there is no separate `use` command).
