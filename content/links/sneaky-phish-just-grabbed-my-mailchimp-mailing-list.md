---
date: 2025-03-25
title: Anyone can be scammed
tags: ['security']
---

Even Troy Hunt (a well-known security researcher and creator of [Have I Been Pwned](https://haveibeenpwned.com/)) fell for a phishing email.  
He wrote all about it on his blog:
[A Sneaky Phish Just Grabbed my Mailchimp Mailing List](https://www.troyhunt.com/a-sneaky-phish-just-grabbed-my-mailchimp-mailing-list/)

I think it could have happened to any of us.
The email looks fairly well crafted and I appreciated his analysis of the factors that led to him falling victim.

Honestly the most frustrating part of the story is the fact that Mailchimp doesn't delete unsubscribed emails and even worse they give you no way to opt out of that so a list owner would have to regularly go in an delete them manually... and why do they store your IP address?? 😡

I also thought it was sneaky that they generated an api key on his account. So in addition to updating login credentials remember to check for any recently added api keys.

I hadn't thought of this vector before, but it's now one more reason why I prefer subscribing via RSS.
