---
date: 2025-03-13
title: Create exclusive accordions with HTML <details> element
tags: ['html']
---

Today I learned that you can now create an "exclusive accordion", meaning only one section of the accordion is open at a time, using just html with the `details` element.

All you need to do is add a matching `name` attribute to each `<details>` element you want to be considered part of the same "group":

```html
<details name="faq">
  <summary>Section 1</summary>
  <p>
    Section 1 details
  </p>
</details>

<details name="faq">
  <summary>Section 2</summary>
  <p>
    Section 2 details
  </p>
</details>
```

Note, the `<details>` element has been widely supported since 2020 but support for the `name` attribute was only added last year.

Read more: [Exclusive accordions using the HTML details element | MDN Blog](https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/)
