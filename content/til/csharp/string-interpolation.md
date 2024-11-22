---
date: 2023-08-23
title: "Ternary in C# string interpolation"
tags: ["csharp"]
---


Today I learned you can have ternary expressions inside of interpolated strings, you just need to wrap it in parenthesis:

`$"{timeSpan.Hours} hour{(timeSpan.Hours > 1 ? "s" : "")} ago"`