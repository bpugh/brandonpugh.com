---
author: 'Brandon Pugh'
date: 2017-03-02T10:54:24+02:00
draft: false
image: ''
menu: ''
share: true
tags:
  - netlify
title: Use Netlify for a Poor Man's Self-Hosted Url Shortener
---

I recently migrated my blog from Github pages to [Netlify](https://www.netlify.com) and so far it's been an awesome experience! Netlify gives you so much for free it almost feels like stealing! If you're hosting some static content on github pages or S3 or somewhere, I highly recommend you check them out especially if you have a [static gen](https://www.staticgen.com/) build process.

One of the cool features Netfify gives you is configuring `301` redirects using a simple `_redirects` file in the root of your site. For example:

```
/home              /
/news              /blog
```

It also supports external urls so can do things like:

```
/linkedin         https://www.linkedin.com/profile
```

Pair this with a short domain (Netlify supports custom domains for free!) and you can create your own shortened urls just by adding lines to this file.

For example, I have a netlify site configured with the domain `pugh.pw` and connected to a github repo with this in my redirects file:

```
/vim          https://raw.githubusercontent.com/bpugh/dotfiles/master/vim/.vimrc
```

Now http://pugh.pw/vim will take me to my `.vimrc` file so if I need to `ssh` into a new linux machine I can easily fetch my `vimrc` with a quick `curl` command.

## When would you use this?

This is perfect if you want to make some short memorable urls that you control yourself. Services like Bitly are convenient for quick one-off links but you're depending on a third party service and you don't always have complete control over what the url will look like.

This probably isn't for you if you need features like analytics or creating a large number of links, in which case you might want to look at some more full featured open source options for self hosting a url shortener.

But with such a simple setup and being able to quickly add links by editing the file through the github UI, this is great for creating some personally branded urls or convenient shortcut links.
