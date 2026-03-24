---
date: 2026-01-04
title: datetime-local doesn't have full cross-browser support
tags: ['html']
---

I recently discovered the `datetime-local` input type doesn't actually have full browser support.

If you have a form value that needs both a date and time component, then you might be tempted to rely on the platform to simplify your implementation and use `datetime-local` to avoid needing two separate inputs, the values of which you'll need to combine at some point. Unfortunately I don't think it's supported enough to be usable in most applications.

The MDN page for [datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local) is a bit misleading because at the top it says it's "Baseline widely available" but if you check the browser [compatibility chart](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local#browser_compatibility) down at the bottom then you'll see asterisks next to Firefox and Safari on Desktop and clicking that reveals that they only display a datepicker and _not_ a timepicker.

This means that users have to manually type in the time which _might_ be an acceptable tradeoff but if the user doesn't add the time then Firefox will just return `null` as its value.

Firefox did recently address these issues in Firefox 144, but as of this writing it's still behind an [experimental flag](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features#time_picker_for_datetime-local_input_field).

![screenshot firefox new support](/til/html/firefox-datetime-local-support.png)
