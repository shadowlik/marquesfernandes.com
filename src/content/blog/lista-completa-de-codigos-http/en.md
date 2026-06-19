---
title: Full HTTP Code List
description: The following is a list of HTTP response codes. The codes (codes)
  are used to inform the client side of the status (status) of their requests,
  in order to standardize and facilitate communication between them. The first
  digit of each status code indicates which of the five response classes it
  belongs to.
date: 2020-09-04T14:35:33.000Z
lang: en
translationKey: lista-completa-de-codigos-http
slug: full-list-of-codes-http
category: technology
tags: []
wpId: 11847
canonicalPath: /en/technology/full-list-of-codes-http/
needsReview: false
updated: 2021-12-12T11:17:15.000Z
---

**Hypertext Transfer Protocol** or **HTTP** for the most intimate is a set of rules for transferring data such as text files, images, audio, video and other multimedia files. When you type a website into your browser, it's behind the scenes sending a request **HTTP** requesting the desired page to some web server. Think of internet protocols as traffic rules, they are necessary for all cars (data) to reach their destination (customer). [Learn more about HTTP](http://marquesfernandes.com/tecnologia/o-que-e-http/) .

The following is a list of HTTP response codes. The codes (codes) are used to inform the client side of the status (status) of their requests, in order to standardize and facilitate communication between them. The first digit of each status code indicates which of the five response classes it belongs to.

## 1XX - Informative

Indicates that the request was received and understood. This response is sent while request processing is still in progress. It serves to alert the customer that he can wait for a final response.

| Code | Status | Description |
| --- | --- | --- |
| 100 | Continue | It means that the server received the request headers, and that the client must proceed to send the request body, |
| 101 | change of protocols | It means that the requester has asked the server to change protocols and the server is recognizing that it will do so. |
| 102 | Processing  | It means that the server understood the request but that it will take time to process and will not have an immediate response, sending this status to prevent the user from waiting and exceeding the request time limit. |

## 2XX - Success

This class of status codes indicates that the customer's request was successfully received, understood, accepted, and processed.

| Code | Status | Description |
| --- | --- | --- |
| 200 | OK | The request was accepted and the response sent. |
| 201  | Created | The request was accepted and a new resource was created. |
| 202  | Accepted | The order has been accepted for processing, but processing has not yet been completed. |
| 203 | Non-authoritative information | The server successfully processed the request, but is returning information that could be from another source, for example, from a cache. |
| 204 | No Content | The server successfully processed the request, but there is no response. |
| 205 | Reset | Prompts the agent to reset the document that made the request. |
| 206 | Partial Content | The server is only delivering part of the resource due to an interval header sent by the client. This interval is often used to be able to resume interrupted downloads. |
|  |  |  |

## 3XX - Redirection

The applicant must take additional steps to complete the application. This status code class indicates that the action still needs some action by the user. The required action can be performed by the agent, without user interaction, if and only if the method used in the second request is GET or HEAD. Usually 5 is the limit for redirects in this class, in order to avoid problems with infinite interactions between requests.

| Code | Status | Description |
| --- | --- | --- |
| 300 | Multiple choice | Indicates more options for the same resource. It can be used to present options for different formats of videos or images. |
| 301 | Permanently Moved | This and all future requests must be directed to a new URI. |
| 302 | Found | This response code means that the URI of the requested resource has temporarily changed. Other URI changes may be made in the future. Therefore, this same URI must be used by the client in future requests. |
| 303 | See Others | The server sent this response to direct the client to get the requested resource in another URI with a GET request. |
| 304 | not modified | This is used for caching purposes. It informs the client that the response has not been modified so that the client can continue to use the same cached version of the response. |
| 307 | temporary redirect | On this occasion, the request must be repeated with another URI, but future requests can still use the original URI. In contrast to 303, the order method should not be changed when reissue of the original order. For example, a POST request must be repeated with another POST request. |
| 308 | permanent redirect | Indicates that the resource has been moved to a new permanent URI and all future requests must use one of the returned URIs. Codes 307 and 308 are similar to the behavior of codes 302 and 301, but do not allow the HTTP method to be modified. |
|  |  |  |

## 4XX - Client Error

The 4XX class of status is intended to warn of a possible error in the user's request. The server must include a response that contains a possible explanation for the error, and whether it is a temporary or permanent situation.

| Code | Status | Description |
| --- | --- | --- |
| 400 | Invalid request | The request could not be delivered due to some error in the user-side request. |
| 401 | Not authorized | The requested resource needs authentication and it was not provided. |
| 403 | Prohibited | The request is recognized by the server but the user is not allowed to access. Typically used for when the user is authenticated but does not have the necessary permission to access this resource. |
| 404 | Not found | The requested resource was not found. |
| 405 | Method not allowed | A request was made for a resource using a request method that is not supported, for example using GET on a resource that only accepts POST. |
| 406 | Not acceptable | This response is sent when the web server, after performing server-based content negotiation, does not find any content that meets the criteria provided by the user agent. |
| 407 | Proxy Authentication Required | Similar to 401, but authentication must be done through a proxy. |
| 408 | Request Timed Out (Timeout) | This response is sent over an idle connection by some servers, even without any prior request from the client. This means the server wants to terminate this unused connection. |
| 409 | general conflict | This response is sent when a request conflicts with the current state of the server. |
| 410 | Deleted (Gone) | This response is sent when the requested content has been permanently deleted from the server, with no forwarding address. |
| 411 | Required Length | The server rejected the request because the `Content-Length` header field is not defined and the server requires it. |
| 412 | Precondition Failed | The client has indicated preconditions in its headers that the server does not meet. |
| 413 | very large request | The request is larger than the server is willing or able to process. |
| 414 | Request-URI Too Long | The URI requested by the client is longer than the server is willing to interpret. |
| 415 | Unsupported Media Type | The media format of the requested data is not supported by the server, so the server is rejecting the request. |
| 416 | unsatisfactory range | The range specified by `range` in the header field in the request cannot be fulfilled. It is possible that the range is outside the data size of the destination URI. |
| 417 | Expectation Failure | This response code means that the expectation indicated by the `expect` in the request header field cannot be serviced by the server. |
| 418 | I am a teapot | This code was defined in 1998 as one of the traditional April 1st pranks, and is not expected to be implemented by real HTTP servers. |
| 422 | Non-Processable Entity | The order was well formed but was unable to be followed due to semantic errors. |
| 423 | Closed | The resource being accessed is locked. |
| 424 | dependency failure | The request failed due to the failure of a previous request (for example, a PROPPATCH). |
| 425 | Too early | Indicates that the server is not willing to take the risk of processing a replayable request. |
| 426 | Mandatory Update | The server refuses to carry out the request using the current protocol, but may be willing to do so after the client upgrades to a different protocol. |
| 429 | Excess orders | The user has sent many requests in a certain period of time, used to limit the number of requests made by the user. |

## 5XX - Other Errors

This category contains generic or unhandled server-side errors.

| Code | Status | Description |
| --- | --- | --- |
| 500 | Internal Server Error | The server received the request, but encountered an error that it didn't know how to handle. |
| 501 | Not implemented | The server does not yet support the enabled functionality. |
| 502 | Bad Gateway | This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response. |
| 503 | Unavailable service | The server is under maintenance or is unable to handle resource processing due to system overload. This must be a temporary condition. |
| 504 | Gateway Time-Out | It is characterized by errors particular to the website in question. It may be that the site is under maintenance or does not exist. |
| 505 | HTTP Version not supported | The HTTP version used in the request is not supported by the server. |
