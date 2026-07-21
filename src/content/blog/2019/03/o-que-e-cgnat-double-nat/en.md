---
title: What is CGNAT (Double NAT)?
description: >-
  CGNAT is as if the operator had installed a second router in its region and
  shared its internet connection with its other customers.

  Being a little more technical: Providers are sharing a public IPV4 to more
  than one customer and routing the connection through a second route to their
  home router.
date: 2019-03-07T12:05:34.000Z
lang: en
translationKey: o-que-e-cgnat-double-nat
slug: what-is-cgnat-double-nat
category: technology
tags: []
wpId: 12101
canonicalPath: /en/technology/what-is-cgnat-double-nat/
needsReview: false
updated: 2021-12-12T11:14:43.000Z
---

More and more complaints arise about Carrier Grade Network Address (CGNAT), if you have any problem with games or port forwarding and services, you may be being impacted by the CGNAT solution.

If you use an internet service in Brazil, for example NET, you are probably in a CGNAT scenario.

## What is CGNAT and what does it mean?

CGNAT is as if the operator had installed a second router in its region and shared its internet connection with its other customers.

Being a little more technical: Providers are sharing a public IPV4 to more than one customer and routing the connection through a second router to their home router.

### Why are they doing this? :(

This solution is necessary because the current standard in Brazil (IPV4) no longer has free ips, the 4.3 billion possible combinations no longer anticipate the number of devices/connections of today.

This solution should be temporary until the complete switch to the new IPV6 standard, which allows for 340 trillion trillion combinations, more than enough to meet the current demand for internet connected devices.

### Disadvantages of CGNAT

In addition to adding one more point of failure in the network and more "resistance" to the internet connection, CGNAT complicates administrative network tasks such as port forwarding and p2p (peer-to-peer) connections that can cause problems in online gaming, streaming of video, VoIP (Skype, Discord, etc.)

And by adding this new router, we also created security breaches, as it is just another router in the network, intermediating all connections in this region, an attacker can take over this router and start monitoring the packets being transmitted, and in addition the Sharing the public IPV4 can hinder criminal investigations as access control and registration becomes more complex in this scenario.
