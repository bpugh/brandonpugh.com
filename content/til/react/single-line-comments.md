---
date: 2023-08-08
title: "Comment styles in React"
tags: ["react"]
---


I recently learned that there are actually several ways to add [comments in JSX in React](https://dmitripavlutin.com/react-comments/).

I had known about the `{/* comment */}` syntax but didn't realize you could use `//` _within_ a jsx element:

```jsx
function MyComponent() {
  return (
    <div>
      <Hello
        message="Hello, World!" // message prop requires a string
      /> 
    </div>
  )
}
```
