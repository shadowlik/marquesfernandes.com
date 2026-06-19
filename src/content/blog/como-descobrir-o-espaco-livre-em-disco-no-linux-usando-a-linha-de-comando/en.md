---
title: How to find free disk space on Linux using the command line
description: Do you want to find out how much free space is on your disk? If you
  are used to operating systems with a graphical user interface, such as
  windows, this task is probably very simple. But what if you only come across a
  simple terminal?
date: 2019-12-03T18:46:49.000Z
lang: en
translationKey: como-descobrir-o-espaco-livre-em-disco-no-linux-usando-a-linha-de-comando
slug: how-to-discover-disk-free-space-on-linux-using-the-command-line
category: development
tags: []
wpId: 12045
canonicalPath: /en/development/how-to-discover-disk-free-space-on-linux-using-the-command-line/
needsReview: false
updated: 2021-12-12T11:14:50.000Z
---

Do you want to find out how much free space is on your disk? If you are used to operating systems with a graphical user interface, such as Windows, this task is probably very simple. But what if you only come across a simple terminal? Do you need to install any tools? The answer is **NO** . In linux you can with just a few commands find out how much storage is being used on your disks and even folders without leaving your terminal.

## [df](https://linux.die.net/man/1/df)

This command is probably the simplest and will do most basic analysis. It has a wide variety of options but let's focus on the simpler reports: **df -H.** The option *H* means that you want the command to return in a read-friendly manner. The report will show, grouped by disks, how much space is available, used, free and the percentage used.

$df -H

![](/wp-content/uploads/2019/11/image-13.png)

But what if the number of discs is too large? As in the case of the image above, we have disks created by the Ubuntu snaps applications ( */dev/loopXY* ) and we want to focus only on the main partition ( */dev/sda6* ):

$ df -H /dev/sda6

The result will now be limited to that disk:

![](/wp-content/uploads/2019/11/image-14.jpg)

## [du](https://linux.die.net/man/1/du)

Now that you know how to identify how much free space you have or not, it is very likely that you want to find out which folders and/or files are filling your computer's memory and that's where another very useful command comes in: O **du** (acronym for **"disk usage"** ). with the command **du** it is possible to identify how much each folder and file is using storage. Let's imagine our storage is running out and we want to know if the problem is in our downloads folder:

$ du -sh /home/shadowlik/Downloads

![](/wp-content/uploads/2019/11/image-15.jpg)

\* *We don't need to pass the full path to the command, we can only pass the path referring to the folder we are running in, in the case of the image above we could execute **du -sh Downloads/** .*

We saw above that the folder *Downloads* is weighing approximately 19 gigabytes, let's now find out what heavy files are in that folder and for that we'll pass the wildcard **\*** for the command:

~$ du -sh Downloads/\*

![](/wp-content/uploads/2019/12/image.jpg)

Screenshots are different because I formatted my computer while finishing this article.  
\* File names have been erased for safety.

Now you know how to identify how much storage space you have left and how to find places that may be overloading your disk. learn too [how to find out the linux version and distribution](http://marquesfernandes.com/2019/06/18/como-descobrir-o-nome-e-versao-da-distribuicao-linux-pela-linha-de-comando) and also the [create a sudo user](http://marquesfernandes.com/2019/04/01/como-criar-um-usuario-sudo-no-linux-debian-ubuntu/) !
