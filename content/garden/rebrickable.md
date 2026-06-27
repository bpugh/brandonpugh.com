---
date: 2026-06-14
title: "Making Rebrickable parts list printable"
tags: ["html, css"]
---

Printing the parts list for a set by default prints a lot of unnecessary elements on the first page and breaks across some of the grid tiles.

I fixed the breaking with this style:

```css
.js-part {
    page-break-inside: avoid;
}
```

Which I can inject with javascript:

```js
const style = document.createElement('style');
style.textContent = `
  .js-part {
    page-break-inside: avoid;
  }
`;
document.head.appendChild(style);
```

I tried the following to remove all unnecessary elements, which unfortunately this sometimes causes the page to re-fetch the images which causes half to fail to load.

```js
var source = document.getElementById('parts_standard')
var minifigs = document.getElementById('parts_minifig')
var target = document.querySelector('#content > .container')
target.innerHTML = source.innerHTML
target.append(minifigs)
```

Alternatively, I can remove the specific elements:

```js
document.querySelectorAll('nav, .heading-title, #inventory > .row, #inventory > .mt-10, .flexslider, .flexslider-controls-container-sets, .nav-tabs, footer').forEach(el => el.remove())
```

This doesn't print quite as nicely as the first approach but it's probably good enough.

Of course, if this is just a one-off print then it's probably easier to remove the elements by inspecting them with the browser devtools.
