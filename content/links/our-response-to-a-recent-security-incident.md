---
date: 2025-12-01
title: "Our response to a recent security incident (Mixpanel)"
tags: ["security"]
---

[Our response to a recent security incident](https://mixpanel.com/blog/sms-security-incident/)

The noteworthy thing about this news to me is how it can serve as an example of how _not_ to disclose a security incident.
The post is incredibly vague and doesn't make clear what actually happened like what systems were exposed or how or the scale of the "incident".
The most specific they get is "detected a smishing campaign", which feels like an intentional use of jargon that doesn't add much value... why not just say "phishing" as it's not that important that it was via SMS instead email especially since they don't even say who the campaign targeted (internal or end users?).
They do mention they "Performed global password resets for all Mixpanel employees" which sounds like an attacker used social engineering to compromise employee credentials and exfiltrate user data.
That's kinda the definition of a data breach yet they only refer to it as a vague "security incident".

I think the most telling aspect, though, is the fact that [OpenAI's response](https://openai.com/index/mixpanel-incident/) to the same incident has _more_ details than Mixpanel's and was released the day _before_.
Makes it seem like Mixpanel only made a public announcement because OpenAI forced them to.

Also from OpenAI's response:
"After reviewing this incident, OpenAI has terminated its use of Mixpanel."
