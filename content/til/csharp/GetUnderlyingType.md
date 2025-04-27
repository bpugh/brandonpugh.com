---
date: 2023-06-29
title: GetUnderlyingType
tags: ['csharp']
---

In c# [`Nullable.GetUnderlyingType(type)`](https://learn.microsoft.com/en-us/dotnet/api/system.nullable.getunderlyingtype?view=net-9.0)will return `null` if the type is *not* `Nullable<T>`.
For some reason this is not what I expected.
