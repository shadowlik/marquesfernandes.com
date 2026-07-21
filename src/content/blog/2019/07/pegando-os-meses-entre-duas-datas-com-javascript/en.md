---
title: Catching the months between two dates with Javascript
description: Recently I needed to set up a project to download files with names
  that followed a monthly pattern and for that I set up a dynamic function to
  make it easier. Leave your comment if you have found/made another solution!
date: 2019-07-27T11:32:44.000Z
lang: en
translationKey: pegando-os-meses-entre-duas-datas-com-javascript
slug: getting-the-months-between-two-dates-with-javascript
category: development
tags: []
wpId: 12081
canonicalPath: /en/development/getting-the-months-between-two-dates-with-javascript/
needsReview: false
updated: 2021-12-12T11:14:45.000Z
---

Recently I needed to set up a project to download files with names that followed a monthly pattern and for that I set up a dynamic function to make it easier. Leave your comment if you have found/made another solution!

function dateRange(startDate, endDate) {
    var start = startDate.split('-');
    var end = endDate.split('-');
    var startYear = parseInt(start\[0\] );
    var endYear = parseInt(end\[0\] );
    var dates =\[\] ;

    for(var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11: parseInt(end\[1\] ) - 1;
      var startMon = i === startYear ? parseInt(start\[1\] )-1:0;
      for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        var displayMonth = month < 10 ? '0'+month : month;
        dates.push(\[i, displayMonth, '01'\] .join('-'));
      }
    }
    return dates;
}

const dates = dateRange('2017-01-01', '2019-07-01');
// Return:
//\[ '2017-01-01',
// '2017-02-01',
// '2017-03-01',
// '2017-04-01',
// '2017-05-01',
// '2017-06-01',
// '2017-07-01',
// '2017-08-01',
// '2017-09-01',
// '2017-10-01',
// '2017-11-01',
// '2017-12-01',
// '2018-01-01',
// '2018-02-01',
// '2018-03-01',
// '2018-04-01',
// '2018-05-01',
// '2018-06-01',
// '2018-07-01',
// '2018-08-01',
// '2018-09-01',
// '2018-10-01',
// '2018-11-01',
// '2018-12-01',
// '2019-01-01',
// '2019-02-01',
// '2019-03-01',
// '2019-04-01',
// '2019-05-01',
// '2019-06-01',
// '2019-07-01'\]
