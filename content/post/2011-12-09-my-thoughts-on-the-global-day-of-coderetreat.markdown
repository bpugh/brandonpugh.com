---
comments: true
date: 2011-12-09 23:04:00
layout: post
slug: my-thoughts-on-the-global-day-of-coderetreat
title: My thoughts on the Global Day of Coderetreat
categories:
- Rant
tags:
- community
---

Last weekend I attended the Global Day of Coderetreat in Dallas, TX which was not only my first Coderetreat but also my first time attending a developer community event and I have to say that it was a great and worthwhile experience.

If you're unfamiliar with the format of a Coderetreat you can read all about it at [coderetreat.com](http://coderetreat.com) but its basically a code kata where you spend most of the day pairing up in 45 min sessions and attempt to solve Conway's Game of Life (a fascinating problem by itself). I had only first heard about it a couple weeks before when Corey Haines went on the Herding code podcast to talk about it and I'm glad I went because I feel took away a few key benefits.

## Getting to know my community

I hadn't realized what a strong development community there was in my city and I met some really cool people who were not only fun to talk to but who I could learn lots of new things from. I found out that there are other regular meet ups such as the [Dallas Hack Club](http://twitter.com/#!/dallashackclub) which I plan to start attending. I even found out that there are quite a few other people besides me who still like to use Vim or Vi key mappings!

## The value of TDD

In school and the places I've worked there hasn't been a very strong emphasis on the importance of TDD or even unit testing so I had only ever dabbled in it after reading about in various books and blog posts. After the Coderetreat however, I was sold. The Coderetreat very strongly encourages following TDD practices and pairing up with an experienced unit tester or TDD practitioner is a great way to learn. Its true that you can get addicted to the quick feedback you get from unit tests and the safety in knowing that whenever we went back and refactored one of our methods we didn't have to worry that we broke something since the unit tests still passed. One of my partners suggested that I read Michael Feathers book [Working Effectively with Legacy Code](http://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052) and it is looking to be a great read. The bulk of what I'm currently doing at work is maintaining existing systems and now I'm working on incorporating unit tests into my updates.

## Exposure to new languages

Coderetreat is language agnostic so they encourage pairing up with someone with development experience fairly different from your own which is a great way to see other programming languages in action. I probably spent most of the morning with Ruby guys and it was impressive to see how quickly we could go from a blank project to our first failing test! I also saw some of the cool things you can do with Rake as far as automatically building .net projects and I got some exposure to [NSpec](http://nspec.org/).

So I highly recommend attending a Coderetreat if you get the chance but at the very least get out in your community by attending some local user groups or conferences.
