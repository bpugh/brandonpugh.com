---
date: 2024-10-15
title: Don't put an error boundary in the root of a react component
tags: ['react']
---

You probably don't want to put a React error boundary at the root of a component (meaning, wrapping the component's own render output).

This is because error boundaries only catch errors in their child component tree.
They won't catch errors that occur within the error boundary component itself, including errors in its own render method or lifecycle methods.

To use an error boundary effectively, you need to wrap the component you want to protect with the error boundary from the parent.

For example, you might think to put the error boundary inside a list item that gets rendered in a list:

```jsx
function ChatMessage({ message }) {
  // If parsing JSON fails, the error boundary inside won't catch it
  const parsedData = JSON.parse(message.content);

  return (
    <ErrorBoundary fallback={<p>Failed to display message</p>}>
      <div className="message">
        <span className="author">{parsedData.author}</span>
        <p className="content">{parsedData.text}</p>
      </div>
    </ErrorBoundary>
  );
}

function ChatList({ messages }) {
  return (
    <div className="chat-container">
      {messages.map(message => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}
```

The correct approach would be putting the error boundary in the parent component:

```jsx
function ChatMessage({ message }) {
  const parsedData = JSON.parse(message.content);

  return (
    <div className="message">
      <span className="author">{parsedData.author}</span>
      <p className="content">{parsedData.text}</p>
    </div>
  );
}

function ChatList({ messages }) {
// Correct approach with error boundary wrapping from parent
  return (
    <div className="chat-container">
      {messages.map(message => (
        <ErrorBoundary key={message.id} fallback={<p>Failed to display message</p>}>
          <ChatMessage message={message} />
        </ErrorBoundary>
      ))}
    </div>
  );
}
```