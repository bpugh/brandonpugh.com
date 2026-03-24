---
date: 2025-08-05
title: ICS end dates are exclusive
tags: ['google', 'productivity']
---

Today I learned that per the spec, the `DTEND` value in an ICS file is *exclusive* for all-day events.

It makes sense but it's *not* how most people think of date ranges.

I ran into this while making a small node script that takes a json array of events and generates an ICS file.
This has been the most convenient way I've found to quickly bulk create events in Google Calendar.
The only issue is the multi-day events were coming up a day short.

So for example if Spring Break is from March 16th - March 20th, then the end date would need to be March 21st:

```inf
DTSTART;VALUE=DATE:20260316
DTEND;VALUE=DATE:20260321
```

Pro tip: if you're importing a lot of events into Google Calendar, create a brand new "test" calendar and import the `.ics` file into that calendar first to test it out that way if something is messed up you can just delete the calendar and try again.
Otherwise you have to go through and manually find all the events that got added.
