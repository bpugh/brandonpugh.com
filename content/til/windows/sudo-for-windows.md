---
date: 2025-06-25
title: Sudo for Windows
tags: ['windows']
---

I just learned that Windows now has a builtin `sudo` command.
You need to enable it from the Windows developer settings and then you use it similar to `sudo` on other operating systems.

I've been using [gsudo](https://gerardog.github.io/gsudo/docs/gsudo-vs-sudo) for some time and I still prefer as it overall has a nicer experience and is more fully featured, but if you're looking for one less thing to install then the builtin sudo is decent.

One thing I ran into though is in the default "new window" mode, if you want to run a powershell script elevated then you need to run it as:

```powershell
sudo pwsh .\build.ps1
```
