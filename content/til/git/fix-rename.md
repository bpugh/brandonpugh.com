---
date: 2026-06-16
title: Fix a rename that git considered a deletion
draft: true
tags: ['git']
---

1. Use `git rebase -i` to go back to before the problematic commit
2. Split the commit into two: one that just renames, and one that modifies
3. Or, insert a new commit before the existing one
4. When the rebase pauses at that commit, I can unstage everything and then create two separate commits—first one for just the rename, then another for the actual modifications. After `git reset HEAD^`, the working tree has the new file with modifications but the old file is deleted. To split this into separate commits, I need to reconstruct the original file content using `git show` to get it from the parent commit, then stage just the rename first before committing the modifications separately. I need to remove the old file from the index using `git rm --cached`, then stage the new file with its original content and commit that as the rename. After the rename commit is created, I can restore the modifications and commit them separately before continuing the rebase.

Actually, there's a cleaner approach using interactive rebase — I'll mark the commit for editing, do a mixed reset to unstage everything, then carefully reconstruct the rename by moving the file and preserving its modified state before committing. Finalizing the rebase workflow with a mixed reset to unstage everything, then saving the modified content before restoring the original file and renaming it in a separate commit, followed by reapplying the modifications.

Yes, you can do this using **interactive rebase** to split that commit into two: a rename-only commit followed by your modifications commit. Here's how:

---

## Steps

### 1. Start an interactive rebase

If it's your last commit:
```bash
git rebase -i HEAD~1
```
If it's further back, replace `1` with however many commits back it is.

### 2. Mark the commit for editing

In the editor that opens, change `pick` to `edit` on the target commit, then save and close.

### 3. Unstage the commit (mixed reset)

```bash
git reset HEAD^
```
This moves HEAD back to the parent but leaves your working tree as-is (new file with modifications exists, old file is gone).

### 4. Save your modified file content

```bash
cp new_filename /tmp/saved_mods
```

### 5. Restore the original file from the parent commit

```bash
git checkout HEAD -- old_filename
```
This brings back the original file with its original content.

### 6. Commit just the rename

```bash
git mv old_filename new_filename
git commit -m "Rename old_filename to new_filename"
```
Since the content is identical, Git will correctly record this as a **rename** (100% similarity), not a delete+add.

### 7. Restore your modifications and commit them

```bash
cp /tmp/saved_mods new_filename
git add new_filename
git commit -m "Your original modification message"
```

### 8. Finish the rebase

```bash
git rebase --continue
```

---

## Result

You'll end up with two clean commits in history:
1. `Rename old_filename to new_filename` — pure rename, Git sees it correctly
2. Your modifications commit — shows only the content changes

> **Note:** If this commit has already been pushed to a remote, you'll need to force-push (`git push --force-with-lease`) and anyone else with the branch will need to rebase/reset. If it's only local, there's no issue.
