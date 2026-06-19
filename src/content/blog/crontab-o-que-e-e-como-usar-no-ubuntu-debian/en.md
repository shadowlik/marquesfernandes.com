---
title: Crontab - What is it and how to use it on Ubuntu/Debian?
description: The cron daemon, or Crontab, in Linux runs background tasks at
  specific scheduled times; It's like Task Scheduler in Windows. You can
  basically run any terminal command with this scheduler.
date: 2020-03-20T18:25:09.000Z
lang: en
translationKey: crontab-o-que-e-e-como-usar-no-ubuntu-debian
slug: crontab-what-and-how-to-use-in-ubuntu-debian
category: development
tags: []
wpId: 11971
canonicalPath: /en/development/crontab-what-and-how-to-use-in-ubuntu-debian/
needsReview: false
updated: 2021-12-12T11:15:54.000Z
---

The cron daemon, or Crontab, in Linux runs tasks in the background at specific scheduled times, it is the equivalent of the Windows Task Scheduler. You can basically run any terminal command with this scheduler.

A very common task performed with Crontab is to automate backups, system maintenance and other repetitive tasks. The syntax is powerful and flexible, so you can run a task every fifteen minutes or a specific minute on a specific day every year.

## Definition of Crontab

There is no conclusive explanation, but the most accepted answer is from Ken Thompson (author of unix cron): The name *cron* comes from *chron* , the Greek prefix for ' *time* '. And tab references table, a table containing crons: Timetable.

## crontab syntax

The cron syntax consists of a group of 5 variables separated by space: `* * * * *` . Each group can contain one or more numbers, separated by a comma for unit values or a single dash identifying an interval range, and finally the command to be executed. Below are some examples of scheduling syntaxes:

| min | hour | Day of month | month | day of the week | description |
| --- | --- | --- | --- | --- | --- |
| \* | \* | \* | \* | \* | runs every minutes |
| 0 | two | 1,2,3 | \* | \* | Runs at 2 am every day 1, 2 and 3 of each month |
| 0 | 23 | \* | \* | 1-5 | Runs at 11pm from Monday to Friday |
| 0 | 0 | 25 | 12 | \* | Runs at 12:00 on Christmas |

## [Schedule guru](https://crontab.guru/)

[![](./2020-03-image-12.png)](https://crontab.guru/)

A site I use a lot to validate my crons: [Schedule guru](https://crontab.guru/) . On this site you can visually see how your cron crashes behave, it is very important to be careful when creating complex crons as this can lead to catastrophic results if configured wrong!

## Creating a Schedule on Crontab

Let's get down to business, let's learn how to create a schedule. As an example let's create a cron that runs every minute and writes a log message to a file. The first thing we must do is run the following command:

$crontab -e

If this is your first time running the command, you will need to enter which text editor you want to use:

![crontab -e](./2020-03-screenshot-nimbus-capture-2020.03.20-18_55_25.png)

Choose the default editor for your Crotab

I like the nano editor so I selected option 1. Then you will have a text file with some comments explaining how to use it, we can proceed to the end of the file, where we will create our schedule.

![crontab -e](./2020-03-screenshot-nimbus-capture-2020.03.20-19_02_50.png)

Crotab file comments

Let's add the following line to the end of the file:

\* \* \* \* echo "It worked" >> ~/cron.log

![crontab -e](./2020-03-screenshot-nimbus-capture-2020.03.20-19_08_46.png)

Basically this schedule will run every minute by adding a line to the cron.log file located in our home folder. To save your cron use the shortcut Ctrl + O to save and close the file, now your schedule is in effect! To check if it is working correctly, let's use the following command:

$ tail -f ~/cron.log

![tail -f ~/cron.log](./2020-03-screenshot-nimbus-capture-2020.03.20-19_10_33.png)

If everything goes as expected, after a few minutes you will see a few lines with our text: "It worked". This example is very simple, you can execute any command accepted in the terminal via Crontab.
