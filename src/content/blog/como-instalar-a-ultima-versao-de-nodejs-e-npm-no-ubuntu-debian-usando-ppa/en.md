---
title: How to install the latest version of NodeJS and NPM on Ubuntu/Debian using PPA
description: Node's PPA is being updated and maintained on its official website.
  We can add this PPA to our Debian system and Ubuntu 19.10, 18.04 LTS, 16.04
  LTS (Trusty Tahr) and 14.04 LTS (Xenial Xerus) and install Node using the
  native package manager.
date: 2020-01-07T23:17:10.000Z
lang: en
translationKey: como-instalar-a-ultima-versao-de-nodejs-e-npm-no-ubuntu-debian-usando-ppa
slug: how-to-install-the-latest-version-of-nodejs-and-npm-on-ubuntu-debian-using-ppa
category: development
tags: []
wpId: 12021
canonicalPath: /en/development/how-to-install-the-latest-version-of-nodejs-and-npm-on-ubuntu-debian-using-ppa/
needsReview: false
updated: 2021-12-12T11:14:53.000Z
---

**[NodeJS](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs)** is a platform built on Chrome's JavaScript execution engine to easily build scalable and fast network apps. THE [Node PPA](https://deb.nodesource.com/setup_13.x) is being updated and maintained on its official website. We can add this PPA to our Debian system and Ubuntu 19.10, 18.04 LTS, 16.04 LTS (Trusty Tahr) and 14.04 LTS (Xenial Xerus) and install Node using the native package manager.

***Check out more at:** [After all what is NodeJS?](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs)*

## Added the NodeJS PPA

The Node installation package is always available in LTS version and in the current version, it's up to you to choose which version to install. Let's add PPA to our system and install Node on Debian/Ubuntu.

In the last update of this article, NodeJS is at version 12 LTS and 13 current, to install the latest version available:

$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup\_13.x | sudo -And bash -

If you want to install the latest **version** **LTS** :

$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup\_12.x | sudo -And bash -

## Installing NodeJS

Now that we've added PPA, let's run the command to install NodeJS and also its dependency manager, Node Package Manager (NPM). We will use the command `apt-get update` to update our package information and `apt-get install` to start the installation process:

$ sudo apt-get update
$ sudo apt-get install nodejs

## Verifying Node.js and NPM Version

Installation may take a while depending on your internet connection, if everything goes as expected, after installation is complete we need to check if the installed versions of NodeJS and NPM are correct. For more information on available versions check the [official site](https://nodejs.org/download/) .

$ node -v 

# Expected outcome
v13.3.0

Also check the version of [NPM](https://npmjs.com/) :

$npm -v 

# Expected outcome
6.13.1

## Running a simple javascript

We can test if our node is working correctly by running a simple script directly from our terminal:

$ node -e "for (let i = 0; i < 10; i++) { console.log(i) }"

# Expected outcome
0
1
two
3
4
5
6
7
8
9
