---
title: "boringproxy: Como expor serviços locais publicamente na internet"
description: Você já precisou compartilhar algum serviço, banco de dados, API ou
  site que está sendo desenvolvido na sua máquina local publicamente na internet
  com alguém...
date: 2023-01-02T09:56:58.000Z
lang: pt
translationKey: boringproxy-como-expor-servicos-locais-publicamente-na-internet
slug: boringproxy-como-expor-servicos-locais-publicamente-na-internet
category: tecnologia
tags:
  - cloudflare
  - google-cloud
  - ssh-tunnel
  - proxy
  - boringproxy
wpId: 12761
canonicalPath: /tecnologia/boringproxy-como-expor-servicos-locais-publicamente-na-internet/
needsReview: false
updated: 2023-01-02T09:57:01.000Z
---

Você já precisou compartilhar algum serviço, banco de dados, API ou site que está sendo desenvolvido na sua máquina local publicamente na internet com alguém? Existem maneiras de compartilhar seus projetos sem precisar necessariamente subir ela em algum servidor ou cloud.

Há algum tempo eu escrevi o artigo [Túnel/Encaminhamento de Portas com SSH – Ubuntu/Debian](http://marquesfernandes.com/desenvolvimento/tunel-encaminhamento-de-portas-com-ssh-ubuntu-debian/) que explica exatamente como fazer isso utilizando apenas o [SSH](https://pt.wikipedia.org/wiki/Secure_Shell), porém para muitos isso pode não ser o suficiente ou de difícil gestão/manutenção. Existem alguns serviços pagos, como o [ngrok](https://ngrok.com/), mas seu pacote gratuito é bem limitado e o pacote mais barato acaba sendo caro para simples projetos pessoais (algo em torno de 20 USD mês), mas não se preocupe, existem soluções open source para isso.

O desenvolvedor Anders Pitman criou um repositório muito legal de [alternativas para o ngrok](https://github.com/anderspitman/awesome-tunneling), nesse tutorial vamos focar em um serviço específico, o [**boringproxy**](https://boringproxy.io/).

## Casos de uso

Veja abaixo alguns casos de uso para esse tipo de túnel.

-   Você está desenvolvendo uma aplicação local e precisa expor sua API publicamente para compartilhar com alguém ou simplesmente utilizar alguma ferramenta que precise ter acesso a uma URL pública
-   Você está estruturando um banco de dados e gostaria de conectar para desenvolver em alguma ferramenta como o [Retool](https://retool.com/)
-   Você está criando uma aplicação frontend e gostaria de realizar testes com o [Google PageSpeed](https://pagespeed.web.dev/) ou alguma ferramenta de benchmark e para isso precisa que elas consigam encontrar seu projeto publicamente na internet

Esses são alguns de inúmeros casos de uso, e o mais legal é que com o boringproxy podemos expor toda nossa infraestrutura de uma vez, banco de dados, API, frontend e qualquer outro serviço que queremos expor na internet.

## [boringproxy](https://boringproxy.io/)

[boringproxy](https://boringproxy.io/) é uma combinação de um proxy reverso e um gerenciador de túnel.

O que isso significa é que, se você tiver um serviço auto-hospedado (API, MySQL, Postgres, Redis, Frontend em React, Vue, Angular, ...) em execução em uma rede local e privada, o boreproxy visa fornecer a maneira mais fácil para expor com segurança (ou seja, com suporte a HTTPS e até proteção por senha) esse servidor à Internet, para que você possa acessá-lo de qualquer lugar.

## Começando nossa infraestrutura

Para esse tutorial vamos precisar de basicamente um computador rodando alguns serviços locais, um servidor com IP público para internet e um domínio.

### Servidor com IP público

Para o servidor com IP público vamos utilizar o Google Cloud Platform pois ela nos oferece uma máquina no [nível gratuito](https://cloud.google.com/free/docs/free-cloud-features#compute), ou seja, não vamos precisar gastar um tustão.

Primeiro você precisa criar uma conta no [GCP](https://cloud.google.com/). Após a conta criada, vamos criar uma máquina virtual que se enquadre no nível gratuito, que no caso seria uma *`e2-micro`* em alguma das regiões: `us-west1; us-central1; us-east1`.

![Acessando o menu do Compute Engine > Instâncias de VM](/wp-content/uploads/2022/12/image-6-1024x574.png)

Acessando o menu do Compute Engine > Instâncias de VM

Primeiro precisamos acessar no menu lateral o serviço de Compute Engine > Instâncias de VM.

![Habilitando a API do Compute Engine](/wp-content/uploads/2022/12/image-1-1024x673.png)

Habilitando a API do Compute Engine

Se for a primeira vez que você estiver acessando o serviço de Compute Engine do Google, você será notificado para habilitar a API, basta clicar em `Habilitar` e esperar o término da habilitação.

![Criar instância de VM](/wp-content/uploads/2022/12/image-7-1024x195.png)

Criar instância de VM

Clique no botão de `Criar Instância` para começar a configuração de nossa nova máquina virtual no GCP.

![Configurando nossa nova VM](/wp-content/uploads/2022/12/image-8-1024x574.png)

Configurando nossa nova VM

Agora vamos configurar nossa máquina virtual para as configurações que se aplicam dentro do plano gratuito do Google Cloud, `e2-micro` e a região escolhida foi a `us-central1 (Iowa)`. Não se preocupe se um preço aparecer a direita, o desconto do nível gratuito será aplicado ao final de cada ciclo de pagamento.

Por padrão a máquina será criada com o sistema operacional [Debian](https://wiki.debian.org/pt_BR/DebianIntroduction) e um disco permanente de 10 GB, vamos prosseguir com essa configuração padrão para o nosso tutorial.

![](/wp-content/uploads/2022/12/image-10-1024x300.png)

Habilitando os protocolos HTTP e HTTPS

Precisamos adicionar uma última configuração, descendo a página você encontrar a sessão de Firewall, selecione para habilitar os tráfegos de HTTP e HTTPS no servidor.

Agora clique em Criar e aguarda a criação da máquina virtual.

![Máquina virtual GCP](/wp-content/uploads/2022/12/image-11-1024x215.png)

Copie o IP público da máquina

Com a criação finalizada, temos agora o IP público de nossa máquina, salve esse número, usaremos ele para configurar nosso domínio.

## Configurando o domínio

Eu sempre indico como resolvedor de DNS o [Cloudflare](https://cloudflare.com/), pois ele oferece muitos serviços legais e o melhor, é gratuito. Caso você utilize algum outro serviço, acesse ele para configurar os domínios necessários para o boringproxy funcionar.

Vamos precisar configurar dois domínios, o primeiro domínio será referente ao painel administrativo do boringproxy, por exemplo, `boringproxy.marquesfernandes.com` e o segundo será domínio do tipo wildcard, ele será o responsável por automaticamente gerenciar os tuneis que vamos criar posteriormente, nesse caso vamos criar um domínio `*.boringproxy.marquesfernandes.com`.

Ambos irão apontar para o mesmo lugar, o IP público do nosso servidor criado na etapa anterior, então nossa configuração para o primeiro domínio será do tipo `A` e do segundo vamos utilizar um `CNAME` para o primeiro, dessa maneira se precisarmos trocar a configuração no futuro, só precisaremos alterar em um lugar.

![Criando o primeiro domínio](/wp-content/uploads/2022/12/image-12-1024x274.png)

Criando o primeiro domínio

Crie o primeiro domínio selecionando o tipo como A, insira o IP do servidor copiado na etapa anterior e não se esqueça de desabilitar o proxy do Cloudflare.

![](/wp-content/uploads/2022/12/image-13-1024x273.png)

Criando o domínio Wildcard

Agora precisamos criar o nosso domínio Wildcard, para isso utilizaremos o `*` antes do nome do subdomínio que queremos utilizar, nesse caso `*.boringproxy.marquesfernandes.com`, ele será responsável para quando criarmos nossos tuneis no boringproxy, por exemplo, `api.boringproxy.marquesfernandes.com` a configuração funcionar sem mais a necessidade de criar subdomínios no Cloudflare.

## Configurando o boringproxy no servidor

Agora que temos nossos domínios configurados, podemos finalmente partir para a configuração do boringproxy em nosso servidor, para isso vamos acessar o SSH de nossa máquina virtual. Volte na tela de listagem das máquinas virtuais no Google Cloud e selecione a máquina criada, clique no botão SSH e uma nova janela com o nosso terminal abrirá.

![](/wp-content/uploads/2022/12/image-14-1024x574.png)

Acessando o SSH da máquina virtual

Aguarde a transferência das chaves de SSH e uma janela parecida com essa deverá ser carregada:

![Terminal VM SSH](/wp-content/uploads/2022/12/image-15-1024x166.png)

Terminal VM SSH

Ok, agora vamos criar uma pasta que abrigará a instalação do boringproxy, recomendo que a pasta seja criada em `/usr/local/boringproxy`. Por se tratar de uma pasta em um local que requer permissões root, precisamos utilizar o comando sudo. Vamos utilizar `sudo su` para não precisar digitar toda hora sudo, mas cuidado, você estará executando qualquer comando com privilégios elevados.

$ sudo su
mkdir /usr/local/boringproxy

Entre na pasta usando o comando `cd /usr/local/boringproxy`.

Seguiremos as [instruções de instalação da documentação do boringproxy](https://boringproxy.io/installation/) para Linux x86\_64.

Dentro da pasta criada execute:

curl -LO https://github.com/boringproxy/boringproxy/releases/latest/download/boringproxy-linux-x86\_64

chmod +x boringproxy-linux-x86\_64

sudo setcap cap\_net\_bind\_service=+ep boringproxy-linux-x86\_64

![](/wp-content/uploads/2022/12/image-16-1024x267.png)

Se você pretende usar os tuneis para encaminhamento de serviços como banco de dados, que utilizam o protocolo TCP e não HTTP, precisamos editar a configuração do sshd para permitir o encaminhamento de portas TCP.

Vamos editar o arquivo `/etc/ssh/sshd_config` e trocar `GatewayPorts no` por `GatewayPorts clientspecified`. Você pode utilizar o seu editor preferido, no meu caso, `nano /etc/ssh/sshd_config`.

![](/wp-content/uploads/2022/12/image-17-1024x574.png)

### Iniciando o boringproxy no servidor

Muito bem, agora podemos [iniciar o boringproxy](https://boringproxy.io/usage/) em nosso servidor, no comando abaixo troque `boringproxy.marquesfernandes.com` pelo primeiro domínio que você configurou.

./boringproxy-linux-x86\_64 server -admin-domain boringproxy.marquesfernandes.com

Seu e-mail será solicitado, essa informação é utilizada para gerar os certificados HTTPS necessários utilizando o [Let’s Encrypt](https://letsencrypt.org/pt-br/). Se tudo estiver correto, você deverá ver a mensagem `Successfully acquired certificate...`

![](/wp-content/uploads/2022/12/image-18-1024x264.png)

Utilize o comando `ctrl + c` para cancelar o serviço, agora utilize o comando `ls` para listar os arquivos da pasta, note que um arquivo chamado boringproxy\_db.json foi criado, ele é um mini banco de dados das configurações do boringproxy. Utilize o comando `cat boringproxy_db.json` para ver o conteúdo do arquivo e pegar o token de acesso, salve esse token em algum lugar seguro.

![](/wp-content/uploads/2022/12/image-19-1024x523.png)

Execute novamente o comando `./boringproxy-linux-x86_64 server -admin-domain boringproxy.marquesfernandes.com` para iniciar o boringproxy e acesse de seu navegador o domínio do admin, em nosso caso, `boringproxy.marquesfernandes.com`. Se tudo foi configurado corretamente, uma tela solicitando o token de admin deve aparecer, insira o token e acesse o painel administrativo. Mantenha a janela do terminal da máquina virtual aberta e o serviço rodando para os próximos passo.

![Painel administrativo boringproxy](/wp-content/uploads/2022/12/Screenshot-2022-12-12-at-11.33.35-1024x267.png)

Painel administrativo boringproxy

## Subindo algumas aplicações locais

Vamos deixar algumas aplicações rodando em nossa máquina local para expor elas na internet usando os tuneis criados. Usarei dois exemplos simples, vamos subir um projeto em React e um banco de dados em Postgres rodando em [Docker](http://marquesfernandes.com/tecnologia/conteineres-e-docker-o-que-e-e-para-que-serve/) para testar tanto uma configuração HTTPS e uma TCP, lembrando que você pode usar para qualquer serviço que você queria disponibilizar na internet, seja uma API, algum outro banco de dados, etc.

### [React App](https://create-react-app.dev/docs/getting-started)

Vamos utilizar o [create-react-app](https://create-react-app.dev/docs/getting-started) para criar uma aplicação simples em nossa máquina local e expor ele publicamente na internet.

npx create-react-app my-app
cd my-app
npm start

![React App funcionando](/wp-content/uploads/2022/12/Screenshot-2022-12-13-at-14.40.27.png)

React App funcionando

Se tudo der certo, sua aplicação estará rodando e disponível na porta `3000`. Deixe esse terminal rodando.

### Postgres no Docker

Para subir o banco de dados, você precisa ter o Docker instalado e [executar o seguinte comando](https://hub.docker.com/_/postgres):

docker run --name my-postgres -e POSTGRES\_PASSWORD=123456 -p 5432:5432 postgres

![Executando o Postgres no Docker](/wp-content/uploads/2022/12/Screenshot-2022-12-13-at-14.52.56.png)

Executando o Postgres no Docker

Agora temos o nosso banco de dados disponível na porta `5432`. Use algum cliente de banco, como o [DBvear](https://dbeaver.io/download/), usando o usuário `postgres` e a senha `123456` para garantir que a conexão foi bem sucedida.

## Criando os tuneis

Agora que já temos algumas aplicações rodando, podemos criar a configuração de nossos tuneis, para isso vamos voltar ao painel administrativo em `boringproxy.marquesfernadnes.com`.

### Adicionando um cliente

![Criando um cliente no boringproxy](/wp-content/uploads/2022/12/image-20-1024x255.png)

Criando um cliente no boringproxy

Primeiro precisamos criar um cliente, para isso navegue até a aba de clients e adicione um cliente com o nome de `admin`.

### Criando os túneis

O painel de túneis permite criar e remover túneis. Ele fornece uma maneira de especificar as configurações de um túnel:

-   **Domain**  
    O FQDN de um domínio apontando para o `boringproxy`servidor. Com a configuração do caractere curinga do DNS, pode ser qualquer subdomínio do `admin-domain`. Você deve inserir o **domínio completo** a partir do qual deseja que o túnel seja acessado, não apenas o subdomínio. Por exemplo, se você tivesse um registro DNS curinga `*.boringproxy.marquesfernandes.com`apontando para seu servidor de proxy chato e desejasse que um servidor de mídia fosse acessado em `api.boringproxy.marquesfernandes.com`, você teria que inserir `api.boringproxy.marquesfernandes.com` neste campo.
-   **Client Name**  
    Escolha um cliente conectado como parceiro de túnel
-   **Client Address**  
    O destino de encaminhamento visto do cliente
-   **Client Port**
-   O encaminhamento de porta para
-   **Allow External TCP**  
    Ativa o túnel TCP bruto para outros protocolos além do HTTP
-   **Password Protect**  
    Ative para definir nome de usuário e senha para autenticação básica HTTP

![Adicionando o túnel para a aplicação React](/wp-content/uploads/2022/12/image-21-1024x538.png)

Adicionando o túnel para a aplicação React

Agora vamos criar o nosso primeiro túnel, ele fara o proxy para a nossa aplicação React. Configure o domínio desejado no campo de `domain` utilizando o padrão do dominio. wildcard que criamos.

-   **Domain:** react.boringproxy.marquesfernandes.com
-   **Tunnel Port**: Random
-   **Client Name**: admin
-   **Client Port**: 3000 (port da nossa aplicação react)
-   **TLS Termination**: Client HTTPS

![Adicionando o túnel para o banco de dados](/wp-content/uploads/2022/12/image-22-1024x541.png)

Adicionando o túnel para o banco de dados

Vamos criar um túnel também para o nosso banco de dados, seguiremos os mesmos passos do túnel para o React, porém, trocando algumas configurações.

-   **Tunnel Port**: 5432
-   **TLS Termination**: Server HTTPS
-   **Allow External TCP**: Sim

![Listagem de túneis do boringproxy](/wp-content/uploads/2022/12/image-23-1024x292.png)

Listagem de túneis do boringproxy

Agora você verá os dois túneis criados como na listagem acima.

## Configurando o boringproxy na máquina local

E por fim, precisamos instalar o boringproxy em nossa máquina local, siga na [página oficial as instruções de instalação](https://boringproxy.io/installation/) referente ao seu respectivo sistema operacional. Lembrando que se você estiver usando MacOS como eu, você precisa baixar a versão `boringproxy-darwin-x86_64` e executar o comando `sudo chmod +x boringproxy-dawrin-x86_64` para que ele se torne um executável.

Agora precisamos iniciar o serviço para conectar em nosso servidor, para isso executaremos o seguinte comando:

./boringproxy-dawrin-x86\_64 client \\
    -server boringproxy.marquesfernandes.com -user admin -token <token\_copiado\_do\_servidor> -client-name admin

![boringproxy client](/wp-content/uploads/2022/12/Screenshot-2022-12-13-at-15.16.34.png)

Os túneis serão sincronizados, os certificados necessários para o lado cliente serão emitidos e se tudo caminhar conforme o esperado, suas aplicações agora estarão disponíveis na internet. Em um navegador acesse a URL configurada para o React e veja a magia e faça o teste com o seu banco de dados também.

![React App acessível via Proxy](/wp-content/uploads/2022/12/Screenshot-2022-12-13-at-15.16.57-1024x484.png)

React App acessível via Proxy

## Configurando o boringproxy para rodar como serviço

Se você deseja configurar o boringproxy no lado servidor como um serviço, para evitar o trabalho de toda vez que quiser utilizar, precisar ir no ssh do servidor e subir, siga o tutorial:

http://marquesfernandes.com/desenvolvimento/criando-um-servico-linux-com-systemd/
