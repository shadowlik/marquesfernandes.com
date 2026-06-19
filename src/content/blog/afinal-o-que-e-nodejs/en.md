---
title: After all what is NodeJS?
description: NodeJS is a Javascript execution environment. How cool, but what
  does it mean? How it works?
date: 2019-03-05T12:12:41.000Z
lang: en
translationKey: afinal-o-que-e-nodejs
slug: after-all-what-is-nodejs
category: technology
tags: []
wpId: 12103
canonicalPath: /en/technology/after-all-what-is-nodejs/
needsReview: false
updated: 2021-12-12T11:14:42.000Z
---

You've probably heard about **[NodeJS](https://nodejs.org)** and that it is somehow related to Javascript... But after all, what the hell is it and does the **NodeJS** ?

**NodeJS is a Javascript execution environment.** How cool, but what does it mean? How it works?

***Also check:*** *[Javascript - What is it, how does it work and what is it for?](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/)*

You'll likely hear developers refer to just as **node** and not **NodeJS.**

The environment **node** it has everything you need to run scripts in javascript, where until then\* it was only possible in browsers. It allows you to use javascript as a backend language and uses the *v8 javascript engine* developed by Google for Chrome, so if you use this browser you are using the same javascript execution machine as **node** .  
*\* **NodeJS** it's been around for 9 years.*

## V8 Engine

" **V8** is the name of [JavaScript interpreter](https://pt.wikipedia.org/wiki/Interpretador_JavaScript) , also called [virtual machine](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual) Javascript *(or engine)* , developed by [Google](https://pt.wikipedia.org/wiki/Google) and used in your [browser](https://pt.wikipedia.org/wiki/Navegador_\(inform%C3%A1tica\)) [Google Chrome](https://pt.wikipedia.org/wiki/Google_Chrome) . V8 is a tool developed in the language [C++](https://pt.wikipedia.org/wiki/C%2B%2B) and distributed in the regime of [open code](https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto) .  
The purpose of V8 is to speed up the performance of an application by compiling Javascript code to the machine's native format before executing it, allowing it to run at the speed of compiled binary code" - [Wikipedia.](https://pt.wikipedia.org/wiki/V8_\(JavaScript\))

## Why NodeJS?

" **NodeJS** uses an event-driven, non-blocking "I/O" model which makes it lightweight and efficient"

I/O stands for "input" and "output". This means that any task, from an HTTP call to reading a file on disk.

This is very important because the **node** it's single threaded (it only consumes one processor), it's not 100% true but let's keep it simple for now, so if you have any blocking functions all your code will be compromised and probably slow:

Imagine that you developed a Rest API that returns the contents of a file on disk from your server, if you develop in a blocking way, let's assume that your file is heavy and takes 1 minute to read, any next call will have to wait for reading of the first call ends so that it is answered and your reading begins. Using the non-blocking model o **node** "queues" these calls, starts processing them in parallel, and responds as soon as possible.

## [NPM](http://npmjs.com)

![](./2019-03-npm.png)

Another wonderful part of **node** is in your community: **NPM** is the package manager ("dependencies") of the **NodeJS** , here you will find the most varied solutions written by the community. You will probably run into situations/problems when developing that some good soul has already passed and published a package **NPM** to make your life easier. This entire ecosystem makes developing applications on Node fast and efficient!

## Next steps

Well, now that you know what it is **NodeJS** I recommend that from a look at the official documentation it is very easy, intuitive and has good tutorials for writing your first application on node: [https://nodejs.org](https://nodejs.org)
