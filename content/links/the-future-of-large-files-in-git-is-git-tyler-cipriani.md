---
date: 2025-08-16
title: "The future of large files in Git is Git"
tags: ["git"]
---

[The future of large files in Git is Git - Tyler Cipriani](https://tylercipriani.com/blog/2025/08/15/git-lfs/)

I've so far managed to avoid having to deal with Git LFS so I'm excited to see that the Git team is working on a better solution.

In the mean time I'll have to try the tip that Tyler gives with git partial clone:

```bash
git clone --filter='blobs:size=100k' <repo>
```
