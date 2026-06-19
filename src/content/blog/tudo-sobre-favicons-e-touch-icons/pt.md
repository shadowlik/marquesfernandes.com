---
title: O que são Favicons e Touch Icons?
description: Favicon, "Favourite Icon" (Ícone Favorito), é uma imagem utilizada
  pelos navegadores para representar graficamente uma página na internet.
  Antigamente o único formato aceito era o ".ico" e no tamanho 16x16 pixels, mas
  hoje em dia podemos utilizar outros formatos como ".png", ".jpg" e ".svg".
date: 2019-03-14T21:46:27.000Z
lang: pt
translationKey: tudo-sobre-favicons-e-touch-icons
slug: tudo-sobre-favicons-e-touch-icons
category: design
tags:
  - favicon
  - appleicon
  - touchicon
  - icons
wpId: 5724
canonicalPath: /design/tudo-sobre-favicons-e-touch-icons/
needsReview: false
updated: 2019-10-21T21:52:18.000Z
---

Favicon, "Favourite Icon" (Ícone Favorito), é uma imagem utilizada pelos navegadores para representar graficamente uma página na internet. Antigamente o único formato aceito era o ".ico" e no tamanho 16x16 pixels, mas hoje em dia podemos utilizar outros formatos como ".png", ".jpg" e ".svg" e tamanhos. Atualmente o favicon é comumente utilizado para:

-   Barra de navegação
-   Barra de favoritos
-   Ícones de área de trabalho
-   Ícone de tela inicial mobile

![](/wp-content/uploads/2019/03/screenshot-bitsofco.de-2019.03.14-21-23-38.png)

A maioria dos navegadores buscará por padrão um arquivo na raiz do seu site chamado "favicon.ico" porém podemos fornecer outro local e tamanhos do ícone através da tag html <link />.

## Tag HTML Link

Se não queremos utilizar o método padrão dos navegadores para disponibilizar o ícone e também para fornecer variações de tamanhos utilizamos a tag html <link />.

<link rel="" type="" sizes="" href="">

### Rel

A propriedade "rel"significa "relationship" (relacionamento) e é usada para indicar qual a relação do link em questão com a página. Em navegadores muito antigos se utilizava o valor "shortcut icon" porém vamos focar nos modernos e mais utilizados, então utilizaremos o valor "icon".

<link rel="icon" type="" sizes="" href="">

### Type

A propriedade "type" indica o [tipo de formato MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) do arquivo que está sendo referenciado. Por exemplo: Para um arquivo no formato ".ico" utilizamos "image/x-icon", já no formato ".png" seria "image/png". Embora não seja uma propriedade obrigatória é recomendada para dar suporte a navegadores antigos (IE9 e IE10).

<link rel="icon" type="image/png" sizes="" href="">

### Sizes

A propriedade "sizes" é utilizada para indicar o tamanho do ícone sendo referenciado. Como podemos fornecer versões otimizadas para diferente usos, aqui falamos para o navegador qual o tamanho e assim ele sabe qual o melhor ícone usar em cada caso.

<link rel="icon" type="image/png" sizes="228x228" href="">

### Href

A propriedade "href" indica o local no servidor do arquivo referenciado.

<link rel="icon" type="image/png" sizes="228x228" href="/icons/favicon.ico">

### Colinha

