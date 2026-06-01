---
title: Colophon
description: How this website is made
date: 2012-01-10
layout: page
comments: false
---

This is a personal blog built with [Hugo](https://gohugo.io/), a static site generator written in Go. It's designed for speed and simplicity, which is perfect for a blog that prioritizes content over complexity.

## Theme

The site uses the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme, a minimal and clean theme that emphasizes readability and performance. Some customizations have been made to the default theme, including IndieWeb microformats and custom blockquote styling for alerts and admonitions.

## Hosting & Deployment

The site is hosted on [Netlify](https://www.netlify.com/), which automatically builds and deploys the site whenever changes are pushed to the GitHub repository. The build process runs Hugo to generate the static site, which is then served globally via Netlify's CDN.

## Tools & Technologies

- **Hugo** (v0.153.2 extended) - Static site generator
- **PaperMod** - Hugo theme
- **Netlify** - Hosting and continuous deployment
- **GitHub** - Source control and repository hosting
- **Fuse.js** - Client-side search functionality
- **Giscus** - Comment system (when enabled)
- **ImageMagick** - Image optimization
- **cspell** - Spell checking

## Analytics & Comments

The site uses privacy-respecting methods for analytics and engagement:
- Analytics are handled server-side through Netlify Analytics
- Comments are powered by Giscus (GitHub-backed) when enabled
- No third-party tracking or analytics scripts that compromise user privacy

## Content Organization

Content is organized into several sections:

- **Blog Posts** - Full articles in `/blog/`
- **TIL** (Today I Learned) - Short, topic-based entries in `/til/`
- **Links** - Curated links with commentary
- **Garden** - Evergreen reference documents and resources
- **About** - Information about me

## Development

The source code for this site is [available on GitHub](https://github.com/bpugh/brandonpugh.com). Development setup includes a DevContainer configuration for consistent development environments.

## Accessibility & Performance

This site is built with accessibility and performance in mind:
- No JavaScript required for core functionality
- Semantic HTML and proper heading hierarchy
- Fast page loads with static HTML delivery
- Clean, readable typography
