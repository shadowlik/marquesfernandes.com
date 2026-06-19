---
title: How to develop with Docker on Linux within Windows without dual boot - WSL 2
description: WSL is a feature available in Windows 10, upon enablement, since
  version 1607, and since version 2004 version 2 has been made available to
  everyone. WSL allows you to run commands on a Linux distribution directly on
  Windows, without the need for a virtual machine or dual boot.
date: 2020-06-18T11:59:11.000Z
lang: en
translationKey: como-desenvolver-com-docker-no-linux-dentro-do-windows-sem-dual-boot-wsl-2
slug: how-to-develop-with-docker-on-linux-within-windows-without-dual-boot-wsl-2
category: technology
tags: []
wpId: 11910
canonicalPath: /en/technology/how-to-develop-with-docker-on-linux-within-windows-without-dual-boot-wsl-2/
needsReview: false
updated: 2021-12-12T11:16:56.000Z
---

This is an article I've been waiting anxiously for years to be able to write, it's finally possible, in an uncomplicated and optimized way, to develop using all the advantages of Linux directly from Windows. For a long time I preferred to configure my computer with dual boot, I used Windows for games, and other applications, and [Ubuntu](http://marquesfernandes.com/?s=ubuntu) to work and develop on a daily basis. The Linux environment brings some benefits for day-to-day development, from better performance with some applications and services, Docker, for example, to its powerful command line. However, the lack of some widely used applications and compatibility with games makes Windows still necessary. Finally, in the 2004 Windows update, WSL2 (Windows Subsytem for Linux) was added, now allowing a more native integration with some systems on linux, such as, for example, [docker](http://marquesfernandes.com/conteineres-e-docker-o-que-e-e-para-que-serve/) .

## What is Windows Subsystem for Linux (Windows Subsystem for Linux - WSL2)?

WSL is a feature available in Windows 10 upon enablement, it's been around since version 1607, but since version 2004 version WSL 2 has been made available to everyone. WSL allows you to run commands on a Linux distribution directly on Windows, without the need for a virtual machine or dual boot.

WSL allows you to install many popular Linux distributions on your machine, it creates an isolated file structure independent of the main system but it also allows you to access files from your Windows installation.

![Windows Store - Linux](/wp-content/uploads/2020/06/image-10-1-1024x560.jpg)

Microsoft's documentation is very didactic and teaches you how to enable and configure WSL on your machine, [check here](https://docs.microsoft.com/pt-br/windows/wsl/install-win10) .

## WSL2 and Docker

As the Windows Subsystem for Linux WSL 2 introduces a significant architectural change as it is a complete Linux kernel, it allows Linux containers to run natively without emulation (Goodbye Hyper-V).

With Docker Desktop running on WSL 2, users can leverage Linux workspaces and avoid the maintenance of Linux and Windows build scripts. In addition, WSL 2 provides improvements in file system sharing, boot time, and access to some cool new features for Docker Desktop users.

Docker Desktop uses the dynamic memory allocation feature in WSL 2 to greatly improve resource consumption. This means that Docker Desktop uses only the necessary amount of CPU and memory resources it needs, and it allows CPU- and memory-intensive tasks, such as building a container, to run much faster.

Also, with WSL 2, the time required to start a Docker daemon after a cold start is significantly faster. It takes less than 10 seconds to start the Docker daemon compared to almost a minute in the previous version of Docker Desktop.

A practical example for developers of [nodejs and docker](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/) , it's no longer needing to use the flag `--legacy-watch` with nodemon, file changes will propagate with the same speed and compatibility, after all, they will be running on linux.

## Configuring VS Code and Docker with WSL2

I will explain the process I did for my scenario, I use the VS Code editor (I researched and saw that many other ides have WSL support as well), and I develop practically all my applications with Docker, we will learn how to configure it to use WSL also.

The first thing we need to understand is how we're going to handle the files, after you've [enabled WSL and installed your Linux distro](https://docs.microsoft.com/pt-br/windows/wsl/install-win10) preferred, you will now have two environments, as if you had a virtual machine with its own disk. Although you can access Windows data via the WSL command line, this access is not native, it uses a tip to share these files which impacts performance, so anything you want to develop on linux to take advantage of the improvements should be created in the direct data structure of WSL.

So if you're in a folder that looks like `/mnt/c/` , you're accessing the files on Windows, we don't want that for development.

### VS Code - WSL Extension

To configure your VS Code to support WSL, just install the extension **[Remote WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)** , developed by Microsfot itself, it makes all the magic happen. It allows you to open files directly from the Linux system, and it already integrates your terminal with the Linux terminal.

![Remote - WSL](/wp-content/uploads/2020/06/image-5-1024x560.jpg)

Remote - WSL

Once installed and configured, you will need to install the VS Code extensions into the subsystem. Don't worry, it's quite easy, the Remote - WSL extension already enables an option to reinstall your extensions:

![Install VS Code extension into WSL](/wp-content/uploads/2020/06/image-10-1024x560.jpg)

### Docker and WSL 2

Configuring Docker to use the WSL engine is very simple too, just go to its settings and find the option to enable its use.

![Docker WSL 2](/wp-content/uploads/2020/06/image-6-1024x560.jpg)

Once enabled, you will need to enable integration with the installed distro:

![Docker WSL 2](/wp-content/uploads/2020/06/image-7-1024x560.jpg)

If everything goes as expected, you can now use Docker directly from your command line in WSL:

![VS Code, Docker and WSL 2](/wp-content/uploads/2020/06/image-9-1024x560.jpg)

### Optimizing WSL 2

Soon after I set up and started testing this new setup, I noticed that the memory consumption was absurd (I even got 8GB of Ram) separated only for WSL 2. After a search, I saw that there is already a [issue on github](https://github.com/microsoft/WSL/issues/4166) to address the problem, apparently WSL 2 holds a lot of cache files. But there is a simple solution, limiting the amount of memory WSL can consume:

Just create a file in `%UserProfile%.wslconfig` with the following content:

\[wsl2\]
memory=4GB # Limit to 4GB
swap=0
localhostForwarding=true

And if it starts to consume a lot, we can run the command to clear the caches:

`echo 1 | sudo tee /proc/sys/vm/drop_caches`

I hope they solve this problem soon, it's not a deterrent, but it sure gets in the way of the experience, as thresholding the amount of RAM can cause unexpected behavior within the subsystem.

## Conclusion

Although yes, there are still problems in this setup, it shows itself very promising. Currently I have already uninstalled the dual boot from my machine and I have been working on this structure for 2 weeks now, and there is nothing to stop me from complaining. Make a test, see if you adapt to this new structure before uninstalling your dual boot or going back to Windows completely, if you encounter any problems or have any tips, share with us!
