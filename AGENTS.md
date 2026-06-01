# Project Guidelines

## Overview

Personal blog built with [Hugo](https://gohugo.io/) using the [PaperMod](themes/PaperMod/) theme, deployed on Netlify. See [README.md](README.md) for basic setup.

## Build & Serve

```bash
hugo server -D        # Dev server with drafts at localhost:1313
hugo                   # Production build to /public
```

Hugo version: **0.153.2** (extended). DevContainer config available in [.devcontainer/](.devcontainer/).

## Content Structure

| Section    | Path                   | Description                                                      |
| ---------- | ---------------------- | ---------------------------------------------------------------- |
| Blog posts | `content/post/`        | Full articles                                                    |
| TIL        | `content/til/<topic>/` | Short "Today I Learned" entries, organized by topic subdirectory |
| Links      | `content/links/`       | Link blog — short commentary on external articles                |
| Garden     | `content/garden/`      | Evergreen/evolving reference documents                           |

## Frontmatter Patterns

All content uses YAML frontmatter (`---`). Key differences by section:

**Post** — includes `author`, `comments`, `image`, `menu` fields:

```yaml
---
author: "Brandon Pugh"
comments: true
date: 2024-08-31
tags:
  - git
title: Tips for creating merge commits
---
```

**TIL** — minimal, tags as inline array:

```yaml
---
date: 2026-05-19
title: Display git commit dates in local timezone
tags: ["git"]
---
```

**Links** — body starts with a markdown link to the source article:

```yaml
---
date: 2025-08-12
title: "Friends at Last: Tailwind & CSS…whodathunkit?!"
tags: ["css"]
---
[Article Title](https://example.com/article)
```

**Garden** — includes `lastmod` for tracking updates:

```yaml
---
date: 2026-02-20
lastmod: 2026-03-06
title: "Git aliases"
tags: ["git"]
---
```

## Creating Content

- **New TIL**: `./new-til.ps1 <topic> <filename>` (Windows) or `./new-til.sh <topic> <filename>` (Linux/Mac)
  - Creates `content/til/<topic>/<filename>.md` with auto-dated frontmatter
- **New post**: `hugo new post/title-of-post.md`
- Dates: `YYYY-MM-DD`. Tags: lowercase. Filenames: kebab-case.
- Bilingual posts use suffix: `filename.es.md` for Spanish.

## Image Optimization

Use [optimize-images.ps1](optimize-images.ps1) — requires ImageMagick:

```powershell
./optimize-images.ps1 -Path "content/til/electronics/*.jpg"
./optimize-images.ps1 -Path "*.jpg" -Format webp -Quality 80
```

Backs up originals as `*.original`, updates markdown references for format conversions.

## Layout Customizations

Custom overrides of PaperMod live in [layouts/](layouts/):

- IndieWeb microformats (h-card, h-entry) in author and single page templates
- Blockquote alerts/admonitions with icons in [layouts/\_default/\_markup/render-blockquote-alert.html](layouts/_default/_markup/render-blockquote-alert.html)
- Custom RSS with full content and email reply links in [layouts/rss.xml](layouts/rss.xml)
- TIL section listing in [layouts/til/list.html](layouts/til/list.html)

## Configuration

- [config.yml](config.yml) — site config, menus, params, multilingual (en/es)
- Markdown rendering allows raw HTML (`markup.goldmark.renderer.unsafe: true`)
- Syntax highlighting uses CSS classes (not inline styles)
- Search powered by Fuse.js (JSON output format enabled)

## Spell Check

[cspell.json](cspell.json) with custom dictionary at [project-words.txt](project-words.txt). Add new project-specific words there.
