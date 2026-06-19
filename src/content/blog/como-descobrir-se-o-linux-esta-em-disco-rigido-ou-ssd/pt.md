---
title: Como descobrir se o Linux está em Disco Rígido ou SSD
description: Imagine a seguinte situação. Você precisa descobrir porque o seu
  notebook está devagar, ou até mesmo uma instalação de um banco de dados na
  nuvem. Você lembra de um artigo que você leu que mostrava a diferença que o
  SSD faz na performance do seu computador, mas como descobrir?
date: 2020-07-10T20:51:17.000Z
lang: pt
translationKey: como-descobrir-se-o-linux-esta-em-disco-rigido-ou-ssd
slug: como-descobrir-se-o-linux-esta-em-disco-rigido-ou-ssd
category: desenvolvimento
tags:
  - linux
  - ubuntu
  - debian
  - sdd
  - drive
wpId: 8437
canonicalPath: /desenvolvimento/como-descobrir-se-o-linux-esta-em-disco-rigido-ou-ssd/
needsReview: false
updated: 2020-07-10T20:52:54.000Z
---

Imagine a seguinte situação. Você precisa descobrir porque o seu notebook está devagar, ou até mesmo uma instalação de um banco de dados na nuvem. Você lembra de um artigo que você leu que mostrava a diferença que o SSD faz na performance do seu computador, mas como descobrir?

A partir da versão **2.6.29** do Kernel , os sistemas operacionais Linux podem detectar automaticamente o SSD. Existem algumas maneiras de descobrir se o disco é SSD ou HDD.

#### Método 1 - Verifique se o disco é rotacional

Como você já deve saber, a tradicional **unidade de disco rígido (HDD)** armazena os dados em um disco circular conhecido como **prato** . Quando o disco gira, a cabeça de leitura / gravação em movimento acessa os dados. Quanto mais rápido o disco gira, mais rápido o disco rígido funciona.

Por outro lado, o **Solid State Drive (SDD)** é uma tecnologia de armazenamento moderna e um tipo mais rápido de disco que armazena os dados em chips de memória flash acessível instantaneamente. Ao contrário dos HDDs tradicionais, os SSDs não possuem partes móveis e os **SSDs não giram** .

Portanto, se você deseja descobrir se o disco instalado é SSD ou HDD normal, verifique se o disco é rotacional usando o seguinte comando:

$ cat /sys/block/sda/queue/rotational

Se a saída for **1** , o disco é HDD. Se a saída for **0** (zero), o disco é SDD. Porque, os SSDs não serão rotacionados. Portanto, a saída deve ser zero se você tiver SSD no seu sistema.

