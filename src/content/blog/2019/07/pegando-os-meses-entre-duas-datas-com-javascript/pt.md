---
title: Pegando os meses entre duas datas com Javascript
description: Recentemente precisei montar um projeto para baixar arquivos com
  nomes que seguiam um padrão mensal e para isso montei uma função dinâmica para
  facilitar. Deixe seu comentário caso você tenha encontrado/feito outra
  solução!
date: 2019-07-27T11:32:44.000Z
lang: pt
translationKey: pegando-os-meses-entre-duas-datas-com-javascript
slug: pegando-os-meses-entre-duas-datas-com-javascript
category: desenvolvimento
tags:
  - javascript
  - nodejs
  - tutorial
  - dates
  - data
  - loop
wpId: 5933
cover: ./2019-07-Calendar-Background.jpg
canonicalPath: /desenvolvimento/pegando-os-meses-entre-duas-datas-com-javascript/
needsReview: false
updated: 2019-07-27T11:37:28.000Z
---

Recentemente precisei montar um projeto para baixar arquivos com nomes que seguiam um padrão mensal e para isso montei uma função dinâmica para facilitar. Deixe seu comentário caso você tenha encontrado/feito outra solução!

function dateRange(startDate, endDate) {
    var start      = startDate.split('-');
    var end        = endDate.split('-');
    var startYear  = parseInt(start\[0\]);
    var endYear    = parseInt(end\[0\]);
    var dates      = \[\];

    for(var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(end\[1\]) - 1;
      var startMon = i === startYear ? parseInt(start\[1\])-1 : 0;
      for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        var displayMonth = month < 10 ? '0'+month : month;
        dates.push(\[i, displayMonth, '01'\].join('-'));
      }
    }
    return dates;
}

const dates = dateRange('2017-01-01', '2019-07-01');
// Retorno:
//\[ '2017-01-01',
//  '2017-02-01',
//  '2017-03-01',
//  '2017-04-01',
//  '2017-05-01',
//  '2017-06-01',
//  '2017-07-01',
//  '2017-08-01',
//  '2017-09-01',
//  '2017-10-01',
//  '2017-11-01',
//  '2017-12-01',
//  '2018-01-01',
//  '2018-02-01',
//  '2018-03-01',
//  '2018-04-01',
//  '2018-05-01',
//  '2018-06-01',
//  '2018-07-01',
//  '2018-08-01',
//  '2018-09-01',
//  '2018-10-01',
//  '2018-11-01',
//  '2018-12-01',
//  '2019-01-01',
//  '2019-02-01',
//  '2019-03-01',
//  '2019-04-01',
//  '2019-05-01',
//  '2019-06-01',
//  '2019-07-01' \]
