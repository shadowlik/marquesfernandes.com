---
title: What is CSS and what is it for?
description: Cascading Style Sheets (CSS) is a design language designed to
  simplify the presentation and customization of web pages (HTML).
date: 2020-07-08T21:10:21.000Z
lang: en
translationKey: o-que-e-css-e-para-que-serve
slug: what-is-css-and-what-is-it-for
category: technology
tags: []
wpId: 11908
canonicalPath: /en/technology/what-is-css-and-what-is-it-for/
needsReview: false
updated: 2021-12-12T11:16:57.000Z
---

**Ç** ascading **s** style **s** heets ( **CSS** ) is a design language made to simplify the presentation and customization of web pages ( **[HTML](http://marquesfernandes.com/o-que-e-html-e-para-que-serve/)** ).

if you already know [what is HTML](http://marquesfernandes.com/o-que-e-html-e-para-que-serve/) , understood that he is the skeleton of all pages on the internet, we can think of CSS as skin or even clothing, he is responsible for applying all visual customizations such as font size and color, background color, and a lot most. The rules present for customization are defined in cascade, hierarchically, for each tag and child tags. For example:

body {
  background-color: black;
  color: white;
  font-size: 10px;
}
body h1 {
  color: red;
}

The first rule above applies a customization on the page, leaving its background color black, the white text color at a size of 10px, while in the second we inform that all tags of type h1 inside the body tag will have the font color in red.

## CSS syntax

There are predefined rules to apply the rules in your HTML document, they are separated by **selector** and **declaration** .

**.add-red-color** **{ color: red; }**

A selector is a set of properties (also predefined) and values. Selectors can apply to the following:

-   in all [elements](https://en.wikipedia.org/wiki/HTML_element) of a specific type by its tag, for example, h1.
-   Elements specified by some attribute, in particular:
    -   *id* : A unique identifier within the document ( `<h1 id=" **identifier** "></h1>` )
    -   *class* : An identifier that can exist in multiple elements ( `<h1 class=" **class** "></h1>` )

Class and id selectors are case-sensitive, must begin with letters, and can include alphanumeric characters, hyphens, and underscores. A class can be applied to any number of instances of any element. An ID can only be applied to a single element.

There are also the *pseudo-classes* , they are used in CSS selectors to allow formatting based on information or interactions that are not explicitly contained in the HTML. An example of a widely used pseudo-class is the one that identifies the content only when the user hovers over the element, normally this class is used to inform and change the color, for example, a [link](#) . Pseudo classes are separated and identified by `:` or `::` .

## CSS Selectors List

| selector | Description |
| --- | --- |
| `**AND**` | An element of type E |
| `**AND** :link` | An E element is the source anchor of a hyperlink whose destination has not yet been visited (: link) or has already been visited (: visited) |
| `**AND** :active` | An E element during certain user actions |
| `**AND** ::first-line` | The first formatted line of an E element |
| `**AND** ::first-letter` | The first letter of an E element |
| `. **ç**` | All elements with class = "c" |
| `# **myid**` | The element with id = "myid" |
| `**AND** . **Warning**` | An E element whose class is "notice" |
| `**AND** # **myid**` | an E element with ID equal to "myid" |
| `. **ç** # **myid**` | the element with class = "c" and id equal to "myid" |
| `**AND** **F**` | An F element that is inside an E element |
| `*` | any element |
| `**AND**[**foo**]` | An E element with a "foo" attribute |
| `**AND**[**foo**="bar"]` | An E element whose "foo" attribute value is exactly equal to "bar" |
| `**AND**[**foo**~="bar"]` | An E element whose attribute value "foo" is a whitespace-separated list of values, one of which is exactly equal to "bar" |
| `**AND**[**foo**|="en"]` | An E element whose "foo" attribute has a hyphen-separated list of values starting (from the left) with "en" |
| `**AND** :first-child` | An E element, the first element found within the parent tag. |
| `**AND** :lang( **fr** )` | An element of type E in the "fr" language |
| `**AND** ::before` | Content generated before the content of an AND element |
| `**AND** ::after` | Content generated after the content of an AND element |
| `**AND** > **F**` | A child of the F element of an E element |
| `**AND** + **F**` | An F element immediately preceded by an E element |
| `**AND**[**foo**^="bar"]` | An E element whose "foo" attribute value starts exactly with the string "bar" |
| `**AND**[**foo**$="bar"]` | An E element whose "foo" attribute value ends exactly with the string "bar" |
| `**AND**[**foo***="bar"]` | An E element whose "foo" attribute value contains the "slash" of the substring |
| `**AND** :root` | An E element, document root |
| `**AND** :nth-child( **no** )` | An E element, the ninth child of its father |
| `**AND** :nth-last-child( **no** )` | An E element, the ninth child of its father, counting from the last |
| `**AND** :nth-of-type( **no** )` | An E element, the nth brother of its type |
| `**AND** :nth-last-of-type( **no** )` | An E element, the nth brother of its type, counting from the last |
| `**AND** :last-child` | An E element, last son of his father |
| `**AND** :first-of-type` | An E element, first brother of this type |
| `**AND** :last-of-type` | An E element, last brother of its kind |
| `**AND** :only-child` | An E element, only child of its father |
| `**AND** :only-of-type` | An E element, just sibling of that type |
| `**AND** :empty` | An E element that has no children (including text nodes) |
| `**AND** :target` | An E element being the target of the reference URI |
| `**AND** :enabled` | An E UI element that is enabled |
| `**AND** :disabled` | An E UI element that is disabled |
| `**AND** :checked` | A UI element is checked (for example, a radio button or a check box) |
| `**AND** :not( **s** )` | An element E that does not match the simple selector s |
| `**AND** ~ **F**` | An F element preceded (neighbor) by an E element |

## How to use CSS

There are two ways to use CSS within your HTML file.

You can use the rules directly in HTML tags:

<h1 **style="color: red;"** > Text with Red Color </h1>

You can create a style tag (<style>) in your document and center all the rules:

< **style>**
h1 {
    color: red;
}
< **/style>**

You can add an external CSS file:

< **link** href="path/to/file.css" rel="stylesheet" type="text/css">

Where the file would contain all the centralized CSS rules:

h1 {
color: red;
}

## CSS versions

CSS was first proposed by Håkon Wium Lie on October 10, 1994. Several other similar languages were proposed around the same time, and after some discussion, the first W3C CSS Recommendation (CSS1) was released in 1996. Currently, the language is still maintained by the W3C organization, responsible for taking care of standards and the release of new versions.

CSS 1

The first CSS specification to become an official W3C recommendation is CSS Level 1, published on December 17, 1996.

-   Text properties such as font and emphasis ( **bold** , *Italic* , ~underline~ , ...)
-   text color , backgrounds and other elements
-   Text attributes such as spacing between words, letters and lines of text
-   Alignment of text, images, tables and other elements
-   Margin, border, fill, and placement for most layout elements
-   Unique identification and generic classification of attribute groups (Selectors)

*The W3C no longer maintains CSS Recommendation 1.*

### CSS 2

The CSS Level 2 specification was developed by the W3C and published as a recommendation in May 1998. A superset of CSS 1, CSS 2 includes several new features such as absolute, relative, and fixed element placement and z-index (z-index for relative overlapping element placement), the concept of media types, bidirectional text, and new properties font such as shadows.

*The W3C no longer maintains the CSS 2 recommendation.*

### CSS 3

Unlike CSS 2, which is a large single specification that defines many features, CSS 3 is divided into several separate documents called "modules". Each module adds new features or extends the features defined in CSS 2 while preserving backwards compatibility. Work on CSS Level 3 began around the time of the publication of the original CSS 2 recommendation. The first drafts of CSS 3 were published in June 1999.

Summary of main module specifications:

-   Title of module specification Status Data
-   css3-background CSS Module Backgrounds and Borders Candidate Level 3 Rec. Oct 2017
-   css3-box CSS basic box model Working Draft July 2018
-   css-cascade-3 CSS Cascading and Inheritance Level 3 Rec. May 2016
-   css3-color CSS Color Module Level 3 Recommendation Jun 2018
-   Working draft of content module generated and replaced by CSS3 css3-content Jun 2016
-   css-fonts-3 CSS Fonts Module Level 3 Recommendation Sep 2018
-   css3-gcpm CSS Generated Content for Paged Media Module Working Draft May 2014
-   css3-layout CSS Template Layout Module Note Mar 2015
-   css3-mediaqueries Advice on Media Queries June 2012
-   mediaqueries-4 Media Queries Level 4 Rec. Sep 2017
-   Level 1 working draft of css3-multicol multicolumn layout module May 2018
-   Working draft of level 3 of the 3 page CSS paginated media module
-   selectors-3 Selectors Level 3 Recommendation Nov 2018
-   selectors-4 Selectors Level 4 Working Draft Feb 2018
-   css3-ui CSS UI Module Basic Level 3 Recommendation (CSS3 UI) Jun 2018

**References:  
**[https://www.w3schools.com/whatis/whatis\_css.asp](https://www.w3schools.com/whatis/whatis_css.asp)  
[http://www.simplehtmlguide.com/whatiscss.php](http://www.simplehtmlguide.com/whatiscss.php)  
[https://pt.wikipedia.org/wiki/Cascading\_Style\_Sheets](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets)
