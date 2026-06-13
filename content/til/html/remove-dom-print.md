---
date: 2026-05-14
title: You can save ink by removing dom elements
draft: true
tags: ['html']
---

You can remove elements from the DOM if you're trying to print a page and want to save some ink.

```js
var source = document.getElementById('parts_standard')
var target = document.querySelector('#content > .container')
target.innerHTML = source.innerHTML
```
