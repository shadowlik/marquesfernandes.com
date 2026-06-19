---
title: O que é um arquivo .tar e como extrair/abrir no Linux e no Windows? - Tarball
description: Diminutivo do inglês "Tape Archive", às vezes chamado de tarball, é
  um arquivo no formato consolidado do Unix. Arquivos .tar são utilizados para
  consolidar arquivos e pastas em um só...
date: 2019-12-06T01:32:23.000Z
lang: pt
translationKey: o-que-e-um-arquivo-tar-e-como-extrair-abrir-no-linux-e-no-windows-tarball
slug: o-que-e-um-arquivo-tar-e-como-extrair-abrir-no-linux-e-no-windows-tarball
category: tecnologia
tags:
  - linux
  - windows
  - tar
  - tarball
  - gzip
  - 7zip
wpId: 6572
canonicalPath: /tecnologia/o-que-e-um-arquivo-tar-e-como-extrair-abrir-no-linux-e-no-windows-tarball/
needsReview: false
updated: 2020-08-09T17:07:36.000Z
---

Você provavelmente chegou até aqui porque se deparou com um arquivo de extensão **TAR** ou talvez porque não lembra qual a combinação louca de opções (**xzvf**) para extrair o arquivo no Linux.

Diminutivo do inglês *"Tape Archive"*, às vezes chamado de **tarball**, é um arquivo no formato consolidado do Unix. Arquivos **.tar** são utilizados para consolidar arquivos e pastas em um só, outro aspecto importante dos arquivos **.tar** é que eles mantém as informações do sistema de arquivos, como permissões de usuários, datas de modificação e todas as estruturas de diretório e por isso essa extensão se popularizou facilitando o compartilhamento de scripts e arquivos pela internet.

O formato **TAR** é muito comum em sistemas Linux e Unix, mas vale ressaltar que esse tipo de arquivo não possui compressão, para isso precisamos transformar em um arquivo **TGZ**, a também famosa extensão **.tar.gz**.

## Como abrir um arquivo .tar

Se você está no Linux essa é uma tarefa bem simples e não necessita de nenhum outro programa além do seu terminal:

\# Arquivo .tar
$ tar -xvf arquivo.tar #Extrair o conteúdo na pasta atual
$ tar -xvf arquivo.tar -C /tmp #Extrair o conteúdo na pasta /tmp
# Arquivo .tar.gz
$ tar -xzvf arquivo.tar.gz #Extrair o conteúdo na pasta atual
$ tar -xzvf arquivo.tar.gz -C /tmp #Extrair o conteúdo na pasta /tmp

Se você está no Windows, os arquivos TAR podem ser abertos com a maioria dos programas de zip/unzip. Duas ótimas opções para esse trabalho são os programas [7-Zip](https://www.7-zip.org/) e [PeaZip](https://www.peazip.org/).

## Como criar um arquivo .tar

No Linux a criação de arquivos **.tar** é tão simples quanto a extração. No comando abaixo vamos gerar o arquivo já comprimido com **gzip**, o que vai resultar em um arquivo **.tar.gz**. Note que adicionar a extensão .**gz** no final não é obrigatório mas é recomendado por ser uma boa prática para identificar e facilitar na hora da extração.

$ tar -czvf nome-arquivo.tar.gz /home/Downloads

No comando acima passamos a opção **\-czvf**, o que representa:

-   *\-c:* Criar um arquivo
-   *\-z:* Usar gzip para comprimir o arquivo
-   *\-v:* Habilitar o modo "verbose" para mostrar o progresso da criação do arquivo
-   *\-f:* Permite especificar um nome de arquivo diferente do nome da pasta

Agora se você está no Windows, a maneira menos complicada de criar o arquivo **.tar** precisamos utilizar alguma ferramenta gráfica como o 7-Zip:

1.  Selecione todos os arquivos e pastas que você deseja no seu arquivo **.tar**
2.  Clique no primeiro ícone da barra superior "Adicionar"

![7Zip](/wp-content/uploads/2019/12/image-3.jpg)

3.  Em "Formato do arquivo compactado" selecione **tar**
4.  Clique em Ok

![7Zip](/wp-content/uploads/2019/12/image-4.jpg)

No Windows o 7-Zip não permite realizar a geração do arquivo **TAR** e a compressão com **gzip** em uma etapa só, por isso precisamos de uma etapa adicional.

4.  Selecione o arquivo **.tar** recém criado
5.  Em "Formato do arquivo compactado" selecione **gzip**
6.  Clique em Ok

![7Zip](/wp-content/uploads/2019/12/image-5.jpg)
