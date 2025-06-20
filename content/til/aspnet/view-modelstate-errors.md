---
date: 2024-10-28
title: View ModelState errors while debugging
tags: ['aspnet']
---

Today I learned how you can view the Modelstate errors while debugging a controller in Asp.Net:

```csharp
ModelState.Where(x => x.Value.Errors.Count > 0).Select(x => x.Key).ToList()
```

Just paste that in the watch window.

If you've tried debugging to find what field is causing the Modelstate to be invalid, you'll know how tedious it is to dig through but thanks to [this post](https://windowshell.wordpress.com/2016/06/11/realtime-mvc-modelstate-errors-during-debugging/) for this handy tip!
