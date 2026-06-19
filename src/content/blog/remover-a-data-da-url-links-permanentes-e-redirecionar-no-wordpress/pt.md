---
title: Remover a data da URL/Links permanentes e redirecionar no Wordpress
description: Se você possui um blog em Wordpress, provavelmente já notou que sua
  URL vem no formato /ano/mes/dia/url-do-post. Esse formato cria links mais
  longos, e essa marcação de data pode ser prejudicial para o seu site, muitos
  usuários olham para o link e selecionam o site com o conteúdo mais recente...
date: 2020-02-01T20:51:11.000Z
lang: pt
translationKey: remover-a-data-da-url-links-permanentes-e-redirecionar-no-wordpress
slug: remover-a-data-da-url-links-permanentes-e-redirecionar-no-wordpress
category: tecnologia
tags:
  - seo
  - wordpress
  - apache
wpId: 7323
canonicalPath: /tecnologia/remover-a-data-da-url-links-permanentes-e-redirecionar-no-wordpress/
needsReview: false
updated: 2020-08-09T17:06:37.000Z
---

Se você possui um blog em [Wordpress](https://br.wordpress.org/), provavelmente já notou que sua URL vem no formato `/ano/mes/dia/url-do-post`. Esse formato cria links mais longos, e essa marcação de data pode ser prejudicial para o seu site, muitos usuários olham para o link e selecionam o site com o conteúdo mais recente, então mesmo se você mantém seus posts atualizados isso pode causar um impacto no alcance de seus artigos.

Nesse artigo vamos aprender como configurar o Wordpress para usar um formato de url mais simples e a redirecionar os posts já indexados ou compartilhados para o novo formato usando o `.htaccess`.

## Configurando os links permanentes no Wordpress

Entre no painel administrativo do seu Wordpress e troque para o formato desejado, nesse artigo vamos usar o formato simples, apenas com o nome do post na URL:

`/%postname%/`

![Configurando os links permanentes no Wordpress](/wp-content/uploads/2020/02/image-7-1024x501.png)

## Redirecionando os links antigos usando o mod\_rewrite no .htaccess

Agora vamos adicionar uma pequena configuração em nosso **.htaccess** (Ele está localizado na raiz da sua instalação de Wordpress).

`RewriteRule ^([0-9]+)/([0-9]+)/([0-9]+)/(.*)$ /$4 [R=301,NC,L]`

Seu arquivo deve ficar parecido:

<IfModule mod\_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^(\[0-9\]+)/(\[0-9\]+)/(.\*)$ /$3 \[R=301,NC,L\]
RewriteRule ^index\\.php$ - \[L\]
RewriteCond %{REQUEST\_FILENAME} !-f
RewriteCond %{REQUEST\_FILENAME} !-d
RewriteRule . /index.php \[L\]
</IfModule>

**Dica:** Se você usa alguma extensão de otimização de SEO, performance ou de redirecionamento no Wordpress, muito provável seu arquivo é muito maior que o do exemplo acima, lembre-se de colocar a linha logo no começo do arquivo para o redirecionamento funcionar.

Teste algumas URLs antigas e veja se seu redirecionamento está funcionando corretamente, para monitorar possíveis erros de 404 confira o artigo: [Como monitorar erros 404 e páginas não encontradas no Google Analytics](http://marquesfernandes.com/como-monitorar-erros-404-e-paginas-nao-encontradas-no-google-analytics/)
