---
date: 2025-03-20
title: Run old versions of Angular
tags: ['node']
---

Today I learned how to get a very old Angular project running locally.
Even though it was Angular in this case, the steps are likely to be similar for most aging node based projects.

First I had to go to the [Version compatibility](https://angular.dev/reference/versions) page for Angular and find the required version of node.
In my case it was Angular v7 so I needed Node v10.

Next, you'll want to use a version manager for node.  
nvm is the most well known but you have to run it in bash on Windows and I find [Volta](https://volta.sh/) much nicer to use.

I ran `volta pin node@10` in the project directory.
This will add a `volta` config section to the package.json so that whenever you're in that directory, you'll automatically use the correct version of node and npm.

Best of all though, it won't affect the default version of node that get's run everywhere else.

Also make sure you run `npm install` _after_ the above command so that it's the correct version of `npm`.

If you already tried to run `npm i` with a different version of node then you'll probably need to blow away your `node_modules` folder and try again (ask me how I know).

