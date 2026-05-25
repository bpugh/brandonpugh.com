---
date: 2026-05-21
title: NPM 11.10.0 adds `min-release-age`
comments: true
tags: ['node']
---

You can now specify a minimum age for installing package versions in NPM.

This is a concept known as [dependency cooldowns](https://cooldowns.dev/) that has gained popularity with the rise in supply chain attacks.

You need to be running at least [v11.10.0 of npm](https://github.com/npm/cli/releases/tag/v11.10.0) but then you can add the following to your `.npmrc` file:

```inf
min-release-age=7
```

or set it globally with:

```bash
npm config set min-release-age=7
```

Now NPM won't install any package version that was released less than 7 days ago.

If you don't specify a version, i.e. `npm install vite`, then it will install the most recent version that satisfies the age requirement.

If you specify a version that doesn't meet the age requirement then it will error out.

Note: if you're running a version of NPM older than 11.10 then it will silently ignore the new config value.
