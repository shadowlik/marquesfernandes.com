---
title: YAML Archive - What is it and what is it for?
description: You've probably come across a file with a .yaml or .yml extension,
  and you're wondering what that type of file is. YAML is a recursive acronym in
  English and stands for Ain't Markup Language.
date: 2020-04-01T12:52:46.000Z
lang: en
translationKey: arquivo-yaml-o-que-e-e-para-que-serve
slug: yaml-file-what-and-what-it-is-what-it-is
category: technology
tags: []
wpId: 11947
canonicalPath: /en/technology/yaml-file-what-and-what-it-is-what-it-is/
needsReview: false
updated: 2021-12-12T11:15:59.000Z
---

You've probably come across a file with the extension `.yaml` or `.yml` , and you're wondering what this type of file is. YAML is a recursive acronym in English and stands for *Ain't Markup Language* (It is not a markup language). According to the official website: *YAML is a human-friendly data serialization standard for all programming languages.*

Together with some other definitions that we can find on the internet, we can conclude that YAML is a hierarchical and human-readable data standard that can be used in conjunction with all programming languages, and is usually used to store configuration files.

YAML was proposed by [Clark Evans](https://pt.wikipedia.org/w/index.php?title=Clark_Evans&action=edit&redlink=1) in 2001 and early in its development it meant "Yet Another Markup Language" to distinguish its data-centric rather than marked-document-centric purpose. This means that YAML does not propose marks and tags, only minimal formatting and identifiers, it really focuses on the data. Don't worry if you still don't get it, it will be easier to understand what this means when we compare it to some well-known markup languages.

## Example of a YAML file

name: Henrique Marques Fernandes #Texto
age: 28 #Number
interests: #Matrix
  - javascript
  - docker
  - flutter
address: #Object
  Country Brazil
  state of Sao Paulo

As we can see, there are no predefined tags, the properties themselves delimit the data, unlike XML that has explicit tags, YAML relies on indentation and minimal markup to define information.

Main points

-   YAML is a data-oriented language that has features derived from Perl, C, HTML and other languages.
-   YAML is a superset derived from [JSON](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) which comes with several built-in advantages such as comments, self-referencing and support for complex data types.
-   Several software packages have implemented YAML to create powerful configuration management tools.
-   High performance infrastructure

You can see more technical information about YAML in your [official site](https://yaml.org/) or on the reference website of the [Ansible - RedHat](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html) , both in English.
