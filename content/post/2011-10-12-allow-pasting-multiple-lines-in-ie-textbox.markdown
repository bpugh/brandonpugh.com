---
comments: true
date: 2011-10-12 23:21:07
layout: post
slug: allow-pasting-multiple-lines-in-ie-textbox
title: Allow pasting multiple lines in IE textbox
categories:
- Tutorial
tags:
- IE
- javascript
- jquery
---

You may have noticed before that if you try to paste more than one line of text into a textbox in Internet explorer it will on only paste in the first line and disregard the rest. Firefox and Chrome on the other hand will automatically paste all lines of the text onto the one line of the textbox. This issue came up in one of the projects I'm currently working on where we wanted users to be able to paste in a list of ID numbers they wanted to run a search on.

I knew it was possible to get it working in IE since I had seen it done with the search box on Google Maps. I figured the way to do it would be to be to capture the text from the clipboard when the user is attempting to paste it into the textbox and reformat the text into a single line. In the end this is what the javascript looked liked:
``` javascript
if (window.clipboardData) {
        $('#textboxId').bind('paste', function (e) {
            var clipped = window.clipboardData.getData('Text');
            clipped = clipped.replace(/(\r\n|\n|\r)/gm, " "); //replace newlines with spaces
            $(this).val(clipped);
            return false; //cancel the pasting event
        });
    }
```

To begin with, I'm using [jQuery](http://jquery.com) because it's incredibly powerful and it's 2011 and if you're not using a javascript library then you are missing out. This allows me to bind an event handler for the paste event to the textbox element. Note that the paste event is supported in practically all browsers however for security reasons accessing the clipboard is only supported in IE. Fortunately for this purpose I'm only interested in Intenet Explorer and we can get the text with window.clipboardData object. Passing 'Text' into the getData() function is required to return the data as text.

Next calling .replace() on the text to replace all of the newline characters with spaces (or any delimeter we choose). Then we simply set the value of the textbox to the newly formatted text.
``` javascript
clipped = clipped.replace(/(\r\n|\n|\r)/gm, " "); //replace newlines with spaces
$(this).val(clipped);
```
Also don't forget to call _return false;_ to prevent the original text from still being pasted in.

Lastly we need to handle what will happen in all other browsers. We only want to attempt to read from clipboardData in IE since it will be undefined in all other browsers. One way to accomplish this is by detecting what browser the user has however this is not recommended. The trend nowadays is to use feature detection and there are entire javascript libraries such as [Modernizr](http://modernizr.com) dedicated to detecting which features a browser supports and then degrading gracefully when it doesn't. In this case we can simply surround our code with an if statement to ensure our code won't cause any errors outside of Internet Explorer.

``` javascript
if (window.clipboardData){}
```
And there you go, overcoming one of Internet Explorer's shortcomings with some simple and concise javascript.
