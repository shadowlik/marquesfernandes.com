---
title: How to permanently delete files on Linux
description: In most cases, the way we delete a file from our computers, whether
  by the Del key, the trash or the rm command, they actually don't permanently
  and securely remove the file from the hard drive (or any other storage media
  ).
date: 2020-02-01T22:01:08.000Z
lang: en
translationKey: como-deletar-permanentemente-arquivos-no-linux
slug: how-to-permanently-delete-files-in-linux
category: technology
tags: []
wpId: 12003
canonicalPath: /en/technology/how-to-permanently-delete-files-in-linux/
needsReview: false
updated: 2021-12-12T11:15:46.000Z
---

In most cases, the way we delete a file from our computers, either by the Del key, the trash or the command `rm` , they do not actually permanently and securely remove the file from the hard drive (or any other storage media).

If we use the above methods, assuming that we want to delete a file with sensitive content, a file with usernames and passwords for example, it is still possible that someone with malicious intent will succeed. [recover these files](http://marquesfernandes.com/como-recuperar-arquivos-excluidos-no-linux-ubuntu-debian/) .

Let's learn some ways to securely delete files from our computer under Linux.

## 1\. Shred - Overwrite the file to hide its contents

The command `shred` uses the method of overwriting the file to hide its contents, and it also has the option of later deleting.

This tool is already installed by default on most linux distributions.

$ shred -zvu -n 5 passwordsbancarias.txt

-   `-z` - add zeros at the end to hide
-   `-v` – enables display of command progress
-   `-u` – remove files after overwriting
-   `-n` – number of times to overwrite the file (default: 3)

**Tip:** Never write down your passwords in a text file. Unfortunately it is a very common but totally unsafe practice to store information of this type.

![Shred - Overwrite the file to hide its contents](/wp-content/uploads/2020/02/image-8.png)

## two. Wipe - Securely delete files on Linux

The Wipe command securely deletes your files from memory, making recovering files or folders impossible.

To install this tool, run the following command:

$ sudo apt-get install wipe\[Em distros baseados no Debian\]
$ sudo yum install wipe\[Em distros baseadas no RedHat\]

To safely remove a file or even an entire folder:

$ wipe -rfi passwords/\*

-   `-r` – tells the command to recursively delete folders
-   `-f` – enables forced deletion and disables confirmations
-   `-i` – displays progress

![Wipe - Securely delete files on Linux](/wp-content/uploads/2020/02/image-9.png)

***Note** : Wipe tool only works safely on magnetic memory (HDD), use the other methods if you are going to delete files or folders on an SDD or USB.*

## 3\. Secure-deletetion Toolkit for Linux

Secure-deletetion is a collection of secure file deletion tools, which contains the srm tool (secure\_deletion), we will use it to remove our files safely.

To install this tool, run the following command:

$ sudo apt-get install wipe\[Em distros baseados no Debian\]
$ sudo yum install wipe\[Em distros baseadas no RedHat\]

To safely remove a file or even an entire folder:

$ srm -vz passwords/\*

-   `-v` – verbose mode, displays more process information
-   `-z` – clears the last deletion with zeros instead of random data

![Secure-deletetion Toolkit for Linux](/wp-content/uploads/2020/02/image-10.png)
