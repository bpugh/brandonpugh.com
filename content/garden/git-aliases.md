---
date: 2026-02-20
lastmod: 2026-03-06
title: "Git aliases"
tags: ["git"]
---

### Merge Development (`md`)
```bash
git config --global alias.md '!git fetch && git merge --no-ff origin/development'
```

**What it does:** Fetches the latest changes from the remote and merges the `origin/development` branch into your current branch using a non-fast-forward merge (creates a merge commit even if a fast-forward is possible).

---

### Delete Gone Branches (`db`)

**PowerShell:**
```powershell
git config --global alias.db '!for branch in `git branch -vv | grep ": gone]" | awk "{print \$1}"`; do git branch -D $branch; done'
```

**Bash/Git Bash:**
```bash
git config --global alias.db '!for branch in $(git branch -vv | grep ": gone]" | awk "{print \$1}"); do git branch -D $branch; done'
```

**What it does:** Finds and deletes all local branches that have been removed from the remote repository (marked as "gone" by Git).

**When to use:** After pull requests have been merged and deleted remotely, use this to clean up your local branch list and remove stale references.

**Note:** This alias uses bash syntax that works because Git for Windows includes a bash shell. If you prefer a pure PowerShell solution, you can use:
```powershell
git config --global alias.db "!pwsh -Command \"git branch -vv | Select-String ': gone]' | ForEach-Object { `$_.ToString().Split()[0] } | ForEach-Object { git branch -D `$_ }\""
```
