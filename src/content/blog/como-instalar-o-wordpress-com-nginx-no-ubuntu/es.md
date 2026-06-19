---
title: Cómo instalar Wordpress con Nginx en Ubuntu
description: La instalación de Wordpress se realiza generalmente usando Apache,
  pero hay una muy buena alternativa a ella. Nginx es un servidor web de código
  abierto, lanzado en 2004, es un servidor web robusto, ligero y muy potente!
date: 2020-08-01T20:24:37.000Z
lang: es
translationKey: como-instalar-o-wordpress-com-nginx-no-ubuntu
slug: how-to-install-the-wordpress-com-nginx-no-ubuntu
category: tecnologia-es
tags: []
wpId: 9109
canonicalPath: /es/tecnologia-es/how-to-install-the-wordpress-com-nginx-no-ubuntu/
needsReview: false
updated: 2021-12-12T11:22:57.000Z
---

La instalación de Wordpress se realiza generalmente usando [Apache](https://pt.wikipedia.org/wiki/Servidor_Apache), pero hay una muy buena alternativa a ella. [Ngi](https://pt.wikipedia.org/wiki/Nginx)[nx](https://pt.wikipedia.org/wiki/Nginx) es un servidor web de código abierto, lanzado en 2004, es un servidor web robusto, ligero y muy potente! Hay varios beneficios de usarlo en lugar de Apache, vamos a hablar un poco sobre los lados positivos y negativos de esta configuración. En este tutorial aprenderás a instalar, configurar y optimizar Wordpress usando Nginx como servidor web, [PHP 7.4](https://www.php.net/releases/7_4_0.php) y también generaremos el certificado *SSL* usando [letsencrypt](https://letsencrypt.org/) para habilitar el [protocolo *HTTPS*](http://marquesfernandes.com/o-que-e-http/).

## ¿Por qué usar Nginx?

Hay varias razones para utilizar Nginx, en mi caso decidí utilizar porque ya tenía una instalación para otra aplicación web con Nginx, para ahorrar recursos de la máquina decidí probar esta configuración de *Wordpres + Nginx* y estaba muy contento con el resultado. Otras razones para usar: Es compatible con proxy inverso, almacenamiento en caché integrado muy eficiente ([FastCGI](https://klauslaube.com.br/2012/11/02/entendendo-o-cgi-fastcgi-e-wsgi.html)), streaming de medios, equilibrio de carga y más. Está diseñado para tener un bajo consumo de memoria, muchas conexiones simultáneas y optimizado para entregar archivos estáticos como imágenes y vídeos.

## Requisitos previos

-   Servidor Ubuntu 18.04/20.04 con acceso root y una IP pública
-   Un dominio para configurar el acceso y emitir el certificado SSL

## Cómo instalar Wordpress con Nginx

Vayamos a la parte técnica, accedamos por ssh a la máquina que va a configurar y siga los siguientes pasos:

### 1\. Actualización del sistema

En primer lugar, actualice las referencias del paquete del sistema.

$ sudo apt update

Ahora actualice los programas a la versión más reciente (este paso es opcional pero recomendado).

$ sudo apt upgrade

### 2\. Instalación de Nginx

Vamos a instalar Nginx directamente desde el repositorio de Ubuntu.

$ sudo apt install nginx

Este paso puede tardar un tiempo, se instalará y configurará Nginx en su máquina, al final comprobar si el servicio se está ejecutando.

$ sudo systemctl status nginx

### 3\. Configuración del cortafuegos

Si está en cualquier equipo que tenga UFW habilitado, ejecute el siguiente comando para agregar Nginx como de confianza.

$ sudo ufw allow 'Nginx Full'

### 4\. Instalación y configuración de la base de datos MySQL

Nuestra instalación de Wordpress necesitará una base de datos, puede ser tanto MariaDB como MySQL, en este tutorial vamos a utilizar la última opción.

$ sudo apt install mysql-server

Asegúrese de que la instalación se realizó correctamente.

$ sudo systemctl status mysql

Ahora tenemos que introducir por línea de comandos en MySQL para crear la base de datos y el usuario para Wordpress.

$ mysql -u root -p

Con el siguiente comando crearemos una base de datos llamada `wordpress` con charset utf8mb4.

mysql> CREATE DATABASE wordpress CHARACTER SET utf8mb4 COLLATE utf8mb4\_general\_ci;

Ahora necesitamos crear un usuario y darle permiso para acceder a nuestra base de datos recién creada. Cambie `SuUsuario` al nombre de usuario deseado y `SuContrasena` también, recuerde utilizar una contraseña segura.

mysql> GRANT ALL ON wordpress.\* TO SuUsuario @'localhost' IDENTIFIED BY 'SuContrasena';

Renueve los privilegios de MySQL y salga de la línea de comandos.

mysql> FLUSH PRIVILEGES;
mysql> EXIT;

Ahora vamos a ejecutar una comprobación de seguridad de MySQL, este paso es opcional pero muy recomendable.

$ sudo mysql\_secure\_installation

### 5\. Instalación de PHP 7.4

Primero ejecute los siguientes comandos para actualizar el sistema y agregar y configurar php ppa en su servidor.

$ sudo apt install software-properties-common
 
$ sudo add-apt-repository ppa:ondrej/php
 
$ sudo apt update

Ahora vamos a instalar PHP 7.4 y todos los plugins necesarios para WordPress.

$ sudo apt install php7.4-fpm php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache php7.4-soap php7.4-zip php7.4-intl unzip -y

Asegúrese de que la instalación se ha realizado correctamente.

$ php-fpm7.4 -v

Puede cambiar algunos ajustes importantes, como el tamaño máximo de carga y el tiempo de ejecución de PHP.

sudo nano /etc/php/7.4/fpm/php.ini

file\_uploads = On
allow\_url\_fopen = On
upload\_max\_filesize = 100M 
post\_max\_size = 64M 
memory\_limit = 256M 
max\_execution\_time = 360 
max\_input\_vars = 3000 
max\_input\_time = 1000

### 6\. Instalación de WordPress

Primero vamos a crear la carpeta donde estará nuestra instalación de WordPress.

$ sudo mkdir -p /var/www/html/seusite.com

Navegue a la carpeta y descargue la última versión de WordPress.

$ cd /var/www/html/seusite.com && wget https://wordpress.org/latest.tar.gz

Ahora tenemos que extraer y mover los archivos a la raíz de la carpeta deseada.

$ tar xf latest.tar.gz && mv wordpress/\* ../

Ahora agrega los permisos necesarios para que el servidor web pueda acceder a los archivos de instalación.

$ sudo chown -R www-data: /var/www/html/seusite.com

### 7\. Configuración de Nginx para WordPress

Ahora necesitamos configurar Nginx para reconocer nuestro dominio y la instalación de WordPress. Para ello crearemos un archivo en la carpeta `/etc/nginx/sites-available` con el nombre de nuestro dominio. Con tu editor favorito, nano en mi caso, crea el archivo.

$ sudo nano /etc/nginx/sites-available

Copie y pegue el siguiente contenido.

server{
 
        listen 80;
        listen \[::\]:80;
        server\_name seusite.com www.seusite.com;
 
        root /var/www/seusite.com;
        index index.php;
         
        # Archivos de Log
        access\_log /var/log/nginx/seusite.com.access.log;
        error\_log /var/log/nginx/seusite.com.error.log;
        # Creamos la configuración para el Favicon básico
        location = /favicon.ico {
           try\_files /favicon.ico @empty;
           access\_log off;
           log\_not\_found off;
           expires max;
        }
        # Configuración para el robots.txt para los buscadores
        location = /robots.txt {
           allow all;
           log\_not\_found off;
           access\_log off;
           try\_files $uri /index.php?$args;
        }
        # Configuración para ejecutar la instalación de WordPress
        location / {
           try\_files $uri $uri/ /index.php?$args;
        }
        # Incluimos la configuración de FastCGI
        location ~ \\.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi\_pass unix:/var/run/php/php7.4-fpm.sock;
        }
        # Añadimos una configuración de caché para los archivos de imagen, css y javascript
        location ~\* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
                 expires max;
                log\_not\_found off;
        }
 
}

Ahora crea un acceso directo (enlace simbólico) a este archivo recién creado nuestro.

$ sudo ln -s /etc/nginx/sites-available/seusite.com /etc/nginx/sites-enabled/

Ahora reinicie Nginx para que se aplique la nueva configuración del sitio.

$ sudo systemctl restart nginx

## 8\. Instalar Let's Encrypt y Generar el certificado SSL

En este paso ya necesita haber configurado la señal de su dominio a su servidor, necesitaremos que el servidor ya sea accesible por Internet público. Instalar y configurar [Certbot](https://certbot.eff.org/), generará y configurará automáticamente el certificado en la instalación de Nginx.

$ sudo add-apt-repository ppa:certbot/certbot
 
$ sudo apt install python-certbot-nginx
 
$ sudo certbot --nginx -d seusite.com -d www.seusite.com

Aparecerá un breve cuestionario, aceptará los términos y responderá a todas las preguntas cuidadosamente. En el último paso elegir para redirigir todo el tráfico HTTP a HTTPS, se encargará de configurar la redirección automáticamente.

### 9\. Configuración de WordPress

Si todo salió bien, ahora puedes acceder a la instalación de WordPress en tu navegador escribiendo tu dominio en el caso de este tutorial **`https://seusite.com`**. Ahora es muy simple, sólo tienes que seguir y responder al cuestionario de instalación de WordPress, informar a la base de datos, usuario y contraseña que configuramos en el paso 4.

Ahora solo tienes que aprovechar tu nueva y optimizada instalación de WordPress. Una vez configurado, utilice [plugins de caché](http://marquesfernandes.com/melhores-plugins-de-cache-para-wordpress-gratuitos-2020/) que tengan compatibilidad de configuración con Nginx para optimizar aún más la velocidad de su sitio.
