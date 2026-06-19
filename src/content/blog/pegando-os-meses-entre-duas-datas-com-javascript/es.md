---
title: Recoger los meses entre dos fechas con Javascript
description: Recientemente tuve que configurar un proyecto para descargar
  archivos con nombres que seguían un patrón mensual y para ello configuré una
  función dinámica para facilitar. Deje su comentario si ha encontrado / hecho
  otra solución!
date: 2019-07-27T11:32:44.000Z
lang: es
translationKey: pegando-os-meses-entre-duas-datas-com-javascript
slug: recogiendo-los-meses-entre-dos-fechas-con-javascript
category: tecnologia-es
tags: []
wpId: 9209
canonicalPath: /es/tecnologia-es/recogiendo-los-meses-entre-dos-fechas-con-javascript/
needsReview: false
updated: 2021-12-12T11:24:15.000Z
---

Recientemente tuve que configurar un proyecto para descargar archivos con nombres que seguían un patrón mensual y para ello configuré una función dinámica para facilitar. Deje su comentario si ha encontrado / hecho otra solución!

función dateRange(startDate, endDate)
    var start á startDate.split('-');
    var end á endDate.split('-');
    var startYear á parseInt(start\[0\]);
    var endYear á parseInt(end\[0\]);
    var dates ; \[\];

    for(var i - startYear; i<= endYear; i++) {
      var endMonth á i !- endYear ? 11 : parseInt(end\[1\]) - 1;
      var startMon ? parseInt(start)-\[1\]1 : 0;
      for(var j á startMon; j <= endmonth;="" j="j">12 ? j % 12 á 11 : j+1)</=>
        var mes á j+1;
        var displayMonth - mes< 10 ? '0'+month : month;
        dates.push(\[i, displayMonth, '01'\].join('-'));
      }
    }
    fechas de devolución;
}

fechas de const: dateRange('2017-01-01', '2019-07-01');
devolución:
\[ '2017-01-01',
'2017-02-01',
'2017-03-01',
'2017-04-01',
'2017-05-01',
'2017-06-01',
'2017-07-01',
'2017-08-01',
'2017-09-01',
'2017-10-01',
'2017-11-01',
'2017-12-01',
'2018-01-01',
'2018-02-01',
'2018-03-01',
'2018-04-01',
'2018-05-01',
'2018-06-01',
'2018-07-01',
'2018-08-01',
'2018-09-01',
'2018-10-01',
'2018-11-01',
'2018-12-01',
'2019-01-01',
'2019-02-01',
'2019-03-01',
'2019-04-01',
'2019-05-01',
'2019-06-01',
'2019-07-01' \]
