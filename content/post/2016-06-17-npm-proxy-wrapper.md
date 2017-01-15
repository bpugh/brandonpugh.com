---
layout: post
title: Use npm with a proxy that requires authentication
date: 2016-06-17 00:12:00
comments: true
categories: null
published: true
---
It's pretty easy to configure npm to connect through a proxy by setting the `proxy` and `https-proxy` config settings and you can even using `npm config set` will store them in your `.npmrc` file. Connecting through a corporate proxy that requires authentication, however, can be a little trickier.

To specify your credentials, you have to place them in the proxy url so your npm command would look something like this:

`npm install --proxy http://user_name:password@proxy.company.com:8080`

Typing that every time will get old fast. Again you can use `npm config set` but the security conscious will probably feel a bit uneasy having your credentials sitting in plain text in a file on disk especially if, like most corporate environments, the proxy uses your active directory credentials.

To ease the pain I created a powershell wrapper function around npm to prompt for your proxy password:

``` powershell
function np {
  $response = Read-host "Enter password" -AsSecureString
  $password = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($response))
  $un = [Environment]::Username
  $proxy = "http://${un}:${password}@proxy.company.com/"
  npm $args --proxy $proxy
}
```

If you add this to your powershell profile then you can then you can call `np` in place of `npm` and it will prompt you to type your password and then call npm with the parameters you supplied along with the proxy url.

This does assume the proxy username is the same as your machine username but if not you could tweak the script to prompt you for both.
