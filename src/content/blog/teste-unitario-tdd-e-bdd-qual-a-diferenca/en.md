---
title: Unit Testing, TDD and BDD - What's the difference?
description: You've probably heard someone talking about unit testing, TDD
  (Test-Driven Development) or BDD (Behavior-Driven Development). But what is
  the real difference between them? And which one should I use?
date: 2020-04-01T13:36:37.000Z
lang: en
translationKey: teste-unitario-tdd-e-bdd-qual-a-diferenca
slug: unit-test-tdd-and-bdd-whats-the-difference
category: technology
tags: []
wpId: 11945
canonicalPath: /en/technology/unit-test-tdd-and-bdd-whats-the-difference/
needsReview: false
updated: 2021-12-12T11:15:59.000Z
---

You've probably heard someone talking about unit testing, TDD (Test-Driven Development) or BDD (Behavior-Driven Development). But what is the real difference between them? And which one should I use? These are the most frequently asked questions, although there is no one correct answer what all good developers agree is: you need testing.

## Unit Testing

I'll start with the easiest to explain, unit testing aims to test units of code. Testing is usually restricted to a function in an object or module. These tests should be function-specific, simple, and quick to write and run. The more unit tests your code has, the more bugs will be caught before your code goes into production. Unit testing brings peace of mind to a team of developers, if they trust the amount of testing available, they know that the code change will be done with guarantee, possible breaks will be caught early in the development process.

Unit tests should be isolated from any external dependencies such as a database or network. If you need to, there are specific libraries to simulate these situations for you. The basics of a unit test should be there: Individual Tests; Test only one thing; Isolated from each other.

There is confusion between unit testing and automated testing, they are not the same thing. There are different types of automated tests, see some of the main ones:

-   **Unit Tests:** a single piece of code (usually an object or function) is tested, isolated from other parts.
-   **Integration tests:** several components are tested together, for example, testing the database access code in a test database or even the interaction between distributed services.
-   **E2E Tests (End to End):** Technique used to test whether an application's flow from start to finish is behaving as expected.

It's important that you understand these differences for the following reason: If you're writing a unit test and it's not being easy to write, it's probably not a unit test. Integration and acceptance testing, for example, is more complex and generally slower, so make sure you're actually testing it unitary.

## TDD (Test-Driven Development)

TDD is actually a process, it indicates the flow that must be taken in development. It aims from the beginning to cover as much code as possible with testing, thus reducing the amount of bugs in your development and even bugs in your testing. The TDD process has the following flow:

1.  Start writing the test
2.  Run the test and any other tests. Your newly added test should fail. If it doesn't fail here, it may not be testing the right thing and therefore has a bug
3.  Write the minimum amount of code needed to make the test pass
4.  Run tests to verify new test passes
5.  Optionally refactor your code
6.  Repeat from 1

It takes some effort to adapt to this practice, but spending that time can pay off, and a lot! Projects that apply TDD typically have testing coverage of between 90-100%, which means it's easy to maintain code and add new features assuring quality.

For many developers the hardest part of TDD is having to develop your test before any line of code.

## BDD (Behavior-Driven Development)

BDD is where maybe things can get tricky to understand. BDD is a set of best practices for writing great tests. BDD can and should be used in conjunction with unit test methods and TDD.

A common problem with poor unit tests is that they are highly dependent on how the function being tested is implemented. This means that if you update the function, even without changing the inputs and outputs, you must also update the test. Making the process tedious and repetitive unnecessarily, and that's exactly where the BDD comes in, in the test implementation detail.

BDD solves this problem by showing you how to test. You should not exclusively test the implementation, but the behavior. By suggesting testing behavior rather than how the code is implemented, we begin to reflect what the real scenario is. Typically, you try to separate your test into "this test must do something", for example, when testing a function that increments the counter by one, "should increment the counter by 1".
