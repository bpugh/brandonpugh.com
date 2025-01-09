---
date: 2024-12-13
title: "Type check and cast"
tags: ["csharp"]
---

Today I learned that you can use pattern matching in C# to check for a type and cast to it in the same expression.
See [the docs](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching) for more details.

Microsoft even has a [lint rule](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/ide0020-ide0038) for it.

```csharp
if (x is Fruit)  // Noncompliant
{
  var f = (Fruit)x; // or x as Fruit
  // ...
}
```

```csharp
if (x is Fruit fruit)
{
  // ...
}
```
