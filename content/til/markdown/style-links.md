---
date: 2025-03-18
title: You can style markdown links as code
tags: ['markdown']
---

I just figured out that you can style a link as inline code in markdown i.e. [`toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
It's a bit non-intuitive since, unlike bold or italics, the backticks go _inside_ the square brackets instead of around the entire link.

```md
This gives a bold link: **[EFF](https://eff.org)**.
This is for italics: *[Markdown Guide](https://www.markdownguide.org)*.
And this is for code: [`toSorted()`](https://www.brandonpugh.com/til/javascript/tosorted/).
```

In my testing this seems supported in most places like github and azure devops. Unfortunately I couldn't find a way get it styled like that in Teams.

