---
title: How to find out the name and version of the linux distribution from the
  command line
description: Probably at some point in your life you will be facing an unknown
  linux terminal where you have no idea what the distribution is, let alone the
  version... Bu...
date: 2019-06-18T19:43:32.000Z
lang: en
translationKey: como-descobrir-o-nome-e-versao-da-distribuicao-linux-pela-linha-de-comando
slug: how-to-find-the-name-and-version-of-the-linux-distribution-from-the-command-line
category: development
tags: []
wpId: 12087
canonicalPath: /en/development/how-to-find-the-name-and-version-of-the-linux-distribution-from-the-command-line/
needsReview: false
updated: 2021-12-12T11:14:44.000Z
---

Probably at some point in your life you will be facing an unknown linux terminal where you have no idea what the distribution is, let alone the version... But then how do I find out which distribution/version I'm running?

**TL;DR** - You can use one of the following methods below:

1.  cat /etc/\*-release
2.  lsb\_release -a
3.  hostname

## 1\. Using the /etc/\*-release file

To find out your Linux version and other information, run the command cat below on your terminal:

$cat /etc/\*-release

Example running on my desktop with [Ubuntu](https://ubuntu.com/) :

DISTRIB\_ID=Ubuntu
DISTRIB\_RELEASE=19.04
DISTRIB\_CODENAME=disk
DISTRIB\_DESCRIPTION="Ubuntu 19.04"
NAME="Ubuntu"
VERSION="19.04 (Dingo Disc)"
id=ubuntu
ID\_LIKE=debian
PRETTY\_NAME="Ubuntu 19.04"
VERSION\_ID="19.04"
HOME\_URL="https://www.ubuntu.com/"
SUPPORT\_URL="https://help.ubuntu.com/"
BUG\_REPORT\_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY\_POLICY\_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION\_CODENAME=disk
UBUNTU\_CODENAME=disk

## two. Using the lsb\_release command

The command lsb\_release displays LSD (Linux Standard Base) and distro-specific information. Run the following command:

$lsb\_release -a

Example of the result:

No LSB modules are available.
Distributor ID: Ubuntu
Description: Ubuntu 19.04
Release: 19.04
codename: disk

## 3\. Using the hostnamectl command

For distributions based on GNU systemd this is the best option:

$hostname

Example of the result:

  Static hostname: \*\*\*\*\*\*\*
         Icon name: computer-laptop
           Chassis: laptop
        Machine ID: 07c27ab13c7c49b59e53df8781de\*\*\*\*
           Boot ID: 77062197a37d45eeb656c889c7e5\*\*\*\*
  Operating System: Ubuntu 19.04
            Kernel: Linux 5.0.0-16-generic
      Architecture: x86-64

## How do I find my Linux Kernel version?

Running one of the following commands

$uname -a
$uname -mrs

Example of the result:

Linux \*\*\*\*\*\* 5.0.0-16-generic #17-Ubuntu SMP Wed May 15 10:52:21 UTC 2019 x86\_64 x86\_64 x86\_64 GNU/Linux

1.  **Linux -** Kernel Name
2.  **5.0.0-16 -** Kernel Version
3.  **x86\_64** - Architecture version (64 bit)
