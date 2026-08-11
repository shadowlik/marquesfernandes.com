---
title: "I'm trying to find joy in coding in the AI era"
description: 'AI makes ideas easier to build, but it has also changed a part of coding I loved. This is what I am trying to recover now.'
date: 2026-08-11T00:00:00.000Z
lang: en
translationKey: finding-joy-in-coding-in-the-ai-era
slug: trying-to-find-joy-in-coding-in-the-ai-era
category: development
tags:
  - artificial intelligence
  - software development
  - software architecture
  - product
cover: ./cover.png
coverAlt: 'A developer making notes beside a laptop at a warm, lived-in workspace'
draft: false
needsReview: false
---

I remember the exact day I looked at my work and got scared: January 10.

I had been using AI for much longer than that. The progression was probably familiar to most developers: autocomplete in the IDE, then chatting with an assistant inside VS Code, then more autonomous workflows in the CLI.

But that day, it clicked. The way I had written software for almost 15 years was changing in a matter of months. The workflow I knew was disappearing, and that scared me.

This fear is the part I explored in [AI Will Take My Job, but First I Need to Review Its PR](https://marquesfernandes.com/en/ai-will-take-my-job-but-first-i-need-to-review-its-pr/). My first reaction was almost apocalyptic. I was afraid of becoming obsolete. Afraid that the skills I had built would no longer be enough. Afraid that the work I was used to doing was simply gone.

## The part of coding I miss

A few months later, I still enjoy coding. But I have noticed that some of the passion has faded.

I have read blog posts and long Reddit threads from people who seem to feel something similar. There is a particular joy in sitting down with a problem, figuring out what needs to happen, writing the code yourself, understanding the lower-level details as well as the high-level shape, and then seeing it work.

That joy feels easier to lose when most of the implementation can arrive in a few prompts. At least, it does for me.

Some people say that coding was never the point, that developers are problem solvers and always will be. I agree with part of that. I love solving problems, whether I am fixing something online or offline.

But I do not think it is honest to pretend that writing code was never part of the appeal. Coding was a differentiator. It was a hard-earned skill in a competitive, well-paid market. I still miss the way we used to write it, learn it, and work through a problem one small piece at a time.

## The part I genuinely love

There is also something genuinely amazing about this new reality: ideas can become real much faster.

I have always loved side projects and DIY solutions, including building things I probably did not need just to avoid paying for something. Now I can make a proof of concept in a couple of hours, test it, and decide whether it deserves more time. That is incredible.

AI has not taken away the satisfaction of building. It has changed where that satisfaction shows up. The tension is that I still miss the slower parts too.

## I do not have an answer yet

This is not a guide with a neat answer at the end. It is more of a thought in progress.

I cannot control this shift, and neither can anyone else. So I am trying to accept that the old workflow is gone, adapt to what is here now, and find new reasons to enjoy the work.

For me, that has meant going beyond learning the latest AI tool, model, skill, or repository. I have been trying to build my own harness and workflow around the projects I work on. That is fun.

I do not want to use the default tooling blindly or assume that a framework like Superpowers is the only way to work without understanding the ideas underneath it. I want to know why a workflow helps, where it fails, and how to change it when the project needs something different.

## Staying close to the work

I have also started paying closer attention to pull requests before they are opened. I follow changes while they are happening, using Lazygit and VS Code, so I can understand what is being shipped, change direction when necessary, and spot where my harness needs adjustment.

This gives some of the agency back. The work is not just accepting a generated result. It is deciding what should happen, checking whether it happened, and being responsible for the tradeoffs.

![A developer reviewing an absurdly long paper pull request while a small tin robot looks on](./pr-review.png)

## Architecture is still a conversation

There is another part of the work I have started to appreciate more: making the high-level decisions before anyone starts generating code.

Should this happen synchronously, or should it go through a queue? What happens if the job runs twice? How much delay can the user tolerate? Do we need consistency right away, or is eventual consistency good enough here? What does this look like when the happy path is no longer the only path?

AI can give you a very convincing implementation for any of those options. But it cannot decide which tradeoff makes sense without the context. A queue is not a personality trait. Sometimes it is the right choice. Sometimes you are just adding another moving part because the problem seemed too peaceful.

Understanding those tradeoffs is still deeply satisfying to me. It is where the work becomes less about producing code as quickly as possible, and more about making a system behave well when real people, real data, and real mistakes show up.

## The product work matters more now

The biggest shift for me has been spending more time on the product side.

I am trying to write better specs, PRDs, TDDs, or whatever your team calls them. I am thinking more deliberately about the problem, the solution, and the impact of the solution. I am thinking through user flows, making mockups, and drawing diagrams.

I wrote more about that shift when I [stopped building random features and found a product direction](https://marquesfernandes.com/en/1-how-i-stopped-building-random-features-and-found-a-product-direction/).

The spec, the user flow, and the high-level architecture are not separate boxes to tick. They shape each other. A flow that needs instant feedback might change whether work happens synchronously or through a queue. A technical constraint might change what a user should see when something fails. A product decision might make an elegant architecture completely unnecessary.

That is why I am trying to describe those decisions clearly before running to an agent and asking it to code. An agent can produce a very plausible implementation, but it cannot reliably recover the details that never made it into the prompt. And those details, taken together, are what make a delivery feel complete rather than merely finished.

Those were parts of the job I often found boring before AI. Now they are easier to explore, and that is one point clearly in favor of the AI era.

Maybe that is where some of the joy moves next. Less joy from producing every line by hand, and more joy from understanding the problem well enough to make good decisions about what gets built.

I am still figuring it out. But I do not want to lose the feeling that made me love this work in the first place. I want to find it again, even if it looks different now.
