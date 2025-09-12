---
date: 2025-09-12
title: Fix wrong encoding on PRs
tags: ['azure-devops']
---

[determines encoding](https://devblogs.microsoft.com/buckh/how-tfs-version-control-determines-a-files-encoding/)

[someone else had this issue](https://stackoverflow.com/questions/79042464/why-azure-devops-shows-encoding-change-from-utf-8-to-windows-1252)

- noticed a change in encoding in PR `utf-8 -> Windows-1252`
  - azure devops displays it wrong. it's actually `utf-8 with BOM` -> `utf-8`
  - this is because of editorconfig that was added a couple years ago
  - I used to gemini to create this snippet to convert them all at once:

```powershell
Get-ChildItem -Path . -Filter '*.cs' -Recurse | ForEach-Object { (Get-Content -Path $_.FullName -Raw) | Set-Content -Path $_.FullName -Encoding UTF8 -NoNewline }
```
