---
author: 'Brandon Pugh'
comments: true
date: 2024-08-31
image: ''
menu: ''
tags:
  - git
title: Tips for creating merge commits
---

I've reviewed quite a few pull requests in recent years and I've noticed some less-than-ideal practices when it comes to creating merge commits so here are some things you can do to make life a little easier for someone reviewing your code.

## Make the commit message as useful as possible

A lot has been written about [how to write good commit messages](https://cbea.ms/git-commit/), but I rarely see the advice applied to merge commits.
They may not be the most exciting type of commit, but they're still very important.

### When merging PRs

Merge commits that merge a pull request are more straight forward because, these days, they're generally created by the git hosting service so you know they only contain all the changes from that feature branch.

But you can still make sure they convey the most useful info.
I like the default from Azure DevOps:

```txt
Merged PR 123: <PR title>

<PR Description>
```

You can get a similar defult in GitHub by configuring the default merge commit settings in the repository settings.

### For other merge commits

Now, keep in mind that the need for other merge commits can be mitigated by keeping feature branches small and short-lived, but that's not the reality for a lot of teams.
<!-- While the need for other merge commits can be mitigated by keeping feature branches small and short-lived, this isn't always the reality for many teams. -->

For the most part I recommend sticking with the default message that git generates when you run `git commit` to complete a merge:

```md
Merge branch 'main' into feature-branch
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
```

If you notice though, it includes a comment recommending explaining why the merge was necessary.
This could be something like "Merging in updated auth flow" or "Merging in changes to `sharedService` to avoid conflicts".
This also implies that you should have a reason for the merge which I agree with because otherwise you're adding unnecessary noise to the git log.

At the very least make it clear that it's a merge commit.
Don't just put something like `update database migrations` if you did have to do that as a result of the merge then mention it in the body of the message (though as I'll explain shortly, it should go in a followup commit).
Otherwise, depending on how you're viewing the git log, it might not be obvious that it's a merge commit.

### List conflicts in the commit message

If there were conflicts during the merge, then git will generate a list of them, but they're commented out by default.
You can uncomment them and include them in the commit message:

```bash
# Conflicts:
#	package.json
#	package-lock.json
```

As a reviewer, I appreciate this because it's easy to make mistakes when resolving conflicts so if I see files listed then I can scrutinize them more closely.

If you want this done automatically then you can use a [`prepare-commit-msg`](https://git-scm.com/docs/githooks#_prepare_commit_msg) hook to uncomment them:

```bash
COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2

if [ "$COMMIT_SOURCE" = "merge" ]; then
    sed -i.bak '/^# Conflicts:/,/^#$/ s/..//' "$COMMIT_MSG_FILE"
fi
```

#### Bonus: use `git show --remerge-diff` to see how they were resolved

[In Git 2.36](https://github.blog/2022-04-18-highlights-from-git-2-36/#review-merge-conflict-resolution-with-remerge-diff), the `--remerge-diff` option was added to `git show`.
This makes it easier to see how conflicts were resolved in a merge commit.

## Avoid "evil" merges

An "evil" merge as defined by the [git docs](https://git-scm.com/docs/gitglossary.html#Documentation/gitglossary.txt-aiddefevilmergeaevilmerge) is:

> a merge that introduces changes that do not appear in any parent.

or as Linus himself puts it:

> an "evil merge" is something that makes changes that came from neither side and aren't actually resolving a conflict

A merge commit is likely pulling in a large amount of unrelated changes, so it can be hard to notice if you add in your own changes.
I prefer to do the bare minimum to resolve any textual conflicts.

If there are semantic issues that need to be resolved (i.e. a database view was renamed so my code fails at runtime), then I fix them in a separate commit which not only makes it easier to review but also makes commands like `git blame` more useful.
