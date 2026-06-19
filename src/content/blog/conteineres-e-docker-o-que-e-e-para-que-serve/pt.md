---
title: Contêineres e Docker - O que é e para que serve?
description: "Tecnologias disruptivas que mudam o mercado e a maneira que
  conhecemos para desenvolver não param de surgir, atualmente podemos destacar
  uma delas: Contêineres. Eles revolucionaram o modo como interagimos com nossas
  aplicações desde o desenvolvimento até a implementação em produção. Antes de
  mais nada, precisamos entender que os contêineres são a tecnologia e o Docker
  seria a plataforma, o ambiente de execução dessa tecnologia"
date: 2020-04-05T19:11:22.000Z
lang: pt
translationKey: conteineres-e-docker-o-que-e-e-para-que-serve
slug: conteineres-e-docker-o-que-e-e-para-que-serve
category: tecnologia
tags:
  - docker
  - conteineres
wpId: 7984
canonicalPath: /tecnologia/conteineres-e-docker-o-que-e-e-para-que-serve/
needsReview: false
updated: 2020-08-09T17:04:46.000Z
---

Tecnologias disruptivas que mudam o mercado e a maneira que conhecemos para desenvolver não param de surgir, atualmente podemos destacar uma delas: Contêineres. Eles revolucionaram o modo como interagimos com nossas aplicações desde o desenvolvimento até a implementação em produção.

Antes de mais nada, precisamos entender que os contêineres são a tecnologia e o Docker seria a plataforma, o ambiente de execução dessa tecnologia.

## Conceito de Contêineres

Contêineres são uma unidade padronizada de software que engloba e empacota todo o código e suas dependências, possibilitando uma maneira rápida e confiável de executar aplicações em ecossistemas (máquinas) diferentes.

Imagina o seguinte, uma aplicação pode ser feita em diversas linguagens de programação, seja Java, JavaScript, Python, e ela pode também ter diversas dependências de sistema, uma biblioteca necessária para melhorar desempenho, converter imagens e por aí vai… Isso cria todo um ciclo de dependência para sua aplicação, ou seja, se alguém precisar começar a desenvolver ou até implementar em outro ambiente, todas essas dependências precisam ser pré-instaladas. A solução encontrada por muitas empresas foi de criar máquinas virtuais (VMs), com as configurações necessárias dentro de uma imagem de VM, sendo assim portáveis e apenas necessário a instalação do software de virtualização e compartilhar a imagem de VM e o desenvolvedor estava pronto para começar. Agora as coisas começam a ficar um pouco confusas, porque teoricamente essa é mais ou menos a solução abordada pelos contêineres, encapsular o código dentro de uma imagem que depois se torna um contêiner e é executado no ambiente de execução (Docker, por exemplo).

Agora você deve estar se perguntando, mas e, porque então devo usar contêiner e não máquinas virtuais? Porque tamanha popularidade se eles fazem a mesma coisa? Para responder isso precisamos entender as diferenças entra uma VM e um Contêiner.

### Máquinas Virtuais vs Contêineres

As máquinas virtuais foram desenvolvidas para rodar um software em cima de um servidor físico, que por sua vez emula um hardware em particular. Um hypervisor, um monitor de máquina virtual, é o software, firmware e hardware que cria e executa as VMs. É isso que fica entre o hardware e a máquina virtual, sendo necessário para virtualizar a máquina. Em cada máquina virtual roda um sistema de operacional, e cada um tem seus próprios binários, bibliotecas e aplicações, por isso as VMs podem ter gigabytes de tamanho.

Em contrapartida, os contêineres rodam tudo em cima do mesmo sistema operacional, compartilhar o seu Kernel e normalmente os binários e bibliotecas também. Fazendo com que esses contêineres sejam leves e requerem menos recursos físicos da máquina, tornando-os mais portáveis.

