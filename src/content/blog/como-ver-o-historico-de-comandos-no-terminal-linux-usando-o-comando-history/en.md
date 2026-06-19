---
title: How to view command history in linux terminal using history command
description: As the name already delivers, the history command lists all your
  terminal's command history (the same history can be found in the .bash_history
  file in your home folder).
date: 2020-01-07T08:39:33.000Z
lang: en
translationKey: como-ver-o-historico-de-comandos-no-terminal-linux-usando-o-comando-history
slug: how-to-view-command-history-in-linux-terminal-using-command-history
category: development
tags: []
wpId: 12025
canonicalPath: /en/development/how-to-view-command-history-in-linux-terminal-using-command-history/
needsReview: false
updated: 2021-12-12T11:14:53.000Z
---

The more you work with linux terminals, the more you end up needing to optimize your recurring tasks, looking for commands that optimize your day-to-day and improve your productivity: The command `history` it sure is one of them. As the name already gives, the command history lists all the command history of your terminal (the same history can be found in the file `.bash_history` in your folder *home* ). By default, the command history displays the last 5k saved commands.

***Also check:** [How to Scan Your Linux Server for Malwares (Debian/Ubuntu)](http://marquesfernandes.com/2019/12/04/como-escanear-seu-servidor-linux-por-malwares-debian-ubuntu)*

## Using the basic history command

just type `history` in the linux terminal to use the simplest mode of the command:

$history

# Result
1 clear
2 ls her
3 sudo apt-get update
4 history

The command `history` will display the command history of your session, at the beginning of each line there is a number, we can use this numbering to retrieve and re-execute the desired command:

$!2

# Result
drwxr-xr-x 2 shadowlik shadowlik 4096 Dec 28 17:40 Desktop
drwxr-xr-x 2 shadowlik shadowlik 4096 Dec 28 17:40 Documents
drwxr-xr-x 6 shadowlik shadowlik 4096 Jan 6 23:26 Downloads

There is another way to find and rerun commands by doing a generic search on the command `history` :

$!ls

You can also rerun your last command by typing `!!` .

## Searching for a command using history

Now let's combine the command `history` with the command `grep` , so we'll be able to filter our history in search of the desired command:

$history | grep ls

# Result
2 sudo ls her
5 history | grep ls

Another way to access the search functionality is via the shortcut `Ctrl-R` . Type what you are looking for and your prompt will bring up the result:

(reverse-i-search)\`':

## Changing an executed command

We often want to find a command to rerun, but changing some option or parameter. The command `history` allows you to rerun commands with a different syntax. For example, if we want to change our previous command `history | grep ls her` for `history | grep ls -ln` , I can run the following command:

$^ls^ln^

THE `history` will rerun the command by swapping `ls` per `ln` .

## Deleting the history

You may someday need to delete a command that contains some sensitive data or even all the commands in your history. To delete a particular command, type `history -d <line#>` and to erase the entire history content, type `history -c` .
