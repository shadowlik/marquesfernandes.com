---
title: Arquivo YAML - O que é e para que serve?
description: Você provavelmente se deparou com um arquivo com a extensão .yaml
  ou .yml, e está se perguntando o que é esse tipo de arquivo. YAML é um
  acrônimo recursivo em ingles e significa Ain't Markup Language (Não é uma
  linguagem de marcação).
date: 2020-04-01T12:52:46.000Z
lang: pt
translationKey: arquivo-yaml-o-que-e-e-para-que-serve
slug: arquivo-yaml-o-que-e-e-para-que-serve
category: tecnologia
tags:
  - yaml
  - yml
  - markup
wpId: 7687
cover: ./2020-03-stencil.hd-tv.jpg
canonicalPath: /tecnologia/arquivo-yaml-o-que-e-e-para-que-serve/
needsReview: false
updated: 2020-08-09T17:04:47.000Z
---

Você provavelmente se deparou com um arquivo com a extensão `.yaml` ou `.yml`, e está se perguntando o que é esse tipo de arquivo. YAML é um acrônimo recursivo em ingles e significa *Ain't Markup Language* (Não é uma linguagem de marcação). Segundo o website oficial: *YAML é uma serialização de dados amigável para humanos e padrão para todas as linguagens de programação.*

Juntando com algumas outras definições que podemos encontrar na internet, podemos concluir que o YAML é um padrão de dados hierárquicos e legível por humanos que pode ser usado em conjunto com todas as linguagens de programação, e usualmente é utilizado para armazenar arquivos de configuração.

YAML foi proposto por [Clark Evans](https://pt.wikipedia.org/w/index.php?title=Clark_Evans&action=edit&redlink=1) em 2001 e no início de seu desenvolvimento significava "Yet Another Markup Language" ("Mais outra linguagem de marcação"), isso para distinguir seu propósito centrado em dados e não de documentos marcados. Isso significa que o YAML não propõe marcações e tags, apenas formatações e identificadores mínimos, focando realmente nos dados. Não se preocupe se você ainda não entendeu, ficará mais fácil de entender o que isso significa quando compararmos com algumas linguagens de marcação conhecidas.

## Exemplo de um arquivo YAML

nome: Henrique Marques Fernandes #Texto
idade: 28 #Número
intereses: #Matriz
  - javascript
  - docker
  - flutter
endereco: #Objeto
  pais: Brasil
  estado: São Paulo

Como podemos ver, não existem tags predefinidas, as próprias propriedades delimitam os dados, diferentemente do XML que possuí tags explicitas, o YAML se baseia na indentação e marcações mínimas para definir as informações.

Pontos Principais

-   YAML é uma linguagem orientada a dados que possui recursos derivados de Perl, C, HTML e outras linguagens.
-   O YAML é um superconjunto derivado do [JSON](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) que vem com várias vantagens internas, como comentários, auto-referência e suporte para tipos de dados complexos.
-   Vários pacotes de software implementaram o YAML para criar poderosas ferramentas de gerenciamento de configuração.
-   Infraestrutura de alto desempenho

Você pode ver mais informações técnicas sobre o YAML em seu [site oficial](https://yaml.org/) ou no site de referência da [Ansible - RedHat](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html), ambos em inglês.
