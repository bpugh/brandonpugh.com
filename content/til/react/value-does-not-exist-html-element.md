---
date: 2025-11-29
title: Fix 'value' does not exist on type 'HTMLElement'
tags: ['react', 'typescript']
---

It's common to see the error `Property 'value' does not exist on type 'HTMLElement'` when working with react testing library.

Common advice online is to cast result using the `as` operator.

```ts
const title = getByPlaceholderText("test") as HTMLInputElement;
```

This is fine but feels incorrect and when using [eslint-typescript](https://typescript-eslint.io/rules/no-unnecessary-type-assertion/) will complain that the cast is unnecessary: `This assertion is unnecessary since it does not change the type of the expression`.

Then, thanks to this [SO answer](https://stackoverflow.com/a/70794857/1715138), I learned that the react testing library query methods can now take an optional type parameter:

```ts
    screen.getByLabelText<HTMLInputElement>("test").value,
```

This feels much cleaner and makes both the linter and compiler happy.
