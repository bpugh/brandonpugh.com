---
date: 2025-09-20
title: You can use C# records in .NET Framework 4.x
tags: ['csharp']
---

Today I learned that you can use C# records that were introduced in C# 9 even if you're not on .NET Core yet.

[NDepend has a post](https://blog.ndepend.com/using-c9-record-and-init-property-in-your-net-framework-4-x-net-standard-and-net-core-projects/) on how to do this which is slightly more involved.

But per this [Stack Overflow answer](https://stackoverflow.com/a/65663416/1715138), all I did was add a file with the following:

```cs
namespace System.Runtime.CompilerServices { internal class IsExternalInit { } }
```

and that worked.

I've been using them in unit tests like [this post](https://josef.codes/using-records-when-implementing-the-builder-pattern-in-c-sharp/) describes.
