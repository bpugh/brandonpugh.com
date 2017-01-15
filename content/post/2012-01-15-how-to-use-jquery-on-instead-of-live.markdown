---
comments: true
date: 2012-01-15 21:52:25
layout: post
slug: how-to-use-jquery-on-instead-of-live
title: How to use jQuery .on() instead of .live()
categories:
- Tutorial
tags:
- javascript
- jquery
---

One of the most used features of jQuery is the easy methods it provides to to attach event handlers to dom elements like this simple example:

``` javascript
$('.submitButton').click(function() {
    validateForm();
});
```

It doesn't get much easier than that. However, a lot of times we'll want to attach events to elements that were loaded after the initial page load such as from the result of an ajax request. This is where the .live() method comes in really handy:
``` javascript
$('.submitButton').live('click', function() {
    validateForm();
});
```
However if you're using jQuery 1.7 and up you now have access to the .on() method which is a very versatile method offering a number of improvements over .live(). [This post](http://bitovi.com/blog/2011/04/why-you-should-never-use-jquery-live.html) does a good job of explaining the main issues with using live, all of which you can avoid by using .on().

So how do you go about using .on()? Well .on() basically provides a consistent interface for practically all your event binding needs. You can replace the first example with:
``` javascript
$('.submitButton').on('click', function() {
    validateForm();
});
```
and you can obviously replace `'click'` with whatever event you wish to handle.

Now to replace the previous live() example with .on() requires the tiniest bit more effort. The way .on() works is it will attach the event to the first selector you specify and if you specify a second selector it will look at all the events that bubble up to it and will only execute the event handler for events that came child elements matching the second selector. So we could replace the example with this:
``` javascript
$('#userForm').on('click', '.submitButton', function() {
    validateForm();
});
```
Since the submitButton element is a child of the userForm element, the click event from the button will bubble up the dom and when it reaches the form element our event handler will be called. This is how we can dynamically insert as many elements with the calls submitbutton and have them be automatically handled. This is essentially the same thing that .live() accomplishes however it does so by automatically attaching the event handler to the document element which can have performance implications as now our click event would have to bubble all the way up the dom tree to the document before the handler will see it. It would look like this:
``` javascript
$('document').on('click', '#submitButton', function() {
    validateForm();
});
```
Let's look at one last examle:
``` javascript
$("#dataTable tr").live("click", function(event){
    alert($(this).text());
});
```
This is a fairly common scenario where `#dataTable` is populated dynamically by data retrieved asynchronously from the server. Again the issue here is that all the events have to bubble up to the document before they are seen by the handler. We can instead replace this with:
``` javascript
$("#dataTable tbody").on("click", "tr", function(event){
    alert($(this).text());
});
```
