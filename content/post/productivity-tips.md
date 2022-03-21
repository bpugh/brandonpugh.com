---
author: 'Brandon Pugh'
comments: true
date: 2022-03-19
image: ''
menu: ''
share: true
tags:
  - tooling
  - productivity
title: An Assortment of Productivity Tips
---

This is mostly a collection of my notes on productivity and little tips for saving time or being more efficient while working on a computer.

## Organization vs Execution

To me most productivity advice either falls under "organization" or "execution". Organization being advice like "create task lists", "process your inboxes", etc. I could write a whole separate post just this category. Whereas execution is all about finding the time to actually do the tasks that are on your plate.

### Attention and Focus

I've noticed that a lot of the advice on the execution side is really boils down to managing your attention and focus.
And what's facinating is that a lot of the most popular advice and techniques just deal with focus and different levels of abstraction.

- Mindfullness Meditation
- Pomodoro Technique
- Time-block planning / scheduling

### So many techniques

- [Todoist Productivity method quiz](https://todoist.com/productivity-methods) - to explore various productivity methods that might fit your style.

In my post on [how I get things done as a tech lead](https://www.brandonpugh.com/blog/2019/08/getting-things-done-as-team-lead/), I talk about the methods I use. It's mostly still the same today though use [time block planning](https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/) a lot more.

> Don't live life by default - [Scott Hanselman](https://www.hanselman.com/blog/relationship-hacks-mindfulness-dont-live-your-life-by-default)

## Avoid Distractions

- Use focus mode on Android or iOS
- [Slack dnd](https://slack.com/help/articles/214908388-Pause-notifications-with-Do-Not-Disturb) (You can type `/dnd` in any chat to start)
- [no hello](https://nohello.net/) - to respect colleagues attention
- [YouTube Rabbit Hole](https://chrome.google.com/webstore/detail/youtube-rabbit-hole/nlddakjbmpidooplakalfoogdincflfh)

## Always be Learning

- Newsletters for different technologies and communities
  - https://cooperpress.com/publications/
  - [The Morning Brew](https://blog.cwa.me.uk/) - for .Net
  - [The Morning Dew](https://www.alvinashcraft.com/) - for .Net and web if you like drinking from the firehose
- [Pocket](https://getpocket.com) - for saving articles to read later
- If you have lots of internal presentations or meeting recordings to watch, import them into a podcast app
  - [PocketCasts](https://www.pocketcasts.com/) - my favorite podcast app
  - change playback speed, remember play position, listen to audio while folding laundry
- https://kill-the-newsletter.com/ - to consume newsletters as an rss feed
- [Youtube Premium](https://www.youtube.com/premium)
  - totally worth it IMHO
  - **No ads!**
  - Offline downloads and background listening on mobile
  - Creators get paid for your views
- [Inoreader](https://www.inoreader.com/) - my favorite rss reader

## Use hotkeys

- Pressing `Ctrl + Backspace` will delete the last word you typed
- speed up informational videos (`< >` youtube keyboard shortcuts)
- use markdown-like shortcuts in google docs, confluence, slack, etc.
- global hotkeys
  - `win+.` windows emoji picker
  - `alt+a` mute in zoom (change setting to make this global)
  - `alt+tab` or `command+tab`
  - `alt+f4` to close a window

#### Remap keys

If you find a keyboard key or hotkey that you use frequently but it's awkward to type then you should use a utility to remap it.

- [autohotkey](https://www.autohotkey.com/) or [Microsoft powertoys](https://docs.microsoft.com/en-us/windows/powertoys/) (windows)
- [Karabiner-elements](https://karabiner-elements.pqrs.org/) (mac)

Some I use:

- remap `capslock` key
  - a lot of people map it to `ctrl` but I personally do `esc`
  - you can map `shift+capslock` to capslock if you still want that functionality
  - have a look at [A useful Caps Lock key](https://brettterpstra.com/2012/12/08/a-useful-caps-lock-key/) if you're on mac
- remap `alt+f4` to `capslock+q`
- `capslock+n` is backspace since I was getting RSI from reaching for backspace button so frequently
- `capslock` + `h`,`j`,`k`,or`l` remapped to `←`,`↓`,`↑`,`→` to mimic simple vim key bindings <!-- found these unicode arrows here: https://unicode.org/charts/nameslist/n_2190.html -->
- `capslock+{1|2}` for switching between [virtual desktops](https://www.howtogeek.com/197625/how-to-use-virtual-desktops-in-windows-10)

In his [post on autohotkey](https://www.hillelwayne.com/post/ahk/), Hillel Wayne talks about fast window switching by creating hotkeys to pull up specific apps. These are some of the ones I have:

- `win+z` - zoom
- `win+w` - browser windows
- `win+c` - code editor
- `win+backtick` - terminal
- `win+s` - slack

### Text expansion

I've only been using a text expansion app the last couple of years but I regret not starting sooner because it's a game changer!
There are tons of potential ways it can save you time but here are some of the ones I use the most:

- personal info like email addresses or phone numbers
- things you type all the time like client/company/project names
- hard to type characters or words
- text utilities like typing out the current date

There are lots free/paid text expanders but I like [Espanso](https://espanso.org/) because it's cross-platform and open source and you configure it entirely with a yaml config file. I could probably write an entire post on my espanso setup.

You can also use a key remapper like autohotkey for text expansion with a bit more manual effort.

### Misc

- enable clipboard history (native in Windows)
  - Alfred on mac
  - Ditto for more features
- [chrome profiles](https://support.google.com/a/users/answer/9310144?hl=en) for different personalities
- setup [custom searches in Chrome](https://zapier.com/blog/add-search-engine-to-chrome/)
- Microsoft powertoys adds some very handy functionality
  - always on top
  - always awake
  - global mute (`win+shift+a`)
  - command executor ([alfred](https://www.alfredapp.com/) on mac)
  - key remapper

## For developers

- log files with `.log` extension will have nice syntax highlighting when opened in vscode
- vscode terminal will open file paths in editor
- [learn how to create a file with a . dot prefix in Windows Explorer](https://www.hanselman.com/blog/how-to-create-a-file-with-a-dot-prefix-in-windows-explorer)
- make use of shell/git and aliases
- powershell tools
  - [posh-git](https://github.com/dahlbyk/posh-git) - nice git integration
  - [z-location](https://github.com/vors/ZLocation) - jump to frequently used directories
  - [PSFzf](https://github.com/kelleyma49/PSFzf) - powershell wrapper around fzf (fuzzy file finder)

### Powershell aliases

I have a bunch of these just to save me a few keystrokes by not having to type `git` in from of my most-used git aliases.
I mostly use powershell these days but most shells have similar capabilities.

```powershell
# Git helpers
Function st { git st $args }
Function stand { git standup $args }
Function ci { git ci $args }
Function cia { git ci --amend $args }
Function rsh { git reset --hard $args }
Function p { git pr $args }
Function ri { git rebase -i $args }
# Runners
Function nr { npm run $args }
Function dn { dotnet watch $args }
# leverage PSFzf
Function fsa {Invoke-FuzzyGitStatus | % { git add $_ }}
# list and execute psake tasks for a specific project from any directory
Function fp {Get-PSakeScriptTasks -BuildFile \path\to\project\psakefile.ps1 | Invoke-Fzf | % { Invoke-PSake $_ }}
```

## Automate machine setup

Now that you've optimized your setup and are in the habit of making tweaks and optimizations as the need arises, you should make sure it's easily repeatable when you have to change machines.

- [Ninite](https://ninite.com/) quick and easy GUI app for installing some common apps
- [Chocolatey](https://chocolatey.org/) or [winget](https://docs.microsoft.com/en-us/windows/package-manager/winget/) (windows) or [homebrew](https://brew.sh/) (mac)
- Create a [do nothing script](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/) to document any tasks that can't be automated yet
- sync your config files or scripts [with git](https://www.atlassian.com/git/tutorials/dotfiles) or [Syncthing](https://syncthing.net/)
