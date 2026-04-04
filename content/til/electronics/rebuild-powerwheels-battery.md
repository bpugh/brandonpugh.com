---
date: 2026-03-15
title: Rebuilding a 6v Power Wheels battery
draft: false
tags: ['electronics']
---

We bought the "Fisher-Price Thomas & Friends ride-on Train" for our toddler and after some time the battery stopped charging.
It uses a Power Wheels 6V 2400 mAh NiMH battery (Model No. 1102822518 / Part No. 3900-8218).
Apparently this battery was fairly unique (and [problematic][reviews]) to this toy and has since been [discontinued][seller].
![alt text](/til/electronics/rebuild-powerwheels-battery-product-image.webp)

I of course did not want to have to scrap an entire power wheels toy that worked just fine except for the battery.

One thing I will say about it though is that it's surprisingly repairable.
I was able to open it up just by removing 4 phillips screws.

![alt text](/til/electronics/rebuild-powerwheels-battery-opened.webp)

From what I gathered, the circuit board is what makes this battery unique.
It allows charging the NiMH battery via micro-usb instead of the typical power wheels charger.

All of the wires seemed fairly self-explanatory.
Except for two small additional wires coming from the battery pack.

![alt text](/til/electronics/rebuild-powerwheels-battery-circuit-board-wires.webp)

Well, it turns out these 6v battery packs are just 5 rechargeable AA batteries strapped together.
The wires were just going to a small thermistor to measure the temperature of the batteries as a way to gauge much it's charged.

![alt text](/til/electronics/rebuild-powerwheels-battery-stripped-battery-pack.webp)

After that, all I had to do was desolder the battery pack from the board, buy a replacement, solder it to the board, and tape the thermistor to the new pack.
Then seal it all back up and I was good to go!

I did come across a [service][service] that seems to this for you but it turned out to be fairly straightforward to do it myself.

[seller]: https://www.impactbattery.com/power-wheels-nimh-6-volt-2400-mah-battery-1102822518-for-thomas-hhp26.html
[reviews]: https://www.amazon.com/product-reviews/B09P9LWMZY/ref=acr_dp_hist_1?ie=UTF8&filterByStar=one_star&reviewerType=all_reviews#reviews-filter-bar
[service]: https://batterygiantaz.com/products/3900-8218-6v-black-thomas-the-train-battery-new-style-rebuild-service