---
date: 2025-06-03
title: Auto add pull request reviewers
tags: ['azure-devops']
---

Today I learned that Azure DevOps lets you [automatically include reviewers](https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops&tabs=browser#automatically-include-code-reviewers) for a pull request if modifies certain files.

This is very similar to Github's [code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) file with the key difference being that you configure it through the repo setting in Azure DevOps instead of committing a file.

I find this very useful for example if you're a Front End Architect who wants to be aware of any changes to the UI or if you're a DBA who wants to review any database migrations.
