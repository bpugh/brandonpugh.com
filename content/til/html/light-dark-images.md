---
date: 2025-02-19
title: Use the <picture> element light/dark images in markdown
tags: ['html']
---

Thanks to [Jame's post](https://jamesg.blog/2025/02/17/images-light-dark-css), today I learned that you can use the `<picture>` to display different images based on whether or not the set a preference for light or dark mode.

The key is using the `prefers-color-scheme` CSS media query

```html
<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="
      https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png
    "
  />
  <img
    alt="Shows an illustrated sun in light color mode and a moon with stars in dark color mode."
    src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png"
  />
</picture>
```
