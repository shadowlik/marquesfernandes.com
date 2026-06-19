---
title: Como Instalar o Wordpress com Nginx no Ubuntu
description: A instalação Wordpress é normalmente feita usando o Apache, mas
  existe uma alternativa muito boa a ele. O Nginx é um servidor web de código
  aberto, lançado em 2004, é um servidor web robusto, leve e muito poderoso!
date: 2020-08-01T20:24:37.000Z
lang: pt
translationKey: como-instalar-o-wordpress-com-nginx-no-ubuntu
slug: como-instalar-o-wordpress-com-nginx-no-ubuntu
category: tecnologia
tags:
  - wordpress
  - mysql
  - php
  - nginx
wpId: 8878
cover: ./2020-08-fikret-tozak-Zk-Ydz2IAs-unsplash.jpg
canonicalPath: /tecnologia/como-instalar-o-wordpress-com-nginx-no-ubuntu/
needsReview: false
updated: 2020-08-09T16:59:06.000Z
---

A instalação Wordpress é normalmente feita usando o [Apache](https://pt.wikipedia.org/wiki/Servidor_Apache), mas existe uma alternativa muito boa a ele. O [Ngi](https://pt.wikipedia.org/wiki/Nginx)[nx](https://pt.wikipedia.org/wiki/Nginx) é um servidor web de código aberto, lançado em 2004, é um servidor web robusto, leve e muito poderoso! Existem diversos benefícios de usar ele no lugar do Apache, vamos falar um pouco dos lados positivos e negativos dessa configuração. Neste tutorial você vai aprender a instalar, configurar e otimizar o Wordpress usando o Nginx como servidor web, [PHP 7.4](https://www.php.net/releases/7_4_0.php) e iremos também gerar o certificado *SSL* usando o [letsencrypt](https://letsencrypt.org/) para habilitar o [protocolo *HTTPS*](http://marquesfernandes.com/o-que-e-http/).

## Porque usar o Nginx?

Existem diversos motivos para usar o Nginx, no meu caso decidi utilizar porque já tinha uma instalação para uma outra aplicação web com Nginx, para economizar recursos de máquinas decidi testar essa configuração de *Wordpres + Nginx* e fiquei muito feliz com o resultado. Outros motivos para utilizar: Ele suporta proxy reverso, cache embarcado muito eficiente ([FastCGI](https://klauslaube.com.br/2012/11/02/entendendo-o-cgi-fastcgi-e-wsgi.html)), streaming de mídia, balanceamento de carga e muito mais. Ele foi desenhado para ter um baixo consumo de memória, muitas conexões simultâneas e otimizado para entregar arquivos estáticos como imagens e vídeos.

## Pré-requisitos

-   Servidor Ubuntu 18.04/20.04 com acesso Root e um IP público
-   Um domínio para configurar o acesso e emitir o certificado SSL

## Como instalar o Wordpress com Nginx

Vamos para a parte técnica, acesse por ssh a máquina que você vai configurar e siga as próximas etapas:

### 1\. Atualizando o Sistema

Primeiro atualize as referências dos pacotes do sistema.

$ sudo apt update

Agora atualize os programas para a última versão (Esse passo é opcional mas recomendado).

$ sudo apt upgrade

### 2\. Instalando o Nginx

Vamos instalar o Nginx direto do repositório do Ubuntu.

$ sudo apt install nginx

Esse passo pode demorar um pouco, ele irá instalar e configurar o Nginx na sua máquina, ao finalizar verifique se o serviço está rodando.

$ sudo systemctl status nginx

### 3\. Configurando o Firewall

Se você estiver em alguma máquina que esteja com o UFW habilitado, rode o seguinte comando para adicionar o Nginx como confiável.

$ sudo ufw allow 'Nginx Full'

### 4\. Instalando e Configurando o Banco de Dados MySQL

Nossa instalação Wordpress vai precisar de um banco de dados, ele pode ser tanto o MariaDB como o MySQL, neste tutorial utilizaremos a última opção.

$ sudo apt install mysql-server

Verifique se a instalação foi bem sucedida.

$ sudo systemctl status mysql

Agora precisamos entrar por linha de comando no MySQL para criar o banco de dados e usuário para o Wordpress.

$ mysql -u root -p

Com o comando abaixo vamos criar um banco de dados chamado `wordpress` com o charset utf8.

mysql> CREATE DATABASE wordpress CHARACTER SET utf8 COLLATE utf8\_general\_ci;

Agora precisamos criar um usuário e dar permissão a ele para acessar o nosso recém criado banco de dados. Altere `SeuUsuario` para o nome de usuário desejado e a `SuaSenha` também, lembre-se de usar uma senha bem forte.

mysql> GRANT ALL ON wordpress.\* TO SeuUsuario @'localhost' IDENTIFIED BY 'SuaSenha';

Renove os privilégios do MySQL e saia da sua linha de comando.

mysql> FLUSH PRIVILEGES;
mysql> EXIT;

Agora vamos executar uma verificação de segurança do MySQL, esse passo é opcional mas extremamente recomendado.

$ sudo mysql\_secure\_installation

### 5\. Instalando o PHP 7.4

Primeiro execute os comandos abaixo para atualizar o sistema e adicionar e configurar o ppa do PHP em seu servidor.

$ sudo apt install software-properties-common
 
$ sudo add-apt-repository ppa:ondrej/php
 
$ sudo apt update

Agora vamos instalar o PHP 7.4 e todos os plugins necessários para o WordPress.

$ sudo apt install php7.4-fpm php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache php7.4-soap php7.4-zip php7.4-intl unzip -y

Verifique se a instalação foi feita com sucesso.

$ php-fpm7.4 -v

Você pode alterar algumas configurações importantes, como tamanho máximo de upload e tempo de execução do PHP.

sudo nano /etc/php/7.4/fpm/php.ini

file\_uploads = On
allow\_url\_fopen = On
upload\_max\_filesize = 100M 
post\_max\_size = 64M 
memory\_limit = 256M 
max\_execution\_time = 360 
max\_input\_vars = 3000 
max\_input\_time = 1000

### 6\. Instalando o WordPress

Primeiro vamos criar a pasta onde nossa instalação WordPress ficará.

$ sudo mkdir -p /var/www/html/seusite.com

Navega até a pasta e baixe a última versão do WordPress.

$ cd /var/www/html/seusite.com && wget https://wordpress.org/latest.tar.gz

Agora precisamos extrair e mover os arquivos para a raiz da pasta desejada.

$ tar xf latest.tar.gz && mv wordpress/\* ../

Agora adiciona as permissões necessárias para o servidor web conseguir acessar os arquivos da instalação.

$ sudo chown -R www-data: /var/www/html/seusite.com

### 7\. Configurando o Nginx para o WordPress

Agora precisamos configurar o Nginx para reconhecer o nosso domínio e instalação WordPress. Para isso vamos criar um arquivo na pasta `/etc/nginx/sites-available` com o nome de nosso domínio. Com o seu editor preferido, nano no meu caso, crie o arquivo.

$ sudo nano /etc/nginx/sites-available

Copie e cole o seguinte conteúdo.

server{
 
        listen 80;
        listen \[::\]:80;
        server\_name seusite.com www.seusite.com;
 
        root /var/www/seusite.com;
        index index.php;
         
        # Arquivos de Log
        access\_log /var/log/nginx/seusite.com.access.log;
        error\_log /var/log/nginx/seusite.com.error.log;
        # Criamos a configuração para o Favicon básico
        location = /favicon.ico {
           try\_files /favicon.ico @empty;
           access\_log off;
           log\_not\_found off;
           expires max;
        }
        # Configuração para o robots.txt para os buscadores
        location = /robots.txt {
           allow all;
           log\_not\_found off;
           access\_log off;
           try\_files $uri /index.php?$args;
        }
        # Configuração para executar a instalação do WordPress
        location / {
           try\_files $uri $uri/ /index.php?$args;
        }
        # Incluimos a configuração do FastCGI
        location ~ \\.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi\_pass unix:/var/run/php/php7.4-fpm.sock;
        }
        # Adicionamos uma configuração de cache para os arquivos de imagem, css e javascript
        location ~\* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
                 expires max;
                log\_not\_found off;
        }
 
}

Agora crie um atalho (symbolic link) para esse nosso arquivo recém criado.

$ sudo ln -s /etc/nginx/sites-available/seusite.com /etc/nginx/sites-enabled/

Agora reinicie o Nginx para que a nova configuração do site seja aplicada.

$ sudo systemctl restart nginx

## 8\. Instalando o Let's Encrypt e Gerando o Certificado SSL

Nessa etapa você já precisa ter configurado o apontamento do seu domínio para o seu servidor, vamos precisar que o servidor já esteja acessível pela internet pública. Instale e configure o [Certbot](https://certbot.eff.org/), ele vai gerar e configurar automaticamente o certificado na instalação do Nginx.

$ sudo add-apt-repository ppa:certbot/certbot
 
$ sudo apt install python-certbot-nginx
 
$ sudo certbot --nginx -d seusite.com -d www.seusite.com

Um pequeno questionário aparecerá, aceite os termos e responde todas as perguntas com cuidado. Na última etapa opte por redirecionar todo tráfego HTTP para HTTPS, ele irá se encarregar de configurar o redirecionamento automaticamente.

### 9\. Configurando o WordPress

Se tudo deu certo, você poderá agora acessar a instalação WordPress em seu navegador, digitando o seu domínio, no caso deste tutorial **`https://seusite.com`**. Agora é muito simples, basta seguir e responder o questionário de instalação do WordPress, informar o banco de dados, o usuário e a senha que configuramos na etapa 4.

Agora é só aproveitar a sua nova e otimizada instalação WordPress. Depois de configurado, utilize [plugins de cache](http://marquesfernandes.com/melhores-plugins-de-cache-para-wordpress-gratuitos-2020/) que tenham compatibilidade de configuração com o Nginx para otimizar ainda mais a velocidade do seu site.
