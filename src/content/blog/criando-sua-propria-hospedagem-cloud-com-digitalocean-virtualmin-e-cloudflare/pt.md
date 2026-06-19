---
title: Criando sua própria hospedagem cloud com Digitalocean, Virtualmin e Cloudflare
description: Você já pensou conseguir criar sua própria hospedagem cloud de
  sites? E se eu te falar que não só é possível, como barato também? Confira
  como criar sua própria hospedagem cloud com Digitalocean, Virtualmin e
  Cloudflare!
date: 2020-02-25T00:49:58.000Z
lang: pt
translationKey: criando-sua-propria-hospedagem-cloud-com-digitalocean-virtualmin-e-cloudflare
slug: criando-sua-propria-hospedagem-cloud-com-digitalocean-virtualmin-e-cloudflare
category: desenvolvimento
tags:
  - ubuntu
  - servidor
  - tutorial
  - hospedagem
  - cloudflare
  - virtualmin
  - digitalocean
  - webmin
wpId: 5825
canonicalPath: /desenvolvimento/criando-sua-propria-hospedagem-cloud-com-digitalocean-virtualmin-e-cloudflare/
needsReview: false
updated: 2020-08-09T17:06:35.000Z
---

Quando comecei como Freelancer não manjava nada sobre hospedagem de sites e muito menos servidores. DNS? Isso é uma doença? Tudo parecia tão complicado que me levou a optar por serviços como [UOL Host](https://uolhost.uol.com.br/#rmcl), [Locaweb](https://www.locaweb.com.br/) e [Hostgator](https://www.hostgator.com.br/17815.html), e com eles fiquei e penei por muito tempo...

**Disclaimer 1:** Se você é um usuário leigo que está procurando montar um blog ou um site institucional para sua empresa e não tem muito conhecimento técnico, não pense duas vezes, opte por um desses serviços! Eu pessoalmente recomendo a [Hostgator](https://www.hostgator.com.br/17815.html), eles tem um painel administrativo intuitivo e o suporte é relativamente bom...

**Disclaimer 2**: Hospedagem de site pode ser um tanto ambiguo, por isso esclarecer que nesse artigo quando me refiro a "hospedagem de site": Sistema para criar e administrar sites em PHP; Criação e configuração de conta de usuários, e-mail, FTP; Algumas outras funcionalidades de hospedagens padrões encontradas no mercado.

**Disclaimer 3:** Se você vai montar e oferecer serviços de hospedagem, pense e pondere sobre todos os pontos positivos e principalmente negativos de assumir essa responsabilidade: Você terá que lidar e controlar o uso de recursos de máquina pelos seus clientes, spam no IP do seu servidor, acesso e criação de contas, possíveis downtime, gerenciar back-ups e muito mais... É um trabalho e tanto!

Normalmente eu sou contra reinventar a roda e sempre que possível priorizo o uso de serviços prontos que facilitem minha vida, desde que eles atendam minhas necessidades... Esse não foi o caso e depois de muitos problemas em situações “avançadas” onde precisava otimizar alguma configuração, resolvi buscar uma solução que me desse mais autonomia.

## Serviços utilizados

-   [Cloudflare](https://cloudflare.com/): Talvez um dos serviços “freemiuns“ mais completos que já utilizei, aqui gerencio todas as minhas configurações DNS e posso contar com muitos outros serviços nativos gratuitos muito úteis: Segurança e prevenção de DDOS, Content Delivery Network (CDN), Cache e otimizações de performance... 

-   [DigitalOcean](https://m.do.co/c/6bc37502c1d9): Toda a minha "infraestrutura cloud" está aqui, por R$22/mês ($5 doletas/mês, cotação de 24/02/2020) você consegue subir um servidor que aguenta tranquilamente entre 10~15 sites institucionais que não recebam muita visitas, e tem toda a liberdade também de escalar sob demanda, com apenas um click você consegue aumentar seus recursos de máquina, sem nenhuma configuração extra necessária! Outro positivo está no suporte deles, aaaa o suporte da DigitalOcean <3, é maravilhoso! (DigitalOcean, me patrocina!)
-   [Virtualmin](https://www.virtualmin.com/): O nosso sistema administrativo da hospedagem, software opensource, lindo, extremamente completo e configurável. Ele que fará toda a magia de instalar, configurar e administrar todos os serviços necessários para a nossa hospedagem, Apache + PHP para sites dinâmicas, serviço de e-mail, configuração de acesso de FTP, criação e administração de contas de usuário e email, e muito mais.

## Etapas

## Criação do Servidor Cloud

Antes de tudo, crie sua conta na [DigitalOcean](https://m.do.co/c/6bc37502c1d9) (dãã).

Vamos criar um servidor com o sistema operacional Ubuntu Server 18.04, na [DigitalOcean](https://m.do.co/c/6bc37502c1d9), vamos utilizar o Droplet mais básico para teste:

![](./2020-02-screenshot-cloud.digitalocean.com-2020.02.24-22_54_10.png)

Selecione agora o plano, para esse artigo vou utilizar a máquina mais barata, selecione conforme sua necessidade, atualmente utilizo um Droplet de 15 dolares para hospedar meu blog e mais 14 sites, sendo 4 deles com mais de 20k acessos mensais:

![](./2020-02-screenshot-cloud.digitalocean.com-2020.02.24-22_55_24.png)

Agora vamos selecionar em qual região desejamos que nosso Droplet seja criado, vamos também configurar alguns serviços opcionais:

![](./2020-02-screenshot-cloud.digitalocean.com-2020.02.24-23_03_29.png)

**Private networking:** Cria um IP local, útil para se no futuro você desejar criar um cluster de hospedagem, assim poderá utilizar um IP interno com baixa latência.  
**IPv6**: Habilita o suporte para o novo protoloco da internet, o IPv6  
**Monitoring:** Instala alguns pacotes de monitoramento da DigitalOcean, útil para você acompanhar o estado da sua máquina direto do painel de controle da DO.

Agora uma etapa muito importante da criação, primeiro vamos selecionar o método de autenticação com a máquina virtual, o modo mais seguro é através das chaves SSH, mas para facilitar vamos escolher o método "One-time password", ele enviará uma senha temporária para nosso e-mail. Em hostname, vamos colocar qual domínio queremos que nossa máquina seja responsável, importante usar algum nome intuitivo pois isso aparecerá em alguns lugares, como em headers no envio de emails, e também vamos utilizar ele como o caminho para o nosso painel administrativo:

![](./2020-02-screenshot-cloud.digitalocean.com-2020.02.24-23_04_17.png)

Clique em criar e espere a conclusão do processo. Quando a criação for concluída com sucesso, um e-mail será enviado com a sua senha root temporário.

## Configuração do servidor e apontamentos DNS - Parte 1

Antes de tudo, crie sua conta na Cloudflare (dãã).

Primeiro você precisa adicionar e validar o seu domínio no Cloudflare, você precisa ter acesso as configurações avançadas do domínio, seja na sua conta do Registro.br ou no revendedor que você tenha comprado o domínio. A Cloudflare tem um passo a passo bem intuitivo então achei redundante escrever, se alguém tiver alguma dúvida deixa nos comentários que eu ficarei feliz em ajudar.

Vamos então configurar o nosso domínio `hospedagem-teste.marquesfernandes.com` para apontar para o IP da nossa máquina recém criada:

![](./2020-02-screenshot-cloud.digitalocean.com-2020.02.24-23_11_26.png)

### Configurando o apontamento A - IPv4

Vamos criar primeiro apontamento do tipo `A` para o nosso `IPv4`, lembre-se de desativar o *Proxy Status* por enquanto:

![Configurando apontamento IPv4](./2020-02-screenshot-dash.cloudflare.com-2020.02.24-23_15_22.png)

### Configurando apontamento AAAA - IPv6

Agora vamos criar o apontamento do tipo `AAAA` para o nosso `IPv6`, lembre-se de desativar o *Proxy Status* por enquanto:

![Configurando apontamento IPv6](./2020-02-screenshot-dash.cloudflare.com-2020.02.24-23_16_38.png)

## Instalação e configuração do Virtualmin

Vamos testar nosso configuração de DNS logando via SSH em nossa máquina utilizando o usuário root e a senha enviada para o e-mail. Se você estiver no Windows poderá usar o PowerShell para isso, ou algum [emulador de terminal](http://marquesfernandes.com/melhores-emuladores-de-terminal-para-windows/) que possua a funcionalidade de SSH.

\# ssh root@hospedagem-teste.marquesfernandes.com

Atenção, você precisará colocar a senha enviada para o seu e-mail duas vezes, e depois inserir uma nova senha segura duas vezes, lembre-se de criar uma senha bem segura, afinal muitas coisas importantes suas e talvez de clientes estarão nesse servidor:

![Instalação Virtualmin - P1](./2020-02-screenshot-nimbus-capture-2020.02.24-23_28_06.png)

Instalação Virtualmin - P1

Antes de mais nada vamos atualizar qualquer pacote de nossa recém criada máquina virtual, isso instalará atualizações de segurança e sistema recentes me nosso sistema:

\# sudo apt-get update
# sudo apt-get upgrade

A instalação do Virtualmin é muito simples, precisamos apenas baixar o Shell Script de instalação oficial:

\# wget http://software.virtualmin.com/gpl/scripts/install.sh

Agora execute como root o script de instalação:

\# sudo /bin/sh install.sh

Fique atento pois algumas perguntas serão feitas durante o processo de instalação:

![Instalação Virtualmin - P2](./2020-02-screenshot-nimbus-capture-2020.02.24-23_48_13.png)

Instalação Virtualmin - P2

Você provavelmente vai querer responder sim a todas as perguntas. A instalação pode demorar alguns minutos:

![Instalação Virtualmin - P3](./2020-02-screenshot-nimbus-capture-2020.02.24-23_55_35.png)

Instalação Virtualmin - P3

Agora para testar nossa instalação, precisamos acessar em nosso navegador o seguinte endereço `https://hospedagem-teste.marquesfernandes.com:10000`. Substitua a URL pero endereço da sua hospedagem e mantenha a porta padrão `10000`, você provavelmente vai encontrar o erro de privacidade, isso porque ainda não configuramos o nosso certificado SSL:

![Google Not Private](./2020-02-screenshot-nimbus-capture-2020.02.25-00_06_28.png)

Prossiga para o login, aqui vamos utilizar o usuário `root` e a senha definida para acesso da máquina na primeira etapa do tutorial:

![Virtualmin -  Login](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-00_07_10.png)

Se tu der certo, você deverá ver o painel administrativo do Virtualmin como o abaixo:

![Virtualmin - Painel Administrativo](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-00_08_15.png)

Em nosso primeiro login, o Virtualmin fará uma configuração inicial baseada em diversas perguntas, leia com atenção e responde conforme a sua necessidade. Agora eu recomendo que você tire um tempo para ler a documentação do Virtualmin/Webmin, para que você não fique confuso, Virtualmin é o sistema que administra um ou mais Webmin, esse é a parte do cliente (site, e serviços). Existem diversas configurações que você vai querer ajustar, criar templates de conta de cliente, com limites e serviços diferentes, e muito mais.

## Criação da conta cliente no Virtualmin

Agora vamos criar uma conta de cliente em nossa instalação do Virtualmin, ou seja, vamos criar um site e configurar todas as etapas mínimas para que ele funcione.

### Criando o servidor

Vamos criar um servidor para o site `site-teste.marquesfernandes.com`, com o template de configuração de servidor padrão e o plano de conta também. Vamos habilitar a funcionalidade "Setup SSL Website", para realizar a configuração do site em *Https* também:

![Criação do servidor](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-00_24_22.png)

Criação do servidor

### Criando um novo usuário e conta de e-mail

Vamos agora criar um usuário/conta de e-mail teste em nosso novo servidor.

![Criando um novo usuário e conta de e-mail](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-00_32_40.png)

Criando um novo usuário e conta de e-mail

## Configuração do servidor DNS e apontamentos - Parte 2

Agora vamos configurar os apontamentos DNS para o nosso novo site criado `site-teste.marquesfernandes.com`, vamos adicionar entradas tanto para o nosso site, quanto para acesso ao servidor de FTP e e-mail. Para isso vamos encontrar todas as configurações básicas de DNS do nosso servidor e replicar-las no Cloudflare:

![Configuração DNS](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-00_51_01.png)

Configuração DNS

Lembrando que, as configurações de FTP e MX não devem ter o Proxy Status habilitado no Cloudflare, pois o nosso apontamento precisa refletir o IP real e essa opção serve para mascarar o IP real do apontamento, muito útil se você deseja esconder e utilizar os serviços do Cloudflare, vamos deixar essa opção habilitada para todos os demais apontamentos. Após configurar todos os DNS necessários, hora de testar se nosso site está de pé:

![](./2020-02-screenshot-nimbus-capture-2020.02.25-00_58_41.png)

Voila, isso significa que nosso apontamento e site estão funcionando, como não temos nenhum arquivo html ou sistema instalado, a mensagem padrão do sistema é de "Proibido".

## Gerando o certificado SSL com [Let's Encrypt](https://letsencrypt.org/pt-br/getting-started/)

Agora que temos os nosso apontamentos funcionando, vamos configurar o nosso site para usar o certificado SSL, assim conseguiremos acessar nosso site pelo protocolo seguro `https://` .

A [Let’s Encrypt](https://letsencrypt.org/pt-br/getting-started/) é uma autoridade certificadora (AC) gratuita, automatizada e aberta que opera em prol do benefício público. É um serviço provido pela [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/).

![Gerando um certificado SSL válido - Parte 1](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-01_09_38.png)

Gerando um certificado SSL válido - Parte 1

Simples assim, se tudo ocorrer conforme esperado você terá um certificado válido e instalado e já poderá acessar seu site usando o protocolo seguro.

![Gerando um certificado SSL válido - Parte 2](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-01_11_57.png)

Gerando um certificado SSL válido - Parte 2

Vamos testar acessando o nosso site `https://site-teste.marquesfernandes.com`:

![](./2020-02-image-11.png)

## Subindo conteúdo para o site

Bom, agora que temos tudo configurado e funcionando vamos subir por FTP uma página inicial para o nosso site, será uma página em PHP bem simples apenas para testar:

<!-- index.html -->
<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Marques Fernandes - Virtualmin</title>
</head>
<body>
  <h1><?php echo "A data de hoje: " . date("d/m/Y"); ?></h1>
</body>
</html>

Vamos subir o nosso arquivo `index.php`para o nosso servidor via FTP pelo host `ftp.site-teste.marquesfernandes.com`, antes precisamos criar um usuário com acesso ao FTP raiz do site:

![Criando um usuário FTP](./2020-02-screenshot-hospedagem-teste.marquesfernandes.com_10000-2020.02.25-01_31_06.png)

Criando um usuário FTP

Agora podemos logar com o usuário e senha usando o programa Filezilla para subir o nosso arquivo:

![Subindo conteúdo via FTP com Filezilla - Parte 1](./2020-02-screenshot-nimbus-capture-2020.02.25-01_35_16.png)

Subindo conteúdo via FTP com Filezilla - Parte 1

Se tudo der certo, ao acessar nosso site devermos ver a seguinte mensagem:

![Subindo conteúdo via FTP com Filezilla - Parte 2](./2020-02-screenshot-nimbus-capture-2020.02.25-01_35_16-1.png)

Subindo conteúdo via FTP com Filezilla - Parte 2

Bom, com esse tutorial você será capaz de criar sua própria hospedagem, e até revenda de hospedagem com um preço bem acessível. Essa foi a parte 1 da criação, em breve estarei escrevendo a parte 2 com algumas dicas importante para o seu servidor de e-mail, de manutenção do servidor e mais alguns tópicos relevantes que eu aprendi na raça após 5 anos administrando minhas próprias máquinas e hospedagem.

Se você tiver alguma dúvida ou gostaria de algum tutorial, deixe seu comentário! Ficarei feliz em tentar ajudar.
