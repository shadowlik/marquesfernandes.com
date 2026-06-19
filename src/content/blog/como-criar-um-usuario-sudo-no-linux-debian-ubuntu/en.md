---
title: How to create a sudo user on linux (Debian/Ubuntu)
description: The sudo command allows regular users access to administrative
  functions normally only available to the root user.
date: 2019-04-01T21:14:30.000Z
lang: en
translationKey: como-criar-um-usuario-sudo-no-linux-debian-ubuntu
slug: how-to-create-a-sudo-user-in-linux-debian-ubuntu
category: development
tags: []
wpId: 12091
canonicalPath: /en/development/how-to-create-a-sudo-user-in-linux-debian-ubuntu/
needsReview: false
updated: 2021-12-12T11:14:44.000Z
---

The command sudo allows regular users access to administrative functions normally only available to the user *root.* With that in mind, be very careful which user you give these permissions to... If you want to add permissions for an existing user, skip to step 2.

## TL;DR;

$ sudo adduser username
$ sudo usermod -aG sudo username

## create a user

**1\.** In the terminal type the command below and don't forget to change your username to the name you want to create.

$ sudo adduser username

Next you will need to set a password, as this is a user who will have root permissions, use a [very strong password](https://passwordsgenerator.net) . Next you will need to fill in some optional user data, as they are not mandatory you can leave it empty.

**two.** Now let's use the command usermod to add the user to the sudo group.

$ sudo usermod -aG sudo username

**3.** Now let's test the new created user and their powers as **sudo** .

$ su - username
username$ sudo ls -ls /root

You will need to enter the password the first time you use the command **sudo** whenever you start a new terminal session.

## Extra: Remove a user

### TL;DR;

$ sudo su -
$ userdel -r username

**1.** Switch to root user:

$ sudo su -

**two.** use the command userdel to remove the old user:

$userdel username

**3\.** You can also delete this user and his home directory (/home/username):

$ userdel -r username

\[the\_ad id="8530"\]
