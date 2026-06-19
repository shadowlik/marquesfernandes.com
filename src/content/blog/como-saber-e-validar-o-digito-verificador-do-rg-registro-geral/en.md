---
title: How to know and validate the RG Check Digit (General Register)
description: The check digit is nothing more than the digit that comes after the
  dash (xx.xxx.xxx-d). It is an authentication mechanism used to verify the
  validity and authenticity of a numerical value, it works as a prevention of
  fraud or possible errors in the transmission and generation of the document.
date: 2021-04-03T16:04:51.000Z
lang: en
translationKey: como-saber-e-validar-o-digito-verificador-do-rg-registro-geral
slug: how-to-know-and-validate-the-digit-checker-of-rg-general-registry
category: self-en
tags: []
wpId: 11814
canonicalPath: /en/self-en/how-to-know-and-validate-the-digit-checker-of-rg-general-registry/
needsReview: false
updated: 2021-12-12T11:17:19.000Z
---

The RG (General Registry), or identity card, identity card, identity card is our national civil identification document in Brazil. The data contained in this document vary according to the agency responsible for issuing it, as well as its mathematical rule of authenticity. In this article we will demonstrate the rule and validation based on a document issued by [SSP-SP](https://www.ssp.sp.gov.br/) .

THE **verifying digit** , is nothing more than the digit that comes after the dash (xx.xxx.xxx- **d** ). It is an authentication mechanism used to verify the validity and authenticity of a numerical value, it works as a prevention of fraud or possible errors in the transmission and generation of the document.

## How to Calculate the RG Check Digit

To learn the logic behind the check digit generation, we will use a valid and randomly generated RG in this article: `39,406,714-?`

First, let's make a table with 3 lines and 8 columns, we will have the first 8 digits of the ID number on the first line.

| 3 | 9 | 4 | 0 | 6 | 7 | 1 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |

Now we need to fill in the second line, it will always obey a logical sequence of numbers for all the calculation of any RG. The sequence is **2,3,4,5,6,7,8 and 9** .

| 3 | 9 | 4 | 0 | 6 | 7 | 1 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| two | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|  |  |  |  |  |  |  |  |

Now to get the values of the third row we must multiply the numbers of each row by column. For example 3x2, 9x3 and so on.

| 3 | 9 | 4 | 0 | 6 | 7 | 1 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| two | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 6 | 27 | 16 | 0 | 36 | 49 | 8 | 36 |

Now that we have our complete table, we need to add up all the numbers from the third row. In our example we will have: **6 + 27 + 16 + 0 + 36 + 49 + 8 + 36 = 178** .

Now we need to figure out the rest of dividing that number by 11, you can figure it out using your computer's calculator using the operator `mod` **: 178 mod 11** **= 2** .

Now we need to subtract the rest of our division from 11 and we finally have our check digit: **11 - 2 = 9** .

Below you find the algorithm made in JavaScript ES5 following the logic explained above.

function discoverDigit(rg) { var digits = rg.split(""); var totals =\[\] ; total var = 0; // We multiply the ones that would be in the first line with those in the second digits.forEach(function (digit, index) { totals.push(Number(digit) \* (2 + index)); }); // We multiply total columns.forEach(function(number) { total += number }); // We find the remainder of the division var remainder = total % 11; return 11 - rest; } console.log(discoverDigit("39406714"));

## special cases

Like everything else in Brazil, we have some special cases that we need to be aware of:

### The RG's check digit is X

When we come across the check digit **X** , it means that the result of the last step of our account is **10 (11 - 1)** . So the check digit **10** has been replaced by the roman numeral **X** .

### The check digit is 0

When we come across the check digit **0** , it means that the result of the last step of our account is **11 (11 - 0)** . So the check digit **11** has been replaced by the number 0.