Cada unidade possui um diretório em **/ sys / class / block /** location. Portanto, você também pode verificar os detalhes de outras unidades.

$ cat /sys/block/sdb/queue/rotational

#### Método 2 - usando o comando lsblk

O comando **lsblk** lê o sistema de arquivos **sysfs** e o **udev db** para reunir informações sobre todos os dispositivos de bloco disponíveis ou especificados. O comando lsblk faz parte do pacote **util-linux** e vem pré-instalado com a maioria das distribuições Linux.

Caso o comando lsblk não esteja disponível, instale o pacote util-linux usando o gerenciador de pacotes da sua distribuição.

Por exemplo, em sistemas baseados em Arch, você pode instalá-lo usando o comando:

$ sudo pacman -S util-linux

Em sistemas baseados no Debian:

$ sudo apt install util-linux

Em sistemas baseados em RPM:

$ sudo yum install util-linux

No openSUSE:

$ sudo zypper install util-linux

Agora, encontre se o disco é SSD ou HDD usando o comando:

$ lsblk -d -o name,rota

**Saída de amostra:**

NAME ROTA
loop0 1
loop1 1
loop2 1
loop3 1
loop4 1
loop5 1
loop6 1
**sda 1** 
sr0 1

Aqui, "rota" significa **dispositivo de rotação** . Se você obtiver o valor de rota na saída acima como **1** , o disco será HDD. Se o valor for **0 (zero)** , o disco será SSD.

#### Método 3 - Usando ferramentas de monitoramento SMART

A outra maneira de descobrir se o disco é SSD ou HDD está usando o comando **smartctl** . O smartctl faz parte do pacote de ferramentas de monitoramento SMART, usado para controlar e monitorar os discos rígidos ATA e SCSI habilitados para SMART.

Para instalar as ferramentas de monitoramento SMART no Arch Linux e suas variantes, execute:

$ sudo pacman -S install smartmontools

No Debian, Ubuntu:

$ sudo apt install smartmontools

No RHEL, CentOS:

$ sudo yum instala smartmontools

No openSUSE:

$ sudo zypper install smartmontools

Após instalar o pacote smartmontools, execute o seguinte comando para descobrir se o disco é SSD ou HDD:

$ sudo smartctl -a / dev / sda | grep 'Taxa de rotação'

Se o disco for SSD, você obterá uma saída como abaixo.

Rotation Rate: Solid State Device

Se o disco for HDD, você obterá esta saída:

Rotation Rate: 5400 rpm

#### E se houver vários discos?

E se eu tiver mais de um disco? E ambos os dicos são do mesmo tamanho e fabricante? Não sei em qual disco meu Linux está instalado. Nesse caso, basta encontrar em qual disco o sistema de arquivos raiz está localizado usando o seguinte comando:

$ df / -h

**Saída de amostra:**

Tamanho do Sistema de Arquivos Utilizado Disponível Uso% Montado em
 **/ dev / sda1**        458G 341G 95G 79% /

Como alternativa, use o comando **lshw** para encontrar mais detalhes sobre os discos:

$ sudo lshw -short -C disk

**Saída de amostra:**

Caminho H / W Classe de dispositivo Descrição
==================================================== ==================
Multi-Card de disco /0/100/1d/1/1/6/0.0.0 / dev / sdb
/0/100/1d/1/1/6/0.0.0/0 / dev / sdb disk           
**/0/1/0.0.0 / dev / sda disk 500GB ST9500325AS** 
/0/2/0.0.0 / dev / cdrom disk DVD + -RW DS-8A8SH

Como você vê na saída acima, meu sistema de arquivos raiz está instalado em **/ dev / sda** . Agora siga qualquer um dos métodos acima para descobrir se o disco é HDD ou SSD.

**Nota:**

Em alguns novos laptops como o **Lenovo ideapad s240** , você verá um nome de dispositivo diferente, por exemplo, **nvme0n1** . Vamos ver a lista de dispositivos de bloco disponíveis usando o comando:

$ ls /sys/block

**Saída de amostra:**

laço0 laço11 laço14 laço17 laço2 laço3 laço6 laço9
laço1 laço12 laço15 laço18 laço20 laço4 laço7   **nvme0n1** 
laço10 laço13 laço16 laço19 laço21 laço5 laço8

Vamos descobrir em qual disco o sistema de arquivos raiz está localizado:

$ df / -h

**Saída de amostra:**

Tamanho do Sistema de Arquivos Utilizado Disponível Uso% Montado em
 **/ dev / nvme0n1p6**   96G 34G 58G 34% /

Como você vê nas saídas acima, não há **sda** ou **sdb** . Não entre em pânico! Isto é normal. O nome do dispositivo **/ dev / nvme** … indica os “discos” mais recentes do **NVMe** .

Aqui, **/ dev / nvme0n1** é equivalente a **/ dev / sda** . Portanto, **/ dev / nvme0n1p6** é equivalente a **/ dev / sda6** .

**Referência:**  
[https://www.ostechnix.com/how-to-find-if-the-disk-is-ssd-or-hdd-in-linux/](https://www.ostechnix.com/how-to-find-if-the-disk-is-ssd-or-hdd-in-linux/)
