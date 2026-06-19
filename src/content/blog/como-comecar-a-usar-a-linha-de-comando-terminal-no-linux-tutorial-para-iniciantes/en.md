---
title: How to get started using the command line (Terminal) in Linux - Tutorial
  for Beginners
description: The terminal in linux is a very powerful tool and can make your
  life a lot easier.  You don't need to be afraid of it, the terminal isn't just
  made for movie hackers to use, you can and should too!
date: 2020-03-26T11:21:25.000Z
lang: en
translationKey: como-comecar-a-usar-a-linha-de-comando-terminal-no-linux-tutorial-para-iniciantes
slug: how-to-get-started-using-the-command-line-terminal-in-linux-tutorial-for-beginners
category: technology
tags: []
wpId: 11953
canonicalPath: /en/technology/how-to-get-started-using-the-command-line-terminal-in-linux-tutorial-for-beginners/
needsReview: false
updated: 2021-12-12T11:15:58.000Z
---

The terminal in linux is a very powerful tool and can make your life a lot easier. You don't need to be afraid of it, the terminal isn't just made for movie hackers to use, you can and should too!

## Terminal; Console; Shell; Prompt;

The Linux command line is a text interface, all commands are entered in text format. It has several names, and can usually be called *shell* , *terminal* , *console* or *prompt* .

## what will you learn

1.  A Brief History of the Command Line
2.  How to access your Terminal
3.  How to Manipulate Folders and Files (Basic Commands)
4.  Other useful commands
5.  command chain
6.  Commands with privilege

## what will you need

