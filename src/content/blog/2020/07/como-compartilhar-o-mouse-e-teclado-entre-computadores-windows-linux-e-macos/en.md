---
title: How to Share Mouse and Keyboard Between Computers - Windows, Linux and MacOS
description: Do you have two computers and only one keyboard and mouse? Or just
  want to save time and use an old computer as a second screen? And if I told
  you that it's possible to share your computer's keyboard and mouse and control
  more than one computer with them, and that it doesn't matter what operating
  system your machines have, yes it's possible!
date: 2020-07-17T18:18:04.000Z
lang: en
translationKey: como-compartilhar-o-mouse-e-teclado-entre-computadores-windows-linux-e-macos
slug: how-to-share-mouse-and-keyboard-between-computers-windows-linux-and-macos
category: technology
tags: []
wpId: 11880
canonicalPath: /en/technology/how-to-share-mouse-and-keyboard-between-computers-windows-linux-and-macos/
needsReview: false
updated: 2021-12-12T11:17:12.000Z
---

Do you have two computers and just a keyboard and mouse? Or just want to save time and use an old computer as a second screen? And if I told you that it's possible to share your computer's keyboard and mouse and control more than one computer with them, and that it doesn't matter what operating system your machines have, yes it's possible!

Here in my day-to-day setup I always have two computers, the main one running Windows and an old one with Ubuntu running, and to make this setup as optimized as possible, I use a little program that allows me to control both computers from of the same mouse and keyboard.

## The software: Barrier - KVM

Barrier is software that mimics the functionality of a [KVM switch](https://pt.wikipedia.org/wiki/Chaveador_KVM) , which allows the use of a single keyboard, mouse and even monitor to control multiple computers by physically rotating a dial on the device to toggle which machine is currently being controlled. The Barrier does this without the need for a physical device, through software and communicating over the internal network, in order to work, all computers need to be connected to the same network. It allows you to tell which machine you are controlling, as if you are connected to two or more monitors, by moving your mouse to the edge of the screen or using a key to switch focus between configured computers.

The most interesting thing is that in addition to being free, the barrier is open source. [github.com/debauchee/barrier](https://github.com/debauchee/barrier) , allowing you to download and modify its source code if needed.

## Supported Operating Systems

Barrier supports all popular operating systems, you will find installation instructions for each of them at [github.com/debauchee/barrier](https://github.com/debauchee/barrier/) and the downloadable versions in [github.com/debauchee/barrier/releases](https://github.com/debauchee/barrier/releases) .

-   Windows 7, 8, 8.1, and 10
-   MacOS/OS X
-   Linux (Ubuntu, Debian, CentOS, Fedora, OpenSuse, ...)
-   FreeBSD
-   OpenBSD

## Installing and configuring the main computer

The first computer that we are going to configure should be the one that we want to use the mouse and keyboard to control the others as well. In this tutorial I will use my Windows computer as the main one, but you can choose any of them as the main one and even switch later, which configured computer is the main one.

Download the latest version of `.exe` of the Barrier in [github.com/debauchee/barrier/releases](https://github.com/debauchee/barrier/releases) , and double-click the downloaded file. Windows will likely display a message similar to this:

![Installing the Barrier](./2020-07-barrier-1.jpg)

click in *More information* and *run anyway* , then just accept the terms and conditions and proceed by clicking on *next* to complete the installation.

![Setting up the primary](./2020-07-image-33.png)

Now find your Barrier shortcut on your computer and run the program. Select the first option *"Server"* to set up as the main computer. Write down the IP of your computer within your network, we will use it to configure the secondary computer, in our case it is the IP next to the number in bold, we will use the *192.168.0.43* .

## Installing and configuring the secondary computer

Now let's install and configure our secondary computer, which will be controlled by mouse and keyboard of our main computer, in my case I will be using the Ubuntu 20.04 Linux distribution as secondary.

Installation is very simple and fast, with just two commands:

$ sudo apt-get update
$ sudo apt-get install -y barrier

Now open the application and follow the installation process. When done, open the program, select the mode *"Client"* and deselect the *"Auto config".* In the field *server IP* add the IP number copied from the previous step. Also note the *screen name* , we will use it to set the screen position on our main computer.

![Barrier Configuring Secondary](./2020-07-image-35.jpg)

## Setting Screen Position

Now that we have the program running on both computers, we need to configure and authorize on the main computer the position of the secondary computer we want to control. Open the program again and click the button *configure server* , make sure Barrier is not running, otherwise you won't be able to edit the settings.

![Barrier Added Computer](./2020-07-image-36.jpg)

Click on the computer to add a new secondary computer. add in *screen name* the name we wrote down in the previous step and click OK.

![Barrier Secondary Configuration](./2020-07-image-38.png)

In this case we set the position of our secondary computer to the left of our primary computer, it means that when we drag the mouse to the extreme left of the main computer, it will change control to the secondary computer. Let's test our configuration, click on *Start* on the primary computer and on *To apply* on secondary, if everything goes as expected, you should be able to control both computers from a single mouse and keyboard. You can even add a third computer, for example an Apple computer with MacOS, to configure it just follow the same steps and choose its position relative to your primary computer.

## Common Problems with the Barrier

1.  **Mouse on secondary computer slow:** As this configuration depends on the internal network, if it is overloaded, oscillations and slowdowns can occur, it's not much use, especially if you're connected to WiFi.
2.  **Primary computer stopped working:** Your primary computer may change its IP address, usually when it restarts, so if it crashes, check to see if the IP hasn't changed. There is a way to leave the IP fixed for your computer on the network, but that will be for another post.
3.  **Computer cannot connect:** Check if the IP is correct, if so, check if your firewall/anti-virus is not blocking the connections.