| Navegador | Tag Link: “rel” / “type” | Formatos Aceitos |
| --- | --- | --- |
| IE 8 ou anteriores | rel=”shortcut icon” | .ico |
| IE 9, IE 10 | rel=”icon” type=”image/x-icon” | .ico |
| IE 11 | rel=”icon” type="image/x-icon ou png ou gif" | .ico, .png, .gif |
| Chrome | rel=”icon” type="image/x-icon ou png ou gif" | .ico, .png, .gif |
| Firefox | rel=”icon” type="image/x-icon ou png ou gif" | .ico, .png, .gif, [.svg\*](http://caniuse.com/#feat=link-icon-svg) |
| Safari | rel=”icon” type="image/x-icon ou png ou gif" | .ico, .png, .gif |
| Opera | rel=”icon” type="image/x-icon ou png ou gif" | .ico, .png, .gif |

## Dispositivos Mobile

![](/wp-content/uploads/2019/03/Screenshot_20190314-220947-1024x717.png)

Alguns navegadores mobiles permitem a criação de atalhos na tela inicial e para isso podemos fornecer imagens com qualidade e tamanhos otimizados:

| Dispositivo / Navegador | Tag Link “rel” | Tamanhos (size) |
| --- | --- | --- |
| Apple / Safari | rel=”apple-touch-icon” or  
rel=”apple-touch-icon-precomposed” | 76x76 - iPad 2 e iPad mini  
120x120 - iPhone 4s, 5, 6  
152x152 - iPad (retina)   
180x180 - iPhone 6 Plus |
| Apple / Opera Coast | rel=”icon”  
 | 228x228 |
| Android / Chrome | rel=”icon”  
 | 192x192 |

## Tamanhos mais utilizados

Para finalizar separei uma lista com a maioria dos tamanhos utilizadas e por quem:

<table style="background-color: #ffffff; height: 942px;"><tbody><tr style="height: 43px;"><td style="height: 43px; width: 102px;"><strong>Tamanho</strong></td><td style="height: 43px; width: 150px;"><strong>Nome</strong></td><td style="height: 43px; width: 455px;"><b>Utilização</b></td></tr><tr style="height: 43px;"><td style="height: 43px; width: 102px;">32×32</td><td style="height: 43px; width: 150px;">favicon-32.png</td><td style="height: 43px; width: 455px;">Padrão para a maioria dos navegadores</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">57×57</td><td style="height: 65px; width: 150px;">favicon-57.png</td><td style="height: 65px; width: 455px;">Padrão para a tela inicial do iOS e iPhone até a 3 geração</td></tr><tr style="height: 43px;"><td style="height: 43px; width: 102px;">76×76</td><td style="height: 43px; width: 150px;">favicon-76.png</td><td style="height: 43px; width: 455px;">Tela inicial iPad</td></tr><tr style="height: 43px;"><td style="height: 43px; width: 102px;">96×96</td><td style="height: 43px; width: 150px;">favicon-96.png</td><td style="height: 43px; width: 455px;">GoogleTV</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">120×120</td><td style="height: 65px; width: 150px;">favicon-120.png</td><td style="height: 65px; width: 455px;">iPhone de retina</td></tr><tr style="height: 120px;"><td style="height: 120px; width: 102px;">128×128</td><td style="height: 120px; width: 150px;">favicon-128.png</td><td style="height: 120px; width: 455px;">Chrome Web Store icon e Tela de iniciar do Windows 8</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">144×144</td><td style="height: 65px; width: 150px;">favicon-144.png</td><td style="height: 65px; width: 455px;">Ícone metro do IE10 *</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">152×152</td><td style="height: 65px; width: 150px;">favicon-152.png</td><td style="height: 65px; width: 455px;">iPad</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">167×167</td><td style="height: 65px; width: 150px;">favicon-167.png</td><td style="height: 65px; width: 455px;">iPad de Retina</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">180×180</td><td style="height: 65px; width: 150px;">favicon-180.png</td><td style="height: 65px; width: 455px;">iPhone 6 plus</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">192×192</td><td style="height: 65px; width: 150px;">favicon-192.png</td><td style="height: 65px; width: 455px;">Recomendação do Google Developer Web App</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">195×195</td><td style="height: 65px; width: 150px;">favicon-195.png</td><td style="height: 65px; width: 455px;">Opera Speed Dial (Versão 15 e anteriores)</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">196×196</td><td style="height: 65px; width: 150px;">favicon-196.png</td><td style="height: 65px; width: 455px;">Atalho na tela inicial do Chrome no Android</td></tr><tr style="height: 65px;"><td style="height: 65px; width: 102px;">228×228</td><td style="height: 65px; width: 150px;">favicon-228.png</td><td style="height: 65px; width: 455px;">Opera Coast icon</td></tr></tbody></table>

## Sites geradores de Favicons

Para facilitar nossas vidas existem sites que geram todos os principais tamanhos automaticamente:

-   [https://www.favicon-generator.org/](https://www.favicon-generator.org/)
-   [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
-   [](https://favicon.io/)[https://favicon.io/](https://favicon.io/)
-   [http://www.genfavicon.com/](http://www.genfavicon.com/pt/)
-   [](https://www.favicon.cc/)[https://www.favicon.cc/](https://www.favicon.cc/)
