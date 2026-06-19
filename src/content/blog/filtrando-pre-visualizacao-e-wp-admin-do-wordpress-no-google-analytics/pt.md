---
title: Filtrando pré-visualização e wp-admin do Wordpress no Google Analytics
description: É muito fácil sujar a coleta de dados do Google Analytics no seu
  site em Wordpress ao acessar seu painel administrativo (o famoso /wp-admin) e
  ao escrever e pré-visualizar suas páginas e artigos (preview=true).
date: 2019-12-09T00:02:01.000Z
lang: pt
translationKey: filtrando-pre-visualizacao-e-wp-admin-do-wordpress-no-google-analytics
slug: filtrando-pre-visualizacao-e-wp-admin-do-wordpress-no-google-analytics
category: self
tags:
  - wordpress
  - google-analytics
  - analytics
wpId: 6647
cover: ./2019-12-Check-Out-the-Advanced-Features-of-New-Google-Analytics-Home-Screen.png
canonicalPath: /self/filtrando-pre-visualizacao-e-wp-admin-do-wordpress-no-google-analytics/
needsReview: false
updated: 2019-12-09T00:02:09.000Z
---

Se você administra um blog ou um site em Wordpress, provavelmente utiliza o Google Analytics para monitorar seu trafego. Em sites novos, que ainda estão começando a ganhar trafego, é muito fácil sujar a coleta de dados com acessos "falsos" ao acessar seu painel administrativo (o famoso /wp-admin) e ao escrever e pré-visualizar suas páginas e artigos (preview=true). Se você, como eu, gosta de pré-visualizar e ver como seus artigos vão se encaixar e se comportar com o seu tema, precisamos filtrar esses acessos para gerar dados reais e limpos para futuras análises.

## Filtrando as páginas de pré-visualização

Antes de criar qualquer filtro, devemos criar uma nova **Visualização** na propriedade. Isso gera um backup dos dados para criar e testar os filtros; Se algo der errado e sujarmos seus dados, temos ainda os dados originais e brutos da propriedade. Para criar uma nova visualização:

1.  Entre no [Google Analytics](http://analytics.google.com/) e clique em **Administrador**.
2.  Verifique se no drop-down superior esquerdo está selecionado a conta e a propriedade correta.
3.  Na aba de **visita** clique em **Criar visita**. De um nome descritivo, como "*Teste de filtros*".

![Criar nova Vista na Propriedade](./2019-12-image-15.png)

Criar nova Vista na Propriedade

Uma vez criado, retorne para a página de Administrador e verifique se a **Visita** recém criada está selecionada. Agora vamos criar dois filtros para remover as páginas de pré-visualização e wp-admin:

1.  Clique em **Filtros** na aba de **Visita** e clique no botão **+Adicionar filtro**.
2.  Coloque um nome significativo, como "*Excluir páginas de pré-visualização*".

![Criar novo filtro](./2019-12-image-17.png)

Criar novo filtro

3.  Em **Tipo de Filtro** selecione **Customizado**.
4.  Selecione a opção **Excluir**.
5.  Em **Campo de filtro** selecione **URI da solicitação**.
6.  Em **Padrão de filtro** digite, *preview=true.  
    (Esse texto está presente em todas as páginas de pré-visualização, incluindo nas [pré-visualizações públicas](http://marquesfernandes.com/2019/12/04/como-permitir-a-pre-visualizacao-publica-em-artigos-nao-publicados-no-wordpress), se habilitado).*

![Excluir páginas de pré-visualização (preview)](./2019-12-image-18.png)

Excluir páginas de pré-visualização (preview)

8.  Clique em **Salvar**.

## Filtrando as páginas do painel administrativo (/wp-admin)

Para filtrar as páginas do painel administrativo, seguiremos quase todos os mesmos passos anteriores exceto a definição do filtro.

1.  Crie um novo filtro clicando no botão **+Adicionar filtro** (Na mesma propriedade de vista).
2.  Coloque um nome significativo como "Excluir páginas administrativas".
3.  Em **Tipo de Filtro** selecione **Padrão**.
4.  Selecione a opção **Excluir**, **tráfego para subdiretórios** e **que contém**.
5.  Em **Subdiretório** digite, */wp-admin/  
    *(Esse caminho está presente em todas as páginas do painel administrativo).

![Excluir páginas administrativas (/wp-admin/)](./2019-12-image-19.png)

Excluir páginas administrativas (/wp-admin/)

Pronto, agora os dados da sua nova **Vista** criada deverão estar limpos de acessos e visualizações de páginas falsas.
