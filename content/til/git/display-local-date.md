---
date: 2026-05-19
title: Display git commit dates in local timezone
tags: ['git']
---

Most Git commands accept a `--date=` option with accepted values of `relative`, `local`, `default`, `iso`, or `rfc` to control how dates are displayed.

For example:

```bash
git show --date=local
```

And as usual, if you Git to always display dates this way then you can set it globally with:

```bash
git config --global log.date local
```
