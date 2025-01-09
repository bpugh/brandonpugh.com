---
date: 2025-01-07
title: A single input in a form can submit
tags: ['html']
---

Today I learned that if you have a single text field in a form then browsers will automatically submit it when you press `enter`.

```html
<form>
  <label>
    Search
    <input type="text">
  </label>
</form>
```

This is kinda handy since normally you need to add a submit button to be able to submit a form — but, you should be aware that if you add another field then you _do_ need to add a submit button for the form to work.

[This post](https://www.htmhell.dev/adventcalendar/2024/10/) goes into more detail.
