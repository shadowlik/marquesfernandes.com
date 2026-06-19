---
title: Como baixar todas suas fotos marcadas no Facebook
description: "O Facebook vem caindo em desuso há um tempo. Então recentemente
  pensei em fazer um backup de todas minhas fotos, até que me deparei com um
  problema: Como baixar as fotos em que eu fui marcado?"
date: 2021-01-05T19:06:13.000Z
lang: pt
translationKey: como-baixar-todas-suas-fotos-marcadas-no-facebook
slug: como-baixar-todas-suas-fotos-marcadas-no-facebook
category: tecnologia
tags:
  - python
  - facebook
  - download
wpId: 11093
cover: ./2021-01-wp2638362-fb-wallpaper.jpg
canonicalPath: /tecnologia/como-baixar-todas-suas-fotos-marcadas-no-facebook/
needsReview: false
updated: 2021-01-05T19:09:14.000Z
---

O Facebook vem caindo em desuso há um tempo. Então recentemente pensei em fazer um backup de todas minhas fotos, até que me deparei com um problema: como baixar as fotos em que eu fui marcado? 

O Facebook agora permite que você baixe todos os dados fornecidos a ele, fotos, curtidas, publicações, contatos e muito mais, mas ele não oferece a opção de baixar suas fotos marcadas/tagged por amigos.

Eu encontrei uma solução, relativamente simples, mas você vai precisar ter o Python 2 instalado para rodar um script:

1\. Baixe o script em Python: [https://github.com/mgjohnston/fmpd](https://github.com/mgjohnston/fmpd)

2\. Acessa a página "Fotos com você" e role até o final dela-  [https://www.facebook.com/me/photos](https://www.facebook.com/me/photos)

3\. Abra o Inspecionar do Google Chrome (`ctrl + shift + i`), ignore o aviso de segurança e executa o seguinte código:

for (link of document.getElementsByTagName('a')) { 
  if (!link.href.includes("?fbid=")) continue; 
  console.log(new URL(link.href).searchParams.get("fbid")); 
}

Agora você precisa copiar todas as URLs geradas e salvar em um arquivo chamado list.txt. Não esqueça de limpar o arquivo e deixar apenas os FBIDs das fotos.

4\. Vamos precisar agora dos cookies do Facebook para o script conseguir funcionar e acessar as fotos para baixar em seu computador. Eu recomendo que você use a extensão [cookies.txt para o Chrome](https://chrome.google.com/webstore/detail/cookiestxt/njabckikapfpffapmjgojcnbfjonfjfg) e salve o arquivo como "cookies.txt" na mesma pasta em que você baixou o script.

5\. Use o Python 2 para rodar o script e baixar as fotos.

python download.py
