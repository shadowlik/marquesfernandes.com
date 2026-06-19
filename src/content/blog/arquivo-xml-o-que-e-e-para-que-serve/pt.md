---
title: Arquivo XML - O que é e para que serve?
description: Você provavelmente se deparou com um arquivo com a extensão .xml e
  está se perguntando o que é esse tipo de arquivo. XML, do inglês eXtensible
  Markup Languag...
date: 2020-03-20T12:31:51.000Z
lang: pt
translationKey: arquivo-xml-o-que-e-e-para-que-serve
slug: arquivo-xml-o-que-e-e-para-que-serve
category: tecnologia
tags:
  - markup
  - xml
wpId: 7693
cover: ./2020-03-xml.jpg
canonicalPath: /tecnologia/arquivo-xml-o-que-e-e-para-que-serve/
needsReview: false
updated: 2020-08-09T17:04:48.000Z
---

Você provavelmente se deparou com um arquivo com a extensão `.xml` e está se perguntando o que é esse tipo de arquivo. XML, do inglês eXtensible Markup Language, é uma linguagem de marcação para a criação de documentos com dados organizados hierarquicamente, tais como textos, banco de dados ou desenhos vetoriais. A linguagem XML é classificada como extensível porque permite definir os elementos de marcação, isso significa que você pode criar suas próprias marcações e interpretarlas em seu código como você bem entender, diferente de outras linguagens de marcação, como o HTML, que obrigam o uso de algumas tags pré-definidas.

## Linguagem de Marcação

Linguagem de marcação é um conjunto de códigos e/ou convenções aplicados a dados ou textos para serem lidos por computadores e secundariamente por pessoas. As linguagens de marcação mais famosas são o HTML, que é uma linguagem de marcação para formatar páginas na internet, e o XML, que tem o mesmo conceito, mas para padronizar sequências de dados para facilitar a comunicação com e entre sistemas digitais. Veja um comparativo das duas linguagens:

### XML

<?xml version="1.0"?>
<filmes>
    <filme id="1">
        <titulo>As Branquelas</titulo>
        <genero>Comédia</genero>
        <elenco>
            <ator>Terry Crews</ator>
            <ator>Marlon Wayans</ator>
            <ator>Shawn Wayans</ator>
        </elenco>
    </filme>
</filmes>

### HTML

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Título da Página</title>
</head>

<body>
Conteúdo da página
</body>

</html>

## Breve história do XML

O XML começa com o desenvolvimento da SGML (Standardized Generalized Markup Language) por Charles Goldfarb, junto com Ed Mosher e Ray Lorie na década de 1970, enquanto trabalhava na IBM (Anderson, 2004).

Uma das aplicações mais populares da SGML veio com o desenvolvimento da HTML (HyperText Markup Language) por Tim Berners Lee no final dos anos 80 (Raggett, Lam, Alexander & Kmiec, 1998).

Quando se trata de armazenamento e intercâmbio de dados, o HTML é uma linguagem inadequada, pois foi originalmente concebido como uma tecnologia de apresentação, enquanto o SGML é considerado muito complexo para uso geral.

O XML preenche essa lacuna por ser legível tanto por humanos quanto por sistemas, além de ser flexível o suficiente para oferecer suporte ao intercâmbio de dados independente de plataforma e arquitetura.

Durante muito tempo o XML foi o padrão de comunicação entre sistemas, facilitando a integração humana com diversos programas, diversos protocolos de comunicação web implementar o XML como seu meio de comunicação, sendo o mais famoso o SOAP. Com a criação do [JSON](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) o XML perdeu bastante espaço e vem se tornando obsoleto em certos usos.

## Aplicações do XML

Como vimos previamente, o XML permite uma leitura fácil para humanos e para máquinas, então sua gama de aplicações é bem abrangente:

-   Publicação na Web: o XML permite criar páginas interativas, permite ao cliente personalizar essas páginas e torna a criação de aplicativos de comércio eletrônico mais intuitiva.
-   Pesquisa na Web e automação de tarefas na Web: XML define o tipo de informação contida em um documento, facilitando o retorno de resultados úteis ao pesquisar na Web, um exemplo prático disso são os [Feeds de RSS](https://rockcontent.com/blog/o-que-e-feed-rss/).
-   Aplicativos gerais: o XML fornece um método padrão para acessar informações, facilitando o uso, armazenamento, transmissão e exibição de dados de aplicativos e dispositivos de todos os tipos.
-   Aplicativos de e-business: as implementações XML tornam o intercâmbio eletrônico de dados (EDI) mais acessível para o intercâmbio de informações, transações entre empresas e transações entre empresas e consumidores.
-   Aplicativos de metadados: o XML facilita a expressão de metadados em um formato portátil e reutilizável.

## Estrutura do XML

Toda linguagem de marcação começa com uma tag inicial, que identifica qual tipo de arquivo ele é, no caso do xml temos `<?xml version="1.0" encoding="utf-8" ?>` , e em sequência temos a tag root, ela é quem vai organizar e encapsular todas as demais tags filhas:

<?xml version="1.0" encoding="UTF-8"?>
<root>
  <filha>
    <subfilha>.....</subfilha>
  </filha>
</root>

Agora vamos para um exemplo mais prático:

<?xml version="1.0" encoding="UTF-8"?>
<clientes>
  <cliente>
    <nome>Henrique Marques Fernandes</title>
    <idade>28</idade>
    <pais>Brasil</pais>
  </cliente>
  <cliente>
    <nome>Terry Crews</title>
    <idade>55</idade>
    <pais>USA</pais>
  </cliente>
</clientes>

## Como criar um arquivo XML

Criar um arquivo XML é bem simples, você pode usar [editores online](https://codebeautify.org/xmlviewer) para isso ou apenas um editor de texto simples, o importante é sempre salvar o arquivo com a extensão `.xml`.

Se você deseja aprender mais sobre como criar um arquivo XML, eu indico a leitura da [documentação no site da Mozilla](https://developer.mozilla.org/pt-PT/docs/Web/XML/Introducao_a_XML), ela é bem didática e por isso não achei necessário criar um tutorial para isso.
