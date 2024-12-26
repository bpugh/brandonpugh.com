---
layout: post
title: "Bittorrent Sync - File syncing for developers"
date: 2013-06-16 18:48:00
comments: true
categories: tools
---

[Bittorrent sync](http://labs.bittorrent.com/experiments/sync.html) is a new file sharing app released by Bittorrent Labs. People are saying its an alternative to popular file syncing services such as Dropbox, SkyDrive, etc. However I don't currently see it as being a true replacement for these services but after playing with for the last few weeks I must say I'm impressed and I feel it does sport some cool features I've long wished for in a file syncing app. I've even incorporated it into my development workflow as I'll outline later in this post.

What sets BS apart from similar services is that its purely a peer to peer (P2P) file syncing service. This means that files get transfer directly between your machines without going through a 3rd party's servers. This is handy is you're the more paranoid type dealing with sensitive files and have been turned off by Dropbox's less than stellar track record with security. Also handy for syncing your current projects when your company has a strict policy about letting source code sit on 3rd party servers.

This has the added benefit of being faster to transfer large files since they don't have to first be uploaded to a third party server and _then_ downloaded. This recently saved me time when I had to transfer a 100 gb database backup from a remote server. And since it's using the bittorrent protocol it handles disconnects and partial downloads really well so you don't have to worry about having to start a two hour download over again if your connection gets disrupted.

Also if you have really large files like virtual machine images, these will be pretty costsly to keep synced on something like dropbox but with Bittorrent sync you're only limited by the size of your hard drives.

One of its selling points for me was its ability exclude files and folders from being synced, a feature which has been frustratingly absent from most popular services. As a bonus this feature is implemented by a .SyncIgnore file! Since the majority of mainstream source control systems implement a similar mechanism for file exclusion most developers can simply copy and paste their existing rules if you want to sync your project files which is exactly what I did.

Now you may be wondering why you would need to sync your source files if you're already using version control however I've always been a bit paranoid when it comes to my work in progress. Even though I subscribe to the idea of commit early and commit often, I've frequently found myself working for the better part of the day before commiting and I just enjoy the peace of mind that the extra bit of redundancy provides. Its also handy for easily switching between working on different machines.

## Conclusion

While you could use Bittorrent sync to replace a service like Dropbox, I think it has some really nice features that can complement traditional sync services especially for some use cases you're likely to have as a developer.

[Bittorrent sync](http://labs.bittorrent.com/experiments/sync.html)