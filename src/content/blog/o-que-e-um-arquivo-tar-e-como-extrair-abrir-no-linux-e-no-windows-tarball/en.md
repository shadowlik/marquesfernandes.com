---
title: What is a .tar file and how to extract/open in Linux and Windows? - Tarball
description: Short for "Tape Archive", sometimes called a tarball, is a
  consolidated Unix format file. .tar files are used to consolidate files and
  folders into one...
date: 2019-12-06T01:32:23.000Z
lang: en
translationKey: o-que-e-um-arquivo-tar-e-como-extrair-abrir-no-linux-e-no-windows-tarball
slug: what-is-a-tar-and-how-to-extract-open-in-linux-and-in-windows-tarball-file
category: technology
tags: []
wpId: 12039
canonicalPath: /en/technology/what-is-a-tar-and-how-to-extract-open-in-linux-and-in-windows-tarball-file/
needsReview: false
updated: 2021-12-12T11:14:51.000Z
---

You probably got this far because you ran into an extension file **TAR** or maybe because you don't remember what the crazy combination of options is ( **xzvf** ) to extract the file on Linux.

Diminutive of English *"Tape Archive"* , sometimes called **tarball** , is a consolidated Unix format file. Files **.tar** are used to consolidate files and folders into one, another important aspect of files. **.tar** is that they keep the file system information, such as user permissions, modification dates and all directory structures and that's why this extension became popular facilitating the sharing of scripts and files over the internet.

the format **TAR** it is very common on Linux and Unix systems, but it is noteworthy that this type of file does not have compression, for that we need to transform it into a file **TGZ** , the also famous extension **.tar.gz** .

## How to open a .tar file

If you're on Linux this is a very simple task and you don't need any other program besides your terminal:

\# .tar file
$ tar -xvf file.tar #Extract contents in current folder
$ tar -xvf file.tar -C /tmp #Extract contents into /tmp folder
# .tar.gz file
$ tar -xzvf file.tar.gz #Extract content in current folder
$ tar -xzvf file.tar.gz -C /tmp #Extract contents in /tmp folder

If you are on Windows, TAR files can be opened with most zip/unzip programs. Two great options for this job are the programs [7-Zip](https://www.7-zip.org/) and [PeaZip](https://www.peazip.org/) .

## How to create a .tar file

On Linux creating files **.tar** it's as simple as extraction. In the command below, we will generate the file already compressed with **gzip** , which will result in a file **.tar.gz** . Note that adding the . **gz** in the end it is not mandatory but it is recommended as it is a good practice to identify and facilitate the extraction.

$ tar -czvf filename.tar.gz /home/Downloads

In the command above we passed the option **-czvf** , What represents:

-   *\-ç:* create a file
-   *\-z:* Use gzip to compress the file
-   *\-v:* Enable "verbose" mode to show file creation progress
-   *\-f:* Lets you specify a filename other than the folder name

Now if you're on Windows, the least complicated way to create the file **.tar** we need to use some graphical tool like 7-Zip:

1.  Select all the files and folders you want in your file **.tar**
2.  Click on the first icon on the top bar "Add"

![7Zip](./2019-12-image-3.jpg)

3.  Under "Compressed file format" select **tar**
4.  Click ok

![7Zip](./2019-12-image-4.jpg)

On Windows 7-Zip does not allow the generation of the file **TAR** and the compression with **gzip** in one step, so we need an additional step.

4.  Select the file **.tar** newly created
5.  Under "Compressed file format" select **gzip**
6.  Click ok

![7Zip](./2019-12-image-5.jpg)
