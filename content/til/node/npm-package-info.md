---
date: 2025-01-30
title: npmpackage.info
tags: ['node']
---

I recently discovered this handy site that aggregates all usual info I tend to look at when deciding whether or not I want to pull in an NPM package as a dependency.

[npmpackage.info](https://npmpackage.info/package/react-datepicker?t=overview)

Some things I tend to look at:

* When was the last version published?
* How many sub-dependencies does it have?
  * With the rise in supply chain attacks, newer packages try to minimize these with some advertising zero dependencies
* How much will it add to bundle size?
  * I usually check [Bundlephobia](https://bundlephobia.com/) and this displays the stats from there along with everything else
* How widely used is it?
