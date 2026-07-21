---
title: How to Change a User's Password on Ubuntu Linux?
description: You need to change the password of a user account in Linux, perhaps
  to access sftp or ssh in Ubuntu. How to change a user's password on Ubuntu
  Linux?
date: 2020-09-23T23:01:14.000Z
lang: en
translationKey: como-trocar-a-senha-de-um-usuario-no-linux-ubuntu
slug: how-to-change-a-users-password-in-linux-ubuntu
category: technology
tags: []
wpId: 11841
canonicalPath: /en/technology/how-to-change-a-users-password-in-linux-ubuntu/
needsReview: false
updated: 2021-12-12T11:17:16.000Z
---

You need to change the password of a user account in Linux, perhaps to access sftp or ssh in Ubuntu.How to change a user's password on Ubuntu Linux?

Your Ubuntu Linux account information is stored in a file named **/etc/passwd** and the encrypted password in **/etc/shadow** . Fortunately, for your security, it is not possible to access passwords already stored in clear text. 

## How to Change a User Password in Ubuntu

1.  Open the terminal by pressing ctrl + Alt + T
2.  To change the password for a user named tom in Ubuntu, type:  
    **sudo passwd henrique**
3.  To change the root password on Ubuntu Linux, run:  
    **sudo passwd root**
4.  And to change your own password for Ubuntu, run:  
    **passwd**

## How do I change user account password in Ubuntu?

Open a terminal window again.Enter the following command to change the password of a regular Ubuntu user account called *Henrique* :

`sudo passwd {username}   sudo passwd henrique   sudo passwd marques`

## Conclusion

This is a quick tutorial on how to change any user's password on Ubuntu Linux, remembering that you will always need to have elevated access and run commands using the `sudo` .
