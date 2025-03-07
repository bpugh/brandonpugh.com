---
date: 2025-03-06
title: toSorted() array method
tags: ['javascript']
---

Today I learned that there is a newish javascript array method [`toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) which is the "copying" or non-mutating version of `sort()`.

This means you can easily sort an array by getting back a new copy instead of mutating the original:

```js
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']
```

It's pretty cool to see javascript moving more towards immutability.
I mentioned the [`with()` method before](https://www.brandonpugh.com/til/javascript/array-with/) and now there is also [`toReversed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed) and [`toSpliced()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced).

These were added in ES2023 and have been available in browsers since July 2023.
