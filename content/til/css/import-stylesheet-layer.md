---
date: 2025-10-22
title: Import external stylesheet into a layer
tags: ["css"]
---

I'm working on a legacy project that's stuck on v3 of bootstrap and just loads the full minified css file.
We wanted to make it a bit easier to override some of the builtin styles and figured that the new [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer) feature of CSS would be perfect.

I didn't want to change too much about the stylesheets were aren't and thankfully it turns out you can import a stylesheet into a layer:

```html
<link href="https://ourcdn.com/content/css/bootstrap.min.css">

<!-- becomes ↓↓↓ -->

<style>
  @import url("https://ourcdn.com/content/css/bootstrap.min.css") layer(bootstrap);
</style>
```

The main downside is the `@import` rule doesn't support [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity) so you'll want to make sure it's a trusted source.
