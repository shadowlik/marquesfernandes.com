---
title: What is PHP and what is it for?
description: 'PHP (a recursive acronym for "PHP: Hypertext Preprocessor") is an
  open-source interpreted language primarily used in server-side (backend) web
  application development.'
date: 2020-04-10T19:55:16.000Z
lang: en
translationKey: o-que-e-php-e-para-que-serve
slug: what-is-php-and-what-it-is-what-for
category: technology
tags: []
wpId: 11935
canonicalPath: /en/technology/what-is-php-and-what-it-is-what-for/
needsReview: false
updated: 2021-12-12T11:16:02.000Z
---

**PHP** (a recursive acronym for *" **P** HP: **H** hypertext **P** reprocessor"* ) is an open-source interpreted language, primarily used in server-side (backend) web application development.

Created by [Rasmus Lerdorf](https://pt.wikipedia.org/wiki/Rasmus_Lerdorf) in 1995, PHP has development and documentation maintained by [The PHP Group](https://www.php.net/) . PHP is distributed as open source and licensed under the *PHP License* .

It is estimated that between 60% and 80% of the internet is powered by applications developed in PHP. Thanks to the popularity of open source applications like [WordPress](http://wordpress.com/) and [magento](https://magento.com/) , PHP remains an extremely popular language, and will be for a long time to come.

## What is a scripting language?

Before understanding what PHP is, we need to understand what a scripting language is.

A script is a set of programming instructions that are interpreted at runtime. Server-side scripts, such as PHP, are interpreted on the server, while client scripts are interpreted by the client application, browser, for example, as is the case with [JavaScript](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/) . These languages usually depend on other applications to run, creating the execution environment.

## Understanding PHP better

PHP code can be embedded in HTML code or it can be used in combination with various web template systems, web content management system and web frameworks. A PHP file contains PHP tags and ends with the ".php" extension.

<?php
  echo "Hello World";
?>

A PHP file can also contain tags like HTML and [JavaScript](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/) .

<!DOCTYPE html>
<html>
  <head>
    <title>Example Page</title>
  </head>
  <body>
    <h1>
      <?php echo "Hello, I'm a title!"; ?>
    </h1>
    <script>
      alert("Hello, I'm an alert!");
    </script>
  </body>
</html>

## Flow of a PHP application

PHP is responsible for doing all the logic for, for example, rendering a web page. It takes care of querying the databases, doing any calculations, and returning the HTML ready for the browser to display to the user.

![](./2020-04-fluxo-php-1.jpg)

Without getting into very technical issues, but for a web application to work you need a web server configured to run the PHP files. It is responsible for finding the correct script to run when you access a page such as [http://marquesfernandes.com](http://marquesfernandes.com) . The most popular and used web servers are the [Apache](https://www.apache.org/) and [Nginx](https://www.nginx.com/) .

## PHP in practice

Below is an example of a simple PHP code that performs a loop loop displaying HTML tags:

## PHP Features

PHP is an excellent language to develop web applications, we can mention some important features:

-   **Speed and robustness** : With over 25 years on the market, PHP has been and is extensively tested and improved on a daily basis. It has many tutorials and courses in addition to a very active community.
-   **Object orientation** : PHP is a highly optimized language for object-oriented development.
-   **Portability:** platform independence - write once, run anywhere (or any web server you support).
-   **Dynamic typing:** PHP is a loosely typed language, allowing for fast and practical development.
-   **Open code:** You don't need to pay anything to develop or use PHP.

## Extensions for a PHP file

A PHP file is saved with the extension " **.php** ", there are some old variations that you might be able to find in legacy applications:

-   .phtml
-   .php3
-   .php4
-   .php5
-   .phps
