---
title: Creating a Linux Service with systemd
description: It's very easy to create a Linux service, you can create a service
  that runs any script or program in any programming language, and make that
  system persistent and resilient as a service on your machine.
date: 2020-07-10T20:36:14.000Z
lang: en
translationKey: criando-um-servico-linux-com-systemd
slug: creating-a-linux-service-with-systemd
category: development
tags: []
wpId: 11902
canonicalPath: /en/development/creating-a-linux-service-with-systemd/
needsReview: false
updated: 2021-12-12T11:16:58.000Z
---

I often see the need to create some program or script that needs to be always running on the machine, and also when the computer is restarted.

There are a few tools to solve this job, but always consider using solutions built into your operating system first.

It's very easy to create a Linux service, you can create a service that runs any script or program in any programming language, and make that system persistent and resilient as a service on your machine.

In this article we are going to use the [systemd](https://pt.wikipedia.org/wiki/Systemd) to manage our service, it is present in most linux distributions like Ubuntu, Debian, OpenSuse...

## Creating the Program

Let's create a simple web application in [NodeJs](http://marquesfernandes.com/afinal-o-que-e-nodejs/) for example. he will listen at the door `9999` and return the current date.

const http = require('http');

http.createServer(function (req, res) {
  res.write(new Date().toString());
  res.end();
}).listen(9999);

Let's test it, in the browser, go to `http://localhost:999` .

![](/wp-content/uploads/2020/07/image-2.png)

Now that we validated that our program works, let's make it run always, if for some reason it stops working it must be restarted and if the machine is restarted, the service needs to start too.

## Creating the Service

I will call our service `webdate` , with your preferred terminal editor creates a file in the path `/etc/systemd/system/webdate.service` .

\[Unit\]
Description=WebDate - Date Web Service
After=network.target
StartLimitIntervalSec=0
\[Service\]
type=simple
restart=always
RestartSec=1
User=hundreds
ExecStart=/usr/bin/node /path/file.js

\[Install\]
WantedBy=multi-user.target

You will need to change the following variables:

-   `User=` : I put your current user, it will be the user who will run the service
-   `ExecStart=` : This is the path to the script that will be executed, you need to provide the full path to the command line first in, normally, `/usr/bin/node` and then the full path to your file.

Now to start our service just run the following command:

systemctl start webdate

To enable automatic startup when the system is turned on:

systemctl enable webdate

Okay, now your service is running and configured to restart in case of failure and start automatically with the system. To stop the service just run the following command:

systemctl stop webdate
