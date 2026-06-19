---
title: How to move/install WSL 2 from C:/ disk to another disk
description: How to move/install WSL 2 from C:/ disk to another disk. If you
  have limited space available on your primary disk, be aware that it is
  possible to move your WSL installations to another disk/location.
date: 2020-07-22T21:24:19.000Z
lang: en
translationKey: como-mover-instalar-o-wsl-2-do-disco-c-para-outro-disco
slug: how-to-move-install-wsl-2-from-disk-c-to-another-disk
category: technology
tags: []
wpId: 11876
canonicalPath: /en/technology/how-to-move-install-wsl-2-from-disk-c-to-another-disk/
needsReview: false
updated: 2021-12-12T11:17:13.000Z
---

I recently did an article explaining [how to install and configure WSL 2](http://marquesfernandes.com/como-desenvolver-com-docker-no-linux-dentro-do-windows-sem-dual-boot-wsl-2/) to have a complete linux environment from direct Windows development. But as it's not all flowers, my computer has an SSD with little storage, which limits me to installing a lot of programs on the disk. `Ç:/` standard. Before long I saw the installation of WSL 2 starting to consume space, with so many docker images and front projects with node\_modules, my storage limit was running out. As my notebook also has a 1TB HDD, I started looking for a way to install/move WSL 2 to another disk.

## Install LxRunOffline

[LxRunOffline](https://github.com/DDoSolitary/LxRunOffline) is a complete utility to manage Windows Subsystem for Linux (WSL). This program that will allow us to move our installation from disk `Ç:/` for another disc, in my case `D:/` .

The easiest way to install is using the utility [cuttlefish](https://chocolatey.org/) :

cuttlefish install lxrunoffline

## Listing WSL Installations

Now let's list all available WSL installations, in my case I'm looking for Ubuntu 20.04:

lxrunoffline list

![WSL](/wp-content/uploads/2020/07/image-39.png)

## Moving Ubuntu 20.04 WSL Installation to Another Disk

First turn off WSL with the command `wsl --shutdown` . You need to run this command from a Power Shell with administrator privileges.

Now that we've found the installation we want to move to another disk, it's pretty simple, let's pass a command to move the installation from `Ubuntu 20.04` to disk `D:/` inside folder called `WSL` :

lxrunoffline move -n Ubuntu-18.04 -d D:wsl

Wait a while until the process finishes, after that your installation will be running from the new disk.
