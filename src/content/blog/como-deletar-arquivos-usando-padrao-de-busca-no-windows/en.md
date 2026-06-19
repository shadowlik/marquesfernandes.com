---
title: How to Delete Files Using Search Pattern in Windows
description: So you have a folder with several files inside, and these files
  follow a name pattern, or maybe you wanted to delete all files with a certain
  extension. There are two ways to accomplish this task, we will cover the two
  ways to accomplish this task.
date: 2020-10-16T18:19:26.000Z
lang: en
translationKey: como-deletar-arquivos-usando-padrao-de-busca-no-windows
slug: how-to-delete-files-using-windows-search-pattern
category: technology
tags: []
wpId: 11837
canonicalPath: /en/technology/how-to-delete-files-using-windows-search-pattern/
needsReview: false
updated: 2021-12-12T11:17:16.000Z
---

So you have a folder with several files inside, and these files follow a name pattern, or maybe you wanted to delete all files with a certain extension. There are two ways to accomplish this task, we will cover the two ways to accomplish this task.

## 1\. Using PowerShell

You can chain a command `Get-ChildItem` through a filter `Where-Object` that accepts a pattern `RegEx` and then chain the eating `Remove-Item` to remove. 

Get-ChildItem $Path | Where{$\_.Name -Match "<RegEx>"} | Remove-Item

The name attribute will only match the file or folder name, along with the file extension.It won't match other things along the way.This will pass an object `FileInfo` by the channel, that `Remove-Item` takes as input to the channel and will remove the files in question.

If you want to include subfolders for the search, we need to add the option `-Recourse` to command `Get-ChildItem` :

Get-ChildItem $Path -Recurse | Where{$\_.Name -Match "<RegEx>"} | Remove-Item

If you just want to exclude files, you can specify this in the statement. `Onde` , watching the property `PSIsContainer` of the object `FileInfo` :

Get-ChildItem $Path -Recurse | Where{$\_.Name -Match "<RegEx>" -and !$\_.PSIsContainer} | Remove-Item

## two. Using Explorer

For users who are not used to using the command line, there is the possibility of filtering using the Windows Explorer search and selecting all files filtered for deletion. This way is not the most performative and can take a little more work, as the filter sometimes returns items that we don't necessarily want to delete, in the example below we see the filter by extension `.png` . So, if you are going to use this method, be sure to check before selecting everything and deleting, that all the files listed are really the ones you want to remove.

![](/wp-content/uploads/2020/10/image-1-1024x560.jpg)