In this tutorial we will use examples using the operating system [Ubuntu](https://ubuntu.com/) , but all linux distributions have command line and can be used, some commands may need to be adapted.

## Brief history of the command line

During the early years of the then new computer industry, one of the first operating systems created was Unix. It was designed to function as a multi-user system on mainframe computers (major computational computers - for the time), and users are connected remotely via individual terminals. These terminals were pretty basic compared to what we know today: just a keyboard and a screen, no color and no power to run programs locally. Its use was restricted to only sending keystrokes to the server and displaying the received data.

Compared to graphical interfaces, text is very light, therefore, more performant, requiring less computational resources. Even on machines from the 1970s, running hundreds of terminals over epically slow network connections (by today's standards), users were still able to interact with programs quickly and efficiently. The commands have also been optimized to reduce as much as possible the number of things needed to type, further accelerating the use of the terminal by your users. Speed and efficiency are one of the reasons the command line is still widely used today and is preferred by many developers.

By connecting to a Unix mainframe through a terminal, users were able to run virtually everything we do today with graphical interfaces. Whether it's creating files, renaming, moving, users in the 70s could only do it all through a text interface. If you were sorry, make no mistake, whoever has mastered the command line finds it much more laborious and sometimes complicated to perform basic tasks using screens and mouse, and we hope that by the end of this tutorial you will understand why.

The original Unix shell program was initially called sh, but it has been improved and replaced over the years, so on a current Linux system you are likely to be using one. *shell* called *bash* , but let's not worry about that right now.

In short, Linux is a descendant of Unix, its base was designed to behave in a similar way.

## Accessing your Terminal

There are two ways to access your terminal in Ubuntu: Typing *Terminal* in the application search field or by keyboard shortcut `ctrl + alt + t` .

![Application Search](/wp-content/uploads/2020/03/image-17.jpg)

Application Search

A window similar to the one below will appear:

![Command Line - Terminal](/wp-content/uploads/2020/03/image-18.jpg)

Command Line - Terminal

Let's start with some basic terminal concepts, first we need to understand what the texts that already appear on the screen mean.

![Understanding the Terminal](/wp-content/uploads/2020/03/image-19.png)

Understanding the Terminal

On our left, for all the commands that are executed, we will notice the following information:

user@computer:location$

-   **user** : Identifies which user we are browsing and using our terminal.
-   **computer** : It identifies which computer we are connected to, in this tutorial we will use our local computer, but this is important information when we are connected to remote terminals.
-   **place** : Identifies which folder the terminal is browsing, initially your terminal by default should open with the information **~** , that means you're in the user's root folder, we'll talk about that later.
-   **$** : Identifies the privilege level, **$** means you are running the commands as a user with no higher privileges, and **#** means you are running as a privileged user, we call this a *root* .

Let's now try our first command, the `pwd` , from English ' **P** rint **w** orking **d** irectory', it will display the full path to which folder we are referenced when executing the commands, type the command in your terminal and press *enter* .

![Using the pwd command](/wp-content/uploads/2020/03/image-20.png)

Using the pwd command

So we have the result *`/home/shadowlik`* , this is our user's root folder path, by convention whenever you are browsing this folder or child folders to it, you will not see the full path, your root folder path is substituted for **`~`** .

Unlike Windows, where conventionally the root of all programs is located in `ç://` , on Linux the root of all folders, including other disks such as pendrivers, is `/` .

***We continue the tutorial on the next page of this article.*** :

## Browsing folders with Terminal

Now let's navigate to the root of our computer and go back to our user root folder, for that we'll use the command **CD** , from English ' **ç** hange **d** irectory', to change suffices. enter the command `CD /` and press enter.

![Using the cd command](/wp-content/uploads/2020/03/screenshot-nimbus-capture-2020.03.26-11_01_43.png)

Using the cd command

We can see that we can navigate to **/** , note that in the last line we can already see the **/** after the colon. Now let's list all the folders we have in that directory with the command `ls` . Type ls and press enter.

![Using the ls command](/wp-content/uploads/2020/03/image-21.jpg)

Using the ls command

Folder convention may vary by linux distribution, we are interested in folder `/home` , we want to navigate to it, for that we'll repeat the previous steps, now executing the command `home cd` and then `ls` to list the contents of the folder.

![Navigating to the root folder ](/wp-content/uploads/2020/03/image-22.jpg)

Navigating to the root folder

Here we notice that there is only one folder inside the /home folder, because there is only one user created on my computer, if you have more than one user, their root folders will be there. Repeat the sequence of commands again, `shadowlike cd` (in this case the name of your user's folder) and `ls` .

![Navigating to User Folder](/wp-content/uploads/2020/03/image-23.jpg)

Navigating to User Folder

Okay, here we go back to this initial, as you can see we are where we started when the terminal opened, in our user's root folder ( **~** ).

Now, if you want to go back a folder in the navigation without having to type the full path, we can use the `..` , when we type `CD ..` , we are wanting to return a folder within our navigation, they can be chained too, for example, the command `CD ../..` back two folders.

## cleaning the terminal

Before moving on, let's learn how to clean our terminal, as we've already executed some commands our screen is a little cluttered, for that we'll use the command `clear` . Type and press enter to clear the entire contents of your terminal.

## Creating folders with Terminal

Now let's learn how to create a folder in our home (~), for that we'll use the command `mkdir` , from English ' **m** The **k** and **right** ectory (create folder)', let's create a folder called Tutorial, type `mkdir Tutorial` and then use the ls command to validate that our directory was created.

![Creating the Tutorial Folder](/wp-content/uploads/2020/03/image-24.jpg)

Creating the Tutorial Folder

## Creating files with Terminal

Now let's create a simple text file, let's learn two ways to do this, using the command `touch` and the command `echo` .

With the touch command we can create an empty text file, for that type `touch text.txt` and `ls` to verify the creation.

![Creating a file with the Touch command](/wp-content/uploads/2020/03/image-25.png)

Creating a file with the Touch command

Now we will use the echo command to create a text file with content, for that type `echo "Hello world!" >text2.txt` . To validate the content of this file we will use the command `cat` , it will return to us all the content inside the file, type `cat text2.txt` .

![Creating a file with the echo command](/wp-content/uploads/2020/03/screenshot-nimbus-capture-2020.03.26-11_25_40.jpg)

Creating a file with the echo command

## Moving/renaming files and folders with Terminal

On Linux there is no way to rename files, I won't go into the technical details of why, what we can do is move this file with a new name and we will get the similar behavior we want. For this we will use the command `mv` , from English ' **m** The **v** and', type `mv text2.txt olamundo.txt` and use the command `cat olamundo.txt` to validate the execution.

![moving files](/wp-content/uploads/2020/03/image-26.jpg)

moving files

The first argument is the location of the file and the second the final location to move the file, this location can be referential to the folder we are browsing or complete, for example, `mv /home/shadowlik/Tutorial/texto2.txt /home/shadowlik/olamundo.txt` , in this command we are moving our file from the Tutorial folder to the shadowlik folder.

## Removing files with Terminal

Now that we've learned how to create folders and files, let's learn how to delete them. To delete empty folders you can use the command `rmdir` , from English ' **r** and **m** hello **d** irectory', but this command is only possible if the folder is empty. To remove files and folders with content, we use the command `rm` , to delete files is very simple, use the command `rm helloworld.txt` and `ls` to validate the execution.

![removing files](/wp-content/uploads/2020/03/image-27.jpg)

removing files

Now let's go back to our user root folder to remove the Tutorial folder we created earlier, for that type `CD ..` to go back a folder, and use the command `rm -r` Tutorial, this command indicates that we want to forcibly and recursively remove (-r) the folder and any content inside.

![Removing folders](/wp-content/uploads/2020/03/image-28.jpg)

Removing folders

### Be very careful with the RM command

Be very careful when using the rm command, it can perform irreversible operations, especially if run with administrator privileges. If for some reason you deleted a file you didn't want, don't worry, maybe they [can still be recovered](http://marquesfernandes.com/como-recuperar-arquivos-excluidos-no-linux-ubuntu-debian/) .

## command chaining

So far we've run one command at a time, but it's possible to chain together a sequence of commands. The linux terminal accepts the use of operators, like those used in programming languages, in this tutorial we will focus only on the use of the operator `&&` , known as *and* (e), it allows us to chain commands together. From our user root folder we will use the thread to create a folder; a text file with content; display the contents of this file:

cd ~ && mkdir Texts && echo "Hello world" > Texts/mundo.txt && cat Texts/mundo.txt

![Running commands chained!](/wp-content/uploads/2020/03/image-29.png)

Executing Chained Commands

## Commands with root privilege

Linux is based on privileges and access levels, each folder and file has its own table of which user/group can do what, be it modify, create a file in that folder or remove something. All crucial linux folders need root access to perform any operation, this is a way of security, in this tutorial we will explain how to perform commands with these access levels, **but be very careful, wrong commands can ruin your computer** .

### How to use a command as root

We can use any command with root privileges, for that we just need to type `sudo` at the start of any command, the root user's password will be required, but this is only needed once per terminal session.

Let's do a test to see how permissions work in practice, let's try to create a command in the root of our system, which by default requires root privileges for any write operation, the expected result is a privilege error.

![Running commands without privileges](/wp-content/uploads/2020/03/image-34.png)

Running commands without privileges

### Installing an application

Installing any application via the Ubuntu package manager requires root privileges, we will use this command as an example. Let's install a simple program, similar to the Windows task manager, the *htop* . enter the command `sudo apt-get install htop` and press enter, the password will be required.

![Installing htop application](/wp-content/uploads/2020/03/image-30.png)

Installing htop application

For linux security, when you type your password, nothing appears, not even the \*\*\*\*\*\*, so it is important that you type your password calmly and press enter. Three wrong attempts will cancel your command.

![Installing htop application - part 2](/wp-content/uploads/2020/03/image-32.jpg)

Installing htop application - part 2

If everything goes as expected, we will have successfully installed the program. *htop* , now you can open the linux task manager, see resources like memory, processing and open services with a simple command, type `htop` and press enter.

![Using htop application](/wp-content/uploads/2020/03/image-33.jpg)

Using htop application

## Conclusion

Hope you managed to learn some basic commands and lost your fear of the command line. Terminal applications are endless and powerful, the more you train and learn new commands, the more optimized your daily life on Linux will be. If you have any questions or would like to know something about more advanced commands, leave it in the comments!
