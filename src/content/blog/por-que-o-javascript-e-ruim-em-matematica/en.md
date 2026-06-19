---
title: Why is Javascript bad at math?
description: In JavaScript, all numbers are IEEE 754 floating point numbers. Due
  to the binary nature of their encoding, some decimal numbers cannot be
  represented with perfect precision.
date: 2020-03-22T12:19:18.000Z
lang: en
translationKey: por-que-o-javascript-e-ruim-em-matematica
slug: why-javascript-is-bad-in-mathematics
category: development
tags: []
wpId: 11961
canonicalPath: /en/development/why-javascript-is-bad-in-mathematics/
needsReview: false
updated: 2021-12-12T11:15:56.000Z
---

You've probably heard someone say that " [Javascript](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/) it's bad with accounts," and that statement isn't entirely wrong. Due to ignorance, some people even compare it to other languages, I've even heard "Uses Phyton, it knows how to count", maybe because it is a language with high popularity in the field of data science, many people assume this. Not defending JS, not criticizing Phyton, just that you understand that many languages share this same Javascript problem.

## Observing the error in practice

Let's imagine the following scenario, I want to enroll in the gym and I decided to pay quarterly, I have R$600.90 in cash available and the gym's monthly fee is R$200.30, theoretically if you make this account you have enough money available, but when we try to replicate that logic to code it doesn't:

Now to prove my point, let's look at the same example in Python:

Well, well, who would say not?

## The problem: **floating point** and rounding

To try to avoid confusion, as the concept of floating point is not very easy to understand, let's try to superficially explain the concept, but if you want to dig deep and understand at the root, I recommend reading this [article in english](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) .

In JavaScript, all numbers are floating point numbers. [IEEE 754.](https://pt.wikipedia.org/wiki/IEEE_754) Due to the binary nature of their encoding, some decimal numbers cannot be represented with perfect precision.

To understand what a floating point is, you first need to understand that there are many types of numbers and ways to represent them that we will go through. We call 1 an integer - it's an integer with no fractional values.

½ is what the famous fraction is. This implies that the integer 1 is being divided into 2. This concept of fractions is very important when deriving floating points.

0.5 is known as a decimal number. However, a very important distinction needs to be made - 0.5 is just the decimal (base 10) representation of the fraction ½. This is how ½ is represented when written as a base 10 number - for this article, we can call this dot notation. We call 0.5 a finite representation because the numbers in the fraction representation are finite - there are no more numbers after 5 in 0.5. An infinite representation would be, a periodic tithe, for example 0.3333 … when representing ⅓.

There is another way to represent numbers other than whole numbers, fractions or decimal notations. You've probably seen this before, it's the scientific notations, something like this: 6,022 x 10²³ and this is the IEEE 754 format adopted. This format has a 64-bit limitation, so when the number's storage limit is reached, you will need to round the last digit up or down.

Your first thought might be to try to round to the second decimal place. Unfortunately, JavaScript's internal rounding only works to the nearest whole number.

## How to calculate accurately using JavaScript

Now that you understand the problem, although the precision error is low, it can cause serious logic and data consistency problems, but then how do you get JavaScript to do the math correctly and accurately?

There are some proposed solutions, some more restrictive indicate that the best way is to multiply to whole numbers before doing the math:

const myMoney = 600.90 \* 100;
const Monthly Fee = 200.30 \* 100;
const totalOfMonthlys =PriceOfMonthly \*3;

// Outputs: true
console.log(myMoney >=totalOfMonthly);

// Outputs: 60090
console.log(TotalOfMonthly);

And other solutions use string-based transformation and calculation, which can be useful but comes at the cost of performance.

The best and easiest solution for dealing with accounts and floating points in javascript is using some tried and tested libraries by the community, like [dinerojs](https://dinerojs.com/) or [mathjs](https://mathjs.org/) .

## But then, do all languages have this problem?

Understand that other languages, such as C#, Java, Phyton and many others, also use IEEE-754, so don't think you can get away with this problem by simply changing the language.

The difference is that other languages often have other types of number storage that you can use that avoid these problems. For example, C# has a native decimal type that must be used for tasks such as monetary calculations.

What we always need to understand is that each application has a focus and each language has its advantages, if you have an application that won't do extensive math and that the operating cost won't be impactful, go with Javascript, but if that's not the case , look for a language that meets the needs of your project. My tip is: **do not love the language or codes, but solving problems** .

**References:**

-   [https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/](https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/)
-   [https://hackernoon.com/understanding-the-problem-javascript-maths-2119d85dad2a](https://hackernoon.com/understanding-the-problem-javascript-maths-2119d85dad2a)
-   [http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html)
-   [https://frontstuff.io/how-to-handle-monetary-values-in-javascript](https://frontstuff.io/how-to-handle-monetary-values-in-javascript)
-   [https://gooroo.io/GoorooTHINK/Article/16306/Is-Math-Broken-in-JavaScript-Part-2/18867#.XneLOXVKjiQ](https://gooroo.io/GoorooTHINK/Article/16306/Is-Math-Broken-in-JavaScript-Part-2/18867#.XneLOXVKjiQ)
