---
date: 2025-02-05
title: Use jq to get a list of deeply nested values from JSON
tags: ['javascript']
---

I needed the list of extensions from the `extensions.json` that looks like this:

```json
[
  {
    "identifier": { "id": "asvetliakov.vscode-neovim" },
    "version": "1.18.22",
    ...
  },
  ...
]
```

I hadn't used `jq` before but knew this was exactly what it was made for.

In this case all I needed was this:

```bash
jq '.[].identifier.id' extensions.json
```

Also they have a pretty cool [Playground](https://play.jqlang.org/) for experimenting or running one-off queries.
