---
title: What is an API and what is it for?
description: API is an acronym for "Application Programming Interface", which
  means a set of pre-established functions and procedures that allow the
  creation of applications that access resources or data from another
  application, service or operating system .
date: 2020-04-07T23:39:13.000Z
lang: en
translationKey: o-que-e-uma-api-e-para-que-serve
slug: what-is-an-api-is-what-it-is-what-for
category: technology
tags: []
wpId: 11937
canonicalPath: /en/technology/what-is-an-api-is-what-it-is-what-for/
needsReview: false
updated: 2021-12-12T11:16:01.000Z
---

**API** is an acronym for English " ***Application Programming Interface*** "( **Application Programming Interface** ), which means a set of pre-established functions and procedures that allow the creation of applications that access resources or data from another application, service or operating system.

## Uncomplicating the term API

Still don't understand? imagine a *API* like a restaurant, they provide a menu for their customers ( *functions and procedures* ) with options and descriptions of the dishes, obviously pre-defined. When a customer orders a dish ( *request* ), it can provide relevant information ( *data - inputs* ) so that the expected result is achieved, such as the point of meat or if you want to remove some ingredient. In the end, the customer does not know exactly how the restaurant prepared their food in the kitchen, they just receive the result ( *answer* ).

It's more or less in this flow that an API works, for example, a developer wants to use the Facebook API to automate his company's posts, he doesn't need and won't know how Facebook implemented the business rule. Facebook just provides the developer with a series of resources, in the form of a Web API, that can be used for him to achieve the expected result, he just needs to provide the necessary data for that.

Let's imagine another scenario, a developer wants to create a desktop application for Windows, this application needs to open a dialog box to select files, he just needs to have the documentation of the language being developed at hand and find the Windows API function referring to the opening of this box. He doesn't care how it happens, he just needs it to happen.

So APIs simplify some of the programming for developers, abstracting the low-level implementation and exposing only high-level objects or actions that the developer needs.

In the first example we saw the scenario of using a Web API, while in the second example we have an application-level API. There are different types and uses of APIs, the most famous being the Web APIs, we'll talk more about them later.

## APIs by access policy

APIs are typically categorized by their level of access:

-   **Private:** The API is only available for internal company use.
-   **Partners:** Only partners have access to APIs. For example, Nubank only allows certain companies to use their APIs to connect with their applications. This allows for control and curation by the company providing the API, giving them more control of who is accessing their resources.
-   **Public:** Public APIs are made available for public use, anyone can have access. For example, Microsoft releases the [Windows APIs](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list) so that any developer can develop an application for their operating system, or LinkedIn that provides a [public API](https://developer.linkedin.com/docs/rest-api#) for any user to connect with your application.

![How an API works](./2020-04-como-api-funciona.jpg)

## web APIs

Now that we understand that an API is any set of functions that allow access to information in an application in a pre-established way, whether this access is remote (web) or programmed. Let's talk about the most popular APIs, the Web APIs.

They are the way the internet communicates today, several communication protocols were developed and are used daily so that your friend's meme arrives on your cell phone. A remote API allows you, or your application, to access resources dynamically in a simplified and automated way. Usually use authentication methods for security and auditing, they communicate through the implementation of specifications, such as the [HTTP](http://marquesfernandes.com/o-que-e-http/) , for the requests and a data pattern for the response, such as the [JSO](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) [N](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) .
