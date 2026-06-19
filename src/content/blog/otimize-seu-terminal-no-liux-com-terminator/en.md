---
title: Optimize your Linux terminal with Terminator
description: If you're tired of your scum terminal on linux; Tired of having to
  use alt + tab between terminals in the same project; Tired of getting lost
  trying to paste a command; Meet Terminator, a more robust, organized and
  customizable terminal emulator.
date: 2019-03-19T08:21:35.000Z
lang: en
translationKey: otimize-seu-terminal-no-liux-com-terminator
slug: optimize-your-terminal-in-liux-with-terminator
category: development
tags: []
wpId: 12095
canonicalPath: /en/development/optimize-your-terminal-in-liux-with-terminator/
needsReview: false
updated: 2021-12-12T11:14:43.000Z
---

If you're tired of your scum terminal on linux; Tired of having to use alt + tab between terminals in the same project; Tired of getting lost trying to paste a command; meet the **[Terminator](https://terminator-gtk3.readthedocs.io/en/latest/) ,** a [terminal emulator](https://en.wikipedia.org/wiki/Terminal_emulator) more robust, organized and customizable:

-   **Multiple Tabs:** Multiple terminal tabs in the same window.
-   **Terminal Grid:** Divide a flap into multiple terminals, horizontal and vertical.
-   **Automatic Logs:** Automatically save session logs by users.
-   **Drag & Drop:** Drag and drop texts, urls and commands right into the terminal.
-   **To search for:** Search and highlight text using Regex expressions.
-   **Subjects:** Various themes and combinations available from the community.
-   **And much more...**

-   [![](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-30-58-1024x576.png)](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-30-58-1024x576.png)
    
-   [![](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-30-35-1024x576.png)](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-30-35-1024x576.png)
    
-   [![](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-30-09-1024x576.png)](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-30-09-1024x576.png)
    
-   [![](/wp-content/uploads/2019/03/terminator-2-1024x517.png)](/wp-content/uploads/2019/03/terminator-2-1024x517.png)
    
-   [![](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-38-41-1024x576.png)](/wp-content/uploads/2019/03/Screenshot-from-2019-03-19-00-38-41-1024x576.png)
    

## Installing Terminator

Terminator can be easily installed using the package manager on most linux distributions.

### Debian/Ubuntu

$ sudo add-apt-repository ppa:gnome-terminator
$ sudo apt-get update
$ sudo apt-get install terminator

### fedora

$ sudo dnf install terminator

### CentOS/RHEL

$ sudo yum install terminator

## installing themes

![Terminator Preferences](/wp-content/uploads/2019/03/image.png)

You can install or create your own theme in Terminator. Access the [link](https://github.com/mbadolato/iTerm2-Color-Schemes) and choose the theme you like the most, open the ".config" file of the desired theme and copy its content. After that right click on Terminator, navigate to preferences and create a new profile to generate a new theme file, go to ~/.config/terminator/ and edit the file referring to the new profile created and paste the theme content at the end.

## keyboard shortcuts

A list of standard and commonly used shortcuts in Terminator:

-   `**F11**` : Toggles full screen.
-   `**Ctrl+Shift+O**` : Divides the flap into horizontal terminals.
-   `**Ctrl+Shift+E**` : Divides flap into vertical terminals.
-   `**Ctrl+Shift+W**` : Closes the active terminal.
-   `**Ctrl+Shift+T**` : Opens a new tab.
-   `**Shift+Ctrl+s**` : Show/Hide the scroll bar.
-   `**Ctrl+Shift+f**` : Searches for a text on the active terminal.
-   `**Ctrl+Shift+R**` : Clears the active terminal.
-   `**Super+g**` : Groups all terminals into a tab.
-   `**Ctrl+Shift+q**` : Exit the terminator, closing all tabs.
