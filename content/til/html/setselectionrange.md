---
date: 2024-12-08
title: setSelectionRange in Safari will focus the input
tags: ["html"]
---

Apparently in Safari, [`setSelectionRange()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange) will focus the element even when not focused despite MDN stating that "The element must be focused for the call to have any effect".

According to this [bug](https://bugs.webkit.org/show_bug.cgi?id=224425), this is considered intended behavior even though it's inconsistent with MDN and the other browsers.

It's worth noting though, during my testing, I noticed that Chrome/Firefox _will_ update the selection and cursor position you just won't see it unless you programmatically call `.focus()` on the element.

