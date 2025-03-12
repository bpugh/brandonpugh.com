---
date: 2025-03-11
title: Toggle a CSS class with vanilla javascript
tags: ['javascript']
---

Today I learned about the `classList.toggle()` method in JavaScript, which makes it trivial to add or remove a class from an element dynamically:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.classList.toggle("active");
});
```

This is has been widely supported in browsers since 2015 with the addition of [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and makes it a lot easier to manipulate the classes on an element instead of having to manipulate the `className` string which is why people used to reach for jQuery for that.

You can also pass a second argument (`true` or `false`) to explicitly control whether the class should be added or removed:  

```javascript
element.classList.toggle("hidden", true);  // Always adds "hidden"
element.classList.toggle("hidden", false); // Always removes "hidden"
```
