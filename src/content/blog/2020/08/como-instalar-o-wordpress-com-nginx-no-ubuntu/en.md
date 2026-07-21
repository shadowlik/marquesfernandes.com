---
title: "How to Install WordPress with Nginx on Ubuntu"
description: "WordPress is usually installed using Apache, but there is a very good alternative to it. Nginx is an open-source web server, released in 2004, that is robust, lightweight and very powerful!"
date: 2020-08-01T20:24:37.000Z
lang: en
translationKey: como-instalar-o-wordpress-com-nginx-no-ubuntu
slug: how-to-install-wordpress-with-nginx-on-ubuntu
category: tecnologia
tags:
  - wordpress
  - mysql
  - php
  - nginx
needsReview: true
canonicalPath: /en/how-to-install-wordpress-with-nginx-on-ubuntu/
cover: ./2020-08-fikret-tozak-Zk-Ydz2IAs-unsplash.jpg
---

WordPress is usually installed using [Apache](https://pt.wikipedia.org/wiki/Servidor_Apache), but there is a very good alternative to it. [Ngi](https://pt.wikipedia.org/wiki/Nginx)[nx](https://pt.wikipedia.org/wiki/Nginx) is an open-source web server, released in 2004, that is robust, lightweight and very powerful! There are several benefits to using it instead of Apache, so let's talk a bit about the pros and cons of this setup. In this tutorial you will learn how to install, configure and optimize WordPress using Nginx as the web server, [PHP 7.4](https://www.php.net/releases/7_4_0.php), and we will also generate the *SSL* certificate using [letsencrypt](https://letsencrypt.org/) to enable the [*HTTPS* protocol](http://marquesfernandes.com/o-que-e-http/).

## Why use Nginx?

There are several reasons to use Nginx. In my case I decided to use it because I already had an installation for another web application running on Nginx, and to save machine resources I decided to test this *WordPress + Nginx* setup and I was very happy with the result. Other reasons to use it: it supports reverse proxy, very efficient built-in caching ([FastCGI](https://klauslaube.com.br/2012/11/02/entendendo-o-cgi-fastcgi-e-wsgi.html)), media streaming, load balancing and much more. It was designed to have low memory usage, handle many simultaneous connections and is optimized for delivering static files such as images and videos.

## Prerequisites

-   Ubuntu 18.04/20.04 server with Root access and a public IP
-   A domain to configure access and issue the SSL certificate

## How to install WordPress with Nginx

Let's get to the technical part. Connect via ssh to the machine you are going to configure and follow the next steps:

### 1\. Updating the System

First, update the system package references.

$ sudo apt update

Now upgrade the programs to the latest version (This step is optional but recommended).

$ sudo apt upgrade

### 2\. Installing Nginx

Let's install Nginx directly from the Ubuntu repository.

$ sudo apt install nginx

This step may take a while, it will install and configure Nginx on your machine. Once finished, check whether the service is running.

$ sudo systemctl status nginx

### 3\. Configuring the Firewall

If you are on a machine that has UFW enabled, run the following command to add Nginx as trusted.

$ sudo ufw allow 'Nginx Full'

### 4\. Installing and Configuring the MySQL Database

Our WordPress installation will need a database, which can be either MariaDB or MySQL. In this tutorial we will use the latter.

$ sudo apt install mysql-server

Check whether the installation was successful.

$ sudo systemctl status mysql

Now we need to enter the MySQL command line to create the database and user for WordPress.

$ mysql -u root -p

With the command below we will create a database called `wordpress` with the utf8 charset.

mysql> CREATE DATABASE wordpress CHARACTER SET utf8 COLLATE utf8\_general\_ci;

Now we need to create a user and grant it permission to access our newly created database. Change `SeuUsuario` to the desired username and `SuaSenha` as well, and remember to use a very strong password.

mysql> GRANT ALL ON wordpress.\* TO SeuUsuario @'localhost' IDENTIFIED BY 'SuaSenha';

Renew the MySQL privileges and exit the command line.

mysql> FLUSH PRIVILEGES;
mysql> EXIT;

Now let's run a MySQL security check. This step is optional but strongly recommended.

$ sudo mysql\_secure\_installation

### 5\. Installing PHP 7.4

First run the commands below to update the system and add and configure the PHP ppa on your server.

$ sudo apt install software-properties-common
 
$ sudo add-apt-repository ppa:ondrej/php
 
$ sudo apt update

Now let's install PHP 7.4 and all the plugins required for WordPress.

$ sudo apt install php7.4-fpm php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache php7.4-soap php7.4-zip php7.4-intl unzip -y

Check whether the installation was successful.

$ php-fpm7.4 -v

You can change some important settings, such as the maximum upload size and the PHP execution time.

sudo nano /etc/php/7.4/fpm/php.ini

file\_uploads = On
allow\_url\_fopen = On
upload\_max\_filesize = 100M 
post\_max\_size = 64M 
memory\_limit = 256M 
max\_execution\_time = 360 
max\_input\_vars = 3000 
max\_input\_time = 1000

### 6\. Installing WordPress

First let's create the folder where our WordPress installation will live.

$ sudo mkdir -p /var/www/html/seusite.com

Navigate to the folder and download the latest version of WordPress.

$ cd /var/www/html/seusite.com && wget https://wordpress.org/latest.tar.gz

Now we need to extract and move the files to the root of the desired folder.

$ tar xf latest.tar.gz && mv wordpress/\* ../

Now add the permissions needed for the web server to be able to access the installation files.

$ sudo chown -R www-data: /var/www/html/seusite.com

### 7\. Configuring Nginx for WordPress

Now we need to configure Nginx to recognize our domain and WordPress installation. To do this we will create a file in the `/etc/nginx/sites-available` folder with the name of our domain. With your favorite editor, nano in my case, create the file.

$ sudo nano /etc/nginx/sites-available

Copy and paste the following content.

server{
 
        listen 80;
        listen \[::\]:80;
        server\_name seusite.com www.seusite.com;
 
        root /var/www/seusite.com;
        index index.php;
         
        # Log files
        access\_log /var/log/nginx/seusite.com.access.log;
        error\_log /var/log/nginx/seusite.com.error.log;
        # We create the configuration for the basic Favicon
        location = /favicon.ico {
           try\_files /favicon.ico @empty;
           access\_log off;
           log\_not\_found off;
           expires max;
        }
        # Configuration for robots.txt for the search engines
        location = /robots.txt {
           allow all;
           log\_not\_found off;
           access\_log off;
           try\_files $uri /index.php?$args;
        }
        # Configuration to run the WordPress installation
        location / {
           try\_files $uri $uri/ /index.php?$args;
        }
        # We include the FastCGI configuration
        location ~ \\.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi\_pass unix:/var/run/php/php7.4-fpm.sock;
        }
        # We add a cache configuration for image, css and javascript files
        location ~\* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
                 expires max;
                log\_not\_found off;
        }
 
}

Now create a shortcut (symbolic link) to this file we just created.

$ sudo ln -s /etc/nginx/sites-available/seusite.com /etc/nginx/sites-enabled/

Now restart Nginx so that the new site configuration is applied.

$ sudo systemctl restart nginx

## 8\. Installing Let's Encrypt and Generating the SSL Certificate

At this stage you already need to have pointed your domain to your server, since we need the server to already be reachable over the public internet. Install and configure [Certbot](https://certbot.eff.org/), which will automatically generate and configure the certificate on the Nginx installation.

$ sudo add-apt-repository ppa:certbot/certbot
 
$ sudo apt install python-certbot-nginx
 
$ sudo certbot --nginx -d seusite.com -d www.seusite.com

A short questionnaire will appear. Accept the terms and answer all the questions carefully. In the last step, choose to redirect all HTTP traffic to HTTPS, and it will take care of setting up the redirect automatically.

### 9\. Configuring WordPress

If everything went well, you can now access the WordPress installation in your browser by typing your domain, in the case of this tutorial **`https://seusite.com`**. Now it's very simple, just follow and answer the WordPress installation questionnaire, providing the database, the user and the password we configured in step 4.

Now just enjoy your new and optimized WordPress installation. Once configured, use [cache plugins](http://marquesfernandes.com/melhores-plugins-de-cache-para-wordpress-gratuitos-2020/) that have configuration compatibility with Nginx to optimize your site's speed even further.
