---
layout: post
title: "Checking if a dom element exists with JQuery [Byte sized tips]"
slug: "checking-if-a-dom-element-exists-with-jquery"
date: 2012-06-25 21:52:00
comments: true
categories: [Tutorial, jQuery]
---

This is a simple tip but one I feel makes my code a bit easier to read.

I was never very pleased with the standard way of checking if a dom element exits in jquery:

``` javascript
if($('#userName').length !== 0){
    //do something with $('#firstName')
}
```

The solution I like is to create a very simple jQuery plugin to encapsulate this logic:

``` javascript
// this extension reads better when selecting elements
$.fn.exists = function () {
    return this .length !== 0;
};

```
You can place this anywhere you like such as in a 'utils.js' file, so long as it loads after jQuery. Now your code
would like so:

``` javascript
if($('#userName').exists()){
    //do something with $('#firstName')
}
```