![Máquinas Virtuais vs Contêineres ](https://blog.netapp.com/wp-content/uploads/2016/03/Screen-Shot-2018-03-20-at-9.24.09-AM-1024x548.png)

Imagem: [Blog Netapp](https://blog.netapp.com/blogs/containers-vs-vms/)

A tabela a seguir mostra algumas das semelhanças e diferenças dessas tecnologias:

|  | Máquina virtual | Contêineres |
| --- | --- | --- |
| Isolamento | Fornece isolamento completo do sistema operacional host e de outras VMs. | Geralmente fornece isolamento leve do host e de outros contêineres, mas não fornece um limite de segurança tão forte quanto uma VM. |
| Sistema operacional | Executa um sistema operacional completo, incluindo o kernel, exigindo mais recursos do sistema (CPU, memória e armazenamento). | Executa a parte do modo de usuário de um sistema operacional e pode ser personalizada para conter apenas os serviços necessários para o seu aplicativo, usando menos recursos do sistema. |
| Compatibilidade de SO | Executa praticamente qualquer sistema operacional dentro da máquina virtual | Contêineres em linux podem ser executados em cima de qualquer sistema operacional, enquanto contêineres Windows precisam ser executados em cima da mesma versão do Windows hospedado |
| Atualizações e upgrades do sistema operacional e dependências | Requer atualização manual de cada VM. | Basta normalmente atualizar apenas o arquivo de imagem do contêiner para uma nova versão. |
| Armazenamento | Usa normalmente um disco rígido virtual (VHD) para armazenamento local por VM. | Utiliza o disco do hospedeiro, compartilhando pastas através de volumes. |
| Rede | Usa adaptadores de rede virtual. | Usa uma instância isolada de um adaptador de rede virtual, fornecendo um pouco menos de virtualização, o firewall do host é compartilhado com contêineres, por exemplo. |

Espero que de para ter entendi um pouco das diferenças de cada um e o porquê da popularização dos contêineres para ambientes de desenvolvimento.

## Então o que é o Docker?

Agora que já entendemos o que é um contêiner e o motivo deles existirem, vamos ao Docker, que se tornou o serviço padrão de mercado para implementar essa tecnologia.

**Docker** é um software de contêineres da empresa Docker, Inc, atualmente fornece uma camada de abstração e automação para virtualização de sistema operacional do  Windows e do Linux.

A Docker Inc. foi fundada por Solomon Hykes e Sebastien Pahl durante o grupo de incubadoras de inicialização Y Combinator Summer 2010 e lançada em 2011. Sua tecnologia estreou ao público em Santa Clara na PyCon em 2013 e lançado como código aberto.

Sua popularização se deu em conta da adoção por grandes empresas e por todo ecossistema de desenvolvimento que foi criado. Diversas ferramentas tangentes aos contêineres estão disponíveis, para facilitar o desenvolvimento e a implementação em ambientes de produção. As principais ferramentas e componentes são:

**Registry (Registro)**: O registry do docker é um repositório que permite o upload e download de imagens Docker. Essas imagens podem ser públicas ou privadas, a grande maioria das aplicações centralizam suas imagens nesse repositório.

**Docker daemon (dockerd)**: é um processo persistente em segundo plano que gerencia os contêineres do Docker e manipula os objetos de contêiner.

**Docker Compose**: Uma ferramenta para desenvolver e executar vários contêineres. Ele usa arquivos YAML para configurar os serviços do aplicativo e executa o processo de criação e inicialização de todos os contêineres com um único comando. Isso facilita, e muito, o desenvolvimento, com apenas um comando conseguimos subir nossa aplicação e qualquer outra dependência externa, por exemplo, um banco de dados.

**Docker Swarm**: Ferramenta para monitorar e administrar múltiplos contêineres em um ambiente clusterizado, basicamente ele atua como o gerenciador de contêineres, cuidando da saúde, dos deploys e outras nuances. Embora atualmente o padrão de mercado seja o Kubernetes, ele foi o percursor de gerenciamento de contêineres Docker.

## Conclusão

Agora que aprendemos o que são contêineres e o que é o Docker, recomendo que você comece a estudar essa tecnologia, a maioria das empresas já usa ou está buscando para se adaptar a essa nova forma de desenvolvimento. Definitivamente ela facilita a vida dos desenvolvedores, hoje não consigo imaginar mais desenvolver sem usar o Docker.

**Confira:** [Desenvolvimento otimizado em NodeJS com Typescript, Docker e ESlint](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/)
