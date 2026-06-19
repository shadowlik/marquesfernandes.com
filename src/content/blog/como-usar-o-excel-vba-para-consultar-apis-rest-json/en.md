---
title: How to use Excel VBA to query REST JSON APIs
description: APIs allow easy access to information in systems, which is becoming
  more and more standard in the market, with that in mind, some demands of
  connecting to systems via API in Excel are necessary and very useful, so I
  decided to share a little how I created this integration.
date: 2020-07-11T13:17:51.000Z
lang: en
translationKey: como-usar-o-excel-vba-para-consultar-apis-rest-json
slug: how-to-use-excel-vba-to-query-apis-rest-json
category: development
tags: []
wpId: 11892
canonicalPath: /en/development/how-to-use-excel-vba-to-query-apis-rest-json/
needsReview: false
updated: 2021-12-12T11:17:10.000Z
---

Excel is probably one of the most used tools in this world, so the demand for integrations with extremely complex spreadsheets is a recurring scenario. APIs allow easy access to information in systems, which is becoming more and more standard in the market, with that in mind, some demands of connecting to systems via API in Excel are necessary and very useful, so I decided to share a little how I created this integration. Let's learn how to query Rest APIs using VBA and convert the result to JSON for use in the spreadsheet.

This article hopes you will know the basics of Excel and VBA, as well as [what is an API and how it works](http://marquesfernandes.com/o-que-e-uma-api-e-para-que-serve/) . Our goal will be to consult a [Public Pokemon API](https://pokeapi.co/) and list the result in the tab `results` .

## Creating a blank worksheet

First let's create a blank sheet with macro enabled, inside it I'll create a tab called `results` .

![Excel spreadsheet](/wp-content/uploads/2020/07/image-15.png)

## Creating the macro to query the API

by shortcut `alt + f11` let's open the Excel macro editor, and create a module called `list pokemons` .

![Macro VBA](/wp-content/uploads/2020/07/image-16-1024x560.png)

### Importing the VBA-JSON library

As the API we're going to query returns a [JSON](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) as an answer we will need to import the library [VBA JSON](https://github.com/VBA-tools/VBA-JSON) , it will take care of all the boring work of translating the JSON and returning as an array and object. Installation is very simple, just [download the latest version here](https://github.com/VBA-tools/VBA-JSON/releases) and in the macro editor go to `File > Import File > JsonConverter.bas` .

![Import VBA JSON](/wp-content/uploads/2020/07/importarjsonvba-1024x706.jpg)

### Enabling Microsoft Scripting Runtime

We also need to enable Microsoft Scripting Runtime, to do this just browse `Tools > References` and search and enable in the list the `Microsoft Scripting Runtime` .

![Excel API Rest Microsoft Scripting Runtime](/wp-content/uploads/2020/07/image-17-1024x560.png)

## Creating the VBA macro to query the REST API

Below is the complete code for our request, it might sound scary, but don't worry, I'll explain what each part is doing:

Sub listPokemons()
Dim json As String
Dim jsonObject As Object, item As Object
Dim i As Long
Dim ws As Worksheet
Dim objHTTP As Object

'We selected our results sheet
Set ws = Worksheets("results")

'We create our request object and send
Set objHTTP = CreateObject("WinHttp.WinHttpRequest.5.1")
URL = "https://pokeapi.co/api/v2/pokemon"
objHTTP.Open "GET", URL, False
objHTTP.Send
strResult = objHTTP.responseText
json = strResult

Set objectJson = JsonConverter.ParseJson(json)

'We create the header cells
ws.Cells(1, 1) = "name"
ws.Cells(1, 2) = "link"

'We loop the results property of the API response
i = 2 'We will start the counter on line 2
For Each pokemon InJsonObject("results")
    ws.Cells(i, 1) = pokemon("name")
    ws.Cells(i, 2) = pokemon("url")
    i = i + 1
next

End Sub

First we define all the variables that we will use in our scripts, including the VBA JSON library import that we previously imported into our project.

Dim json As String
Dim jsonObject As Object, item As Object
Dim i As Long
Dim ws As Worksheet
Dim xmlhttp As Object
Set xmlhttp = CreateObject("MSXML2.serverXMLHTTP")
Dim objHTTP As Object

Then we select the spreadsheet we want to display the results of the API query, in our case `Worksheets("results")` and then we create an object that will allow us to make the request to the API. `https://pokeapi.co/api/v2/pokemon` . We'll take the answer and put it in the variable `json` , for now it is nothing more than a text.

'We selected our results sheet
Set ws = Worksheets("results")

'We create our request object and send
Set objHTTP = CreateObject("WinHttp.WinHttpRequest.5.1")
URL = "https://pokeapi.co/api/v2/pokemon"
objHTTP.Open "GET", URL, False
objHTTP.Send
strResult = objHTTP.responseText
json = strResult

Here where the magic happens, the function `parsejson` from the VBA JSON library converts the text of our variable `json` for an accessible object in our script. We are now able to access all properties programmatically in our code.

Set objectJson = JsonConverter.ParseJson(json)

Now that we have the result of our API accessible, we create in the first row of the spreadsheet the header containing the columns **Name** and **link** .

'We create the header cells
ws.Cells(1, 1) = "name"
ws.Cells(1, 2) = "link"

Now before analyzing the script we need to understand the result of the API. If you open the link[](https://pokeapi.co/api/v2/pokemon) [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon) in your browser you will see the following result:

{
  "count": 964,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": \[
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/"
    }
  \]
}

We are interested in the property. `results` , an array containing a list of pokemons with their names and links to more details. We will access this matrix at `jsonobject("results")` and we will loop to display each pokemon result in a new row of our table.

'We loop the results property of the API response
i = 2 'We will start the counter on line 2
For Each pokemon InJsonObject("results")
    ws.Cells(i, 1) = pokemon("name")
    ws.Cells(i, 2) = pokemon("url")
    i = i + 1
next

If everything goes as expected, by pressing `f5` to run our macro, in your spreadsheet you should see the following result:

![Excel API Rest](/wp-content/uploads/2020/07/image-18-1024x560.jpg)

## Conclusion

This was a very simple example of a query, with the object of [HT](http://marquesfernandes.com/o-que-e-http/) [TP](http://marquesfernandes.com/o-que-e-http/) it is possible to perform all types of requests, GET, POST, UPDATE, ... The interesting thing is to understand how the request is made and how you can display the result, thanks to the VBA JSON library, which already drastically reduces the work required. Now you just need to adapt this flow and script to your needs.
