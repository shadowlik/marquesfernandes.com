---
title: What is HTTP?
description: Hypertext Transfer Protocol or HTTP for the most intimate is a set
  of rules for transferring data such as text files, images, audio, video and
  other multimedia files.
date: 2019-10-08T19:31:31.000Z
lang: en
translationKey: o-que-e-http
slug: what-and-http-2
category: technology
tags: []
wpId: 12063
canonicalPath: /en/technology/what-and-http-2/
needsReview: false
updated: 2021-12-12T11:14:48.000Z
---

**Hypertext Transfer Protocol** or **HTTP** for the most intimate is a set of rules for transferring data such as text files, images, audio, video and other multimedia files.

## huh?

![Image result for netscape gif](https://media2.giphy.com/media/UML8EuuiFZkUU/giphy.gif)

When you type a website into your browser, it's behind the scenes sending a request **HTTP** requesting the desired page to some web server. Think of internet protocols as traffic rules, they are necessary for all cars (data) to reach their destination (customer).

the protocol **HTTP** was developed together with the markup language [HTML](https://pt.wikipedia.org/wiki/HTML) to create the first interactive web browser experience. Until today, the protocol remains the main means of communication on the internet!

## When and how did it come about?

The protocol was drawn up in 1989 by [Sir Tim Berners Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee) and now it is under the responsibility of the [W3C](https://www.w3.org/) .

-   The HTTP/1.1 version was documented in 1997 in [RFC 2068](https://tools.ietf.org/html/rfc2068)
-   In 2015 the HTTP/2 version was released with numerous improvements, such as support for TLS and ALPN.
-   On September 26, 2019 the HTTP/3 version that uses the UDP protocol instead of TCP was introduced by [cloudflare](http://cloudflare.com) , [Google Chrome](https://www.google.com/chrome/) and [Mozilla Firefox](https://www.mozilla.org/pt-BR/firefox/new/) .

## How it works?

Communication between clients and servers is basically done through **requests** and **answers** to a certain **resource** .

### Resources

An HTTP resource is nothing more than a part of the URL when we type in the browser [marquesfernandes.com/category/design/](http://marquesfernandes.com/category/design/) we are requesting the resource /category/design/ which is located on the server [marquesfernandes.com](http://marquesfernandes.com) .

### Methods

To interact with these features the **HTTP** uses predefined request methods that tell the server which task it should perform on the desired resource:

-   **GET** resource request
-   **POST** add/create a resource
-   **PUT** directly modify a resource
-   **DELETE** remove a specific resource
-   **PATCH** partially modifies a resource

[Check out the full list of methods.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### status codes

When a request is made, a response is expected (durd), for this, the servers, in addition to responding to the request with the response body, be it html, audio, etc., also send response codes that indicate the status of that request, if she had any errors or if she was successful. The most common codes are:

-   **200** OK: It means that your request worked successfully.
-   **301** Moved Permanently: This code informs that this request path has been permanently moved to another address.
-   **401** Unauthorized: The user who is trying to make the request is not authenticated.
-   **403** Forbidden (Forbidden): The user who is trying to make the request is authenticated but does not have the necessary permissions.
-   **404** Not Found: Means that the requested resource was not found.
-   **500** Internal Server Error: Generic error that the server was unable to handle.

[Check out the full list of status codes.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### HTTP request cycle

An HTTP request usually triggers a series of other requests, note a well-used example:

1.  The client (a browser) requests a page to the internet, for example [www.uol.com.br](https://uol.com.br) the browser then makes a **HTTP request** like **GET** to the server.
2.  The server receives the **request** and run any internal routines attached to it.
3.  If all goes well the server returns a **answer** with the HTML content of the page and with the code of **status 200** to the browser. And a series of other requests can happen:
    1.  The browser makes a request for a style sheet. The server returns a CSS file;
    2.  The browser makes a request for a .JPG image. The server returns a .jpg file;
    3.  The browser makes a request for JavaScript code. The server returns a .js file;
    4.  The browser makes a request for extra data. The server returns a structured data file (XML, CSV, JSON, …);
4.  The browser finally interprets the **answers** and renders the page.

## HTTP vs. HTTPS

[HTTPS](https://searchsoftwarequality.techtarget.com/definition/HTTPS) (HTTP over SSL or Secure HTTP) is the use of Secure Sockets Layer ( [SSL](https://searchsecurity.techtarget.com/definition/Secure-Sockets-Layer-SSL) ) or Transport Layer Security ( [TLS](https://searchsecurity.techtarget.com/definition/Transport-Layer-Security-TLS) ) as a sublayer of an HTTP request. Basically, HTTPS encrypts and decrypts user requests as well as server responses. Using HTTPS protects against known attacks that aim to intercept these requests and hijack sensitive data, such as [MitM](https://www.kaspersky.com.br/blog/what-is-a-man-in-the-middle-attack/462/) (man-in-the-middle).
