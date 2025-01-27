---
date: 2025-01-27
title: "uv package manager"
tags: ['python']
---

I recently came across this post, [Uv has a killer feature you should know about](https://valatka.dev/2025/01/12/on-killer-uv-feature.html), which led me to discover the [uv](https://github.com/astral-sh/uv) package and project manager for Python.
This seems to be the new preferred tool for managing python versions/dependencies as it's faster and can replace pyenv, pip, virtualenv, and others.

It just saved me some headache as I tend to mostly use python for various tools and I tried to install a package the other day with `pip install` but it failed with some inscrutable error.
Then I realized the package wouldn't work with python 3.13 which I'd been using — and python 3.12 was causing a sub dependency to throw warnings — but 3.11 turned out to be the lucky version which `uv` made it easy to setup with:

```sh
uv python install 3.11
uv add tool <package>
```

Their [docs](https://docs.astral.sh/uv/#getting-started) were really helpful and installing it was pretty easy even on windows.
