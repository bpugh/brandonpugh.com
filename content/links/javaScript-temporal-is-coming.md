---
date: 2025-02-10T16:48:42-06:00
title: JavaScript Temporal is coming
---

[JavaScript Temporal is coming | MDN Blog](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)

This will be really nice once it's widely supported.

```js
const durations = [
  Temporal.Duration.from({ hours: 1 }),
  Temporal.Duration.from({ hours: 2 }),
  Temporal.Duration.from({ hours: 1, minutes: 30 }),
  Temporal.Duration.from({ hours: 1, minutes: 45 }),
];

durations.sort(Temporal.Duration.compare);
console.log(durations.map((d) => d.toString()));
// [ 'PT1H', 'PT1H30M', 'PT1H45M', 'PT2H' ]
```
