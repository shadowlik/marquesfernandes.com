---
title: What is JSON and what is it for?
description: JSON is an acronym for JavaScript Object Notation, a lightweight
  and compact, open-standard, stand-alone data transfer format used for
  exchanging data between systems. Although the name may be suggestive, JSON is
  not only used by the JavaScript language, today it is becoming the standard
  communication format in web applications.
date: 2020-03-06T17:27:59.000Z
lang: en
translationKey: o-que-e-json-e-para-que-serve
slug: what-is-json-and-what-is-it-for
category: technology
tags: []
wpId: 11987
canonicalPath: /en/technology/what-is-json-and-what-is-it-for/
needsReview: false
updated: 2021-12-12T11:15:51.000Z
---

If you've recently heard the term JSON and have no idea what it is, don't worry, it's not a disease and it's very simple to understand.

JSON is an acronym for *JavaScript Object Notation* , a lightweight and compact, open-standard, stand-alone transfer data format used to exchange data between systems. Although the name may be suggestive, JSON is not only used by the JavaScript language, today it is becoming the standard communication format in web applications.

Simply put, the JSON format provides a human-readable collection of data that can be accessed in a logical and consistent manner.

## Brief History of JSON

JSON arose from the need for a communication protocol between the server and the browser in real time, [stateless](http://marquesfernandes.com/json-web-token-jwt-o-que-e-para-que-serve-como-funciona/) and without the use of browser plug-ins or third-party software such as Flash or Java applets, these were the dominant methods used in the early 2000s.

[Douglas Crockford](https://pt.wikipedia.org/wiki/Douglas_Crockford) was the first to specify and popularize the JSON format. The acronym had its origins in State Software, a company founded by Crockford in March 2001. For the past 18 years, JSON has been replacing XML and becoming the standard file format for transferring data on the web.

## JSON Structure

A JSON file is an unordered set of name/value pairs. A JSON starts with `{` and ends with `}` and then it is formed by pairs of " *Name* ": " *value* ". Each name is followed by a colon and the name/value pairs are separated by a comma.

*Name* it can be any text that identifies your data and the *Value* can be a data of the type `text` , `number` , `object` , `headquarters` , `truth or false` or `null` . You can check more information at [json.org.](https://www.json.org/json-en.html)

I've set out an example that covers most of the uses and types of data that can be found in a JSON:

{
  "name": "Henrique Marques Fernandes",
  "age": 70,
  "wearGlasses": true,
  "allergies": null,
  "sites":\["marquesfernandes.com", "uol.com.br"\] ,
  "lucky numbers":\[05, 07, 28\] ,
  "friends": \[{
     "name": "Ulysses",
      "city": "London"
  }\]
  "Address": {
    "Sao Paulo city",
    "state of Sao Paulo",
    "Country Brazil"
  }
}

### Array type property

All accepted value types can be used as array members:

{
  "textarray":\["texto1", "texto2"\] ,
  "arrayOfNumbers":\[1, 2, 3\] ,
  "object array":\[{ "a": 1 }, { "b": 2 }\] ,
  "Booleanmatrix":\[true, false, false, true\] ,
  "null matrix":\[null, null\] ,
}

### Object type property

All accepted value types can be used as child property values:

{
 "I'mAnObject": {
   "text": "text1",
   "number 1,
   "null": null,
   "true\_false": false,
   "headquarters":\[1, 2, 3\]
 }
}

## JSON use case

JSON is used a lot in the communication between your browser and the server, making pages able to consume small sets of data instead of having to get all the necessary data to load the page at once. So when you enter a web application, it is very likely that it is using this communication pattern.
