---
title: O que é um sistema/aplicação Monolito/Monolítica?
description: Monólito significa "obra construída em uma só pedra" por isso é
  utilizado para definir a arquitetura de alguns sistemas, refere-se a forma de
  desenvolver um sistema, programa ou aplicação onde todas as funcionalidades e
  códigos estejam em um único processo. Essas diversas funcionalidades estão em
  um mesmo código fonte e em sua execução compartilham recursos da mesma
  máquina, seja processamento, memória, bancos de dados e arquivos.
date: 2020-07-08T21:51:18.000Z
lang: pt
translationKey: o-que-e-um-sistema-aplicacao-monolito-monolitica
slug: o-que-e-um-sistema-aplicacao-monolito-monolitica
category: tecnologia
tags:
  - monolito
  - arquitetura
  - monolitica
wpId: 8254
canonicalPath: /tecnologia/o-que-e-um-sistema-aplicacao-monolito-monolitica/
needsReview: false
updated: 2020-08-09T17:04:02.000Z
---

Com o avançar da arquitetura de software e novas maneiras de desenvolver sistemas ganhando popularidade, a definição monoliótico ou monólito voltaram a estar em alta, principalmente em comparações com microsserviços e serviços distribuídos.

Monólito significa "obra construída em uma só pedra" por isso é utilizado para definir a arquitetura de alguns sistemas, refere-se a forma de desenvolver um sistema, programa ou aplicação onde todas as funcionalidades e códigos estejam em um único processo. Essas diversas funcionalidades estão em um mesmo código fonte e em sua execução compartilham recursos da mesma máquina, seja processamento, memória, bancos de dados e arquivos.

Como o sistema está inteiro em um único bloco, seu desenvolvimento é mais ágil, se comparado com outras arquiteturas, sendo possível desenvolver uma aplicação em menos tempo e com menor complexidade inicial, reparem na palavra inicial.

A medida em que uma aplicação é descrita como monolítica dependem muito de sua perspectiva. Talvez uma aplicação que não está orientada a serviços pode ser considerada monolítica.

E termos menos formais, vocês escutaram provavelmente o uso da palavra para se referir algum sistema grande, que tenha apenas um código fonte.

O blog onde esse artigo se encontra é um exemplo de um monolito, existe uma instalação que contem todas as funcionalidades necessárias que compartilham recursos de um mesmo servidor.

## Vantagens e Desvantagens de um Sistema Monolítico

As desvantagens e vantagens variam muito da proposta e do problema que seu sistema precisa resolver. Generalizando os problemas encontrados, podemos listar:

### **Manutenibilidade**

Conforme uma aplicação monolítica cresce, diversas funções são adicionadas a um mesmo código e processo, o que pode acarretar em quedas em cascata da aplicação como um todo. O código se torna complexo e difícil de dar manutenção, as entregas por sua vez acabam se tornam mais críticas, menos frequentes e até estáveis.

### Escalabilidade

Como estamos na era da nuvem e custos por demanda, uma aplicação monolítica pode se tornar cara para ser escalada, por se tratar de um único código, todas as funcionalidades precisam ser escalada como um todo, normalmente escalada verticalmente, adicionando mais máquina (processador, memória, ...) para aplicação, ou horizontalmente por modelos de balanceador de carga.

### Complexidade

Para aplicações novas ou provas de conceito, onde a ideia ainda precisar ser validade, o sistema monolítico apresenta menor complexidade para desenvolvimento inicial, se comparado a outras arquiteturas. Muitas empresas optam por um caminho "híbrido", onde desenvolvem e validam suas ideias construindo um monólito, mas já pensando e preparando o terreno para uma possível migração para sistemas distribuídos, por exemplo.

## Custos

O custo de uma aplicação pode ser uma vantagem ou uma desvantagem, dependendo do cenário em que o sistema se encontra. Para projetos iniciais o seu custo tende a ser uma vantagem, visto que você precisa apenas de uma máquina para rodar todo o sistema. Com o passar do tempo e com a sua aplicação escalando, ela pode se tonar uma desvantagem.
