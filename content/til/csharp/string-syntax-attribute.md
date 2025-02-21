---
date: 2025-02-21
title: Dotnet StringSyntaxAttribute
tags: ['csharp']
---

Today I learned about the `StringSyntaxAttribute` added in .NET 7.

It's a handy attribute you can add to string properties to specify exactly what format the string should be in.

This gives you extra IDE assistance like syntax highlighting and intellisense 🔥.

![screenshot of rider showing regex intellisense](https://linkdotnetblog.azureedge.net/blog/20230101_StringSyntax/Preview.webp)

And you can also use a comment like `/*lang=xxx*/` for regular variables.

![screenshot of comment annotation](https://www.alwaysdeveloping.net/dailydrop/2022/03/28-stringsyntaxattribute/3.non-attribute.png)

Read [Steve's post](https://steven-giesel.com/blogPost/d2b2fc18-ca4c-4879-b87f-a1d36f435805) for more detail.
