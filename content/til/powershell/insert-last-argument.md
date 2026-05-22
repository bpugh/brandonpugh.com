---
date: 2026-05-20
title: Insert the last argument of the previous terminal command
tags: ['powershell', 'bash']
---

Today I learned that you can use `!$` in bash to use the last argument of the previous command.

The simplest example is:

```bash
mkdir /some/long/path
cd !$
```

You can do something similar in powershell by using a PSReadline binding:

```powershell
Set-PSReadLineKeyHandler -Chord "Alt+." -Function YankLastArg
```
