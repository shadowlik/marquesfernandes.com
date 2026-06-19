---
title: Aprenda a verificar se suas extensões do Chrome estão seguras!
description: Me deparei recentemente com um artigo do
  Lifehackerhttps://lifehacker.com/check-to-see-if-your-next-chrome-extension-is-safe-with-1832818910
  falando sobre a ...
date: 2019-03-01T14:33:56.000Z
lang: pt
translationKey: aprenda-a-verificar-se-suas-extensoes-do-chrome-estao-seguras
slug: aprenda-a-verificar-se-suas-extensoes-do-chrome-estao-seguras
category: tecnologia
tags:
  - chrome
  - chrome-web-store
  - extensions
  - security
  - csp
wpId: 5663
canonicalPath: /tecnologia/aprenda-a-verificar-se-suas-extensoes-do-chrome-estao-seguras/
needsReview: false
updated: 2020-08-09T17:09:15.000Z
---

Me deparei recentemente com um artigo do [Lifehacker](https://lifehacker.com/check-to-see-if-your-next-chrome-extension-is-safe-with-1832818910) falando sobre a segurança das extensões do chrome. Foi realizado um estudo pela empresa de segurança Duo Labs, com a ferramenta [CRXcavator](https://lifehacker.com/check-to-see-if-your-next-chrome-extension-is-safe-with-1832818910), uma aplicação web que analisa extensões e fornece um relatório de segurança baseado em resenhas em andamento da [Chrome Web Store](https://chrome.google.com/webstore/category/extensions).

Esse artigo me chamou muita atenção, utilizo muitas extensões no meu dia a dia ([Wappalyzer,](https://www.wappalyzer.com/) [Nimbus Screenshot,](https://chrome.google.com/webstore/detail/nimbus-screenshot-screen/bpconcjcammlapcogcnnelfmaeghhagj?hl=en) [Trello](https://chrome.google.com/webstore/detail/trello/dmdidbedhnbabookbkpkgomahnocimke?hl=en)), se você for parecido comigo e sai instalando extensões sem se preocupar com nada, vale a leitura:

![Análise de segurança: Extensões e Apps do Chrome](./2019-03-Análise-de-segurança_-Extensões-e-Apps-do-Chrome.jpg)

"De acordo com seu [blog](https://duo.com/blog/crxcavator), os relatórios fornecidos pela Duo Labs não são apenas baseados nos dados de Janeiro. A empresa tem automatizado suas análises, escaneando a Chrome Web Store e atualizando as informações a cada 3 horas.

Para ter essa informação, basta digitar na busca o nome da extensão que você deseja verificar com o CRXcavator. O relatório traz detalhadamente todos os dados e classifica a extensão com uma nota por nível de segurança. Se você não gostar do resultado da sua busca, a ferramenta fornece uma lista de links de extensões relacionadas com os seus relatórios para você facilmente encontrar alternativas para aquela extensão."
