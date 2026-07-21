---
title: How to Convert Postman Collections to OpenAPI/Swagger
description: Well, if you like me started developing all your documentation on
  Postman and are now looking for a quick and easy solution to convert from
  Postman to OpenAPI, rest assured that we can use APIMatic's free service to do
  this conversion.
date: 2020-03-13T22:25:40.000Z
lang: en
translationKey: como-converter-colecoes-do-postman-para-openapi-swagger
slug: how-to-convert-postman-collections-to-openapi-swagger
category: development
tags: []
wpId: 11983
canonicalPath: /en/development/how-to-convert-postman-collections-to-openapi-swagger/
needsReview: false
updated: 2021-12-12T11:15:51.000Z
---

THE **[postman](https://www.postman.com/)** is a great tool for developing and testing RESTful APIs created by others or testing and developing your own. It provides an elegant user interface with which you can make JSON, XML, and even HTML requests, without having to write a lot of code just to test the functionality of an API.

THE [**swagger**](https://swagger.io/docs/specification/about/) is a set of open source tools built around the Specification **OpenAPI** that can help you design, create, document, and consume REST APIs. Swagger's main tools include:

-   Swagger Editor - in-browser editor where you can write OpenAPI specifications.
-   Swagger UI - Renders OpenAPI specs as interactive API documentation in browser.
-   Swagger Codegen - generates server stubs and client libraries from an OpenAPI specification.

The specification **OpenAPI** is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including:

-   Available endpoints (/ users) and operations on each endpoint ( `GET` / users, `POST` / users)
-   Operating parameters Input and output for each operation
-   REST API authentication methods
-   Contact information, license, terms of use and other information.

Well, now that we understand what each tool/service is and does, we can understand where to apply each one. THE **OpenAPI** has become a community standard for sharing RESTful APIs documentation, but I really like the tool. **postman** to develop and test the APIs on a daily basis, but the functionalities for teams and sharing the Postman documentation are paid, which makes it unfeasible to use in small projects or companies with limited budget, but at the same time maintaining two documentation bases is very laborious and can become unfeasible depending on the number of endpoints.

## The solution!

The solution I found was to centralize and develop all API documentation in the format **OpenAPI** , because as this specification is developed in a YAML or JSON file, we were able to version these files by projects, in the case of a microservices architecture this is extremely useful, and as Postman allows importing the OpenAPI specification, it's easy to update your local version.

Well, if you like me started developing all your documentation on Postman and are now looking for a quick and easy solution to converting from Postman to OpenAPI, rest assured we can use the [free APIMatic service](https://apimatic.io/transformer) to do this conversion. Register on the website and in a few minutes have all your documentation converted!
