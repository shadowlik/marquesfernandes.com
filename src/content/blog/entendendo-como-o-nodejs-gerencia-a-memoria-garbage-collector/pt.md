---
title: Entendendo como o NodeJS gerencia a memória - Garbage Collector
description: O gerenciamento de memória consiste em maneiras de alocar
  dinamicamente memória quando solicitado e liberar quando essa memória não for
  mais necessária - liberando assim espaço para que essa memória seja
  reutilizada.
date: 2020-03-22T22:27:39.000Z
lang: pt
translationKey: entendendo-como-o-nodejs-gerencia-a-memoria-garbage-collector
slug: entendendo-como-o-nodejs-gerencia-a-memoria-garbage-collector
category: tecnologia
tags:
  - javascript
  - nodejs
  - v8engine
wpId: 7807
cover: ./2020-03-nodejs-garbage-collector.jpg
canonicalPath: /tecnologia/entendendo-como-o-nodejs-gerencia-a-memoria-garbage-collector/
needsReview: false
updated: 2020-08-09T17:04:48.000Z
---

Conforme vamos desenvolvendo aplicações mais complexas, a necessidade de entender como a nossa linguagem funciona debaixo dos panos em certos aspectos acaba se tornando necessária. O [NodeJS](http://marquesfernandes.com/afinal-o-que-e-nodejs/), mais especificamente a engine v8 que é o motor que executa nossas aplicações tem algumas limitações, não entrarei em detalhe de todas elas, focaremos apenas em uma: O *limite de memória*. Por padrão o limite máximo de memória alocado gira em torno de 700mb e 1400mb, para sistemas em 32-bits e 64-bits respectivamente, e isso pode se tornar um gargalo para algumas aplicações, e portanto é importante entender como essa memória é alocada e desalocada.

## Gerenciamento de Memória

O gerenciamento de memória consiste em maneiras de alocar dinamicamente memória quando solicitado e liberar quando essa memória não for mais necessária - liberando assim espaço para que essa memória seja reutilizada.

Existem duas manerias de gerenciamento de memória:

-   **Manual:** Consiste em delegar essa responsabilidade para o desenvolver em si, ele é responsável por alocar e desalocar a memória no desenvolvimento de sua aplicação.
-   **Automático:** Consiste no uso de um "programa" nativo, usualmente chamado *Garbage Collector* (Coletor de Lixo), que toma conta de fazer todo esse processo e tentar ao máximo evitar vazamentos de memória.

## Coletor de Lixo - Garbage Collector

O conceito de "coleta de lixo" é uma maneira de gerenciar a memória do aplicativo automaticamente. O trabalho do coletor de lixo (GC - Garbage Collector) é recuperar a memória ocupada por objetos não utilizados (lixo). Foi concebido e usado pela primeira vez no [LISP](https://pt.wikipedia.org/wiki/Lisp) em 1959, inventado por John McCarthy.

A maneira como o GC sabe que os objetos não estão mais em uso é que nenhum outro objeto tem referências a eles.

### Memória Antes do Coletor Funcionar

Análise o diagrama abaixo, ele vai dar uma visão de como a memória fica quando objetos são referenciados nela (estão "vivos") e quando não tem mais referência (são "lixo").

![](./2020-03-nodememoria.jpg)

### Memória Depois do Coletor Funcionar

Após o coletor funcionar, as memórias inalcançáveis são deletas liberando espaço na memória.

![](./2020-03-nodememoriav2.jpg)

O intervalo de duração em que o coletor executa varia por aplicação, ele mantém uma metodologia inteligente para saber com qual frequência ele precisa limpar a memória. Ele possui uma

### Vantagens do Coletor de Lixo

-   Evita erros de referências perdidas e pendentes.
-   Não tentará liberar espaço que já estava liberado, economizando processamento.
-   Irá prevenir alguns tipos de vazamentos de memória.

Obviamente, o uso de um coletor de lixo não resolve todos os problemas e não é uma solução mágica para o gerenciamento de memória. Algumas coisas que precisamos ter em mente, é que você ainda tem que se preocupar com vazamentos de memória, se o seu código cresce o uso de memória exponencialmente sem razão, isso é um sinal de vazamento que pode levar a lentidão e até crash da sua aplicação. Outro ponto a considerar e que seu funcionamento automático pode não atender a expectativa de todas as aplicações, ajustes podem ser necessários.

## Entendendo o "Heap"

O heap é a estrutura de memória usado pelo NodeJS para armazenar objetos, textos e closures. É aqui que toda a mágica acontece.

Mas o heap vai muito além disso: um processo em execução do NodeJS armazena toda a sua memória dentro de um conjunto residente. Você pode pensar nisso como uma caixa grande que contém mais algumas caixas.

O conjunto residente contém também o código Javascript real (o que está sendo executado dentro do segmento de código) e a stack, onde todas as variáveis residem.

## Como o V8 organiza a pilha?

A engine V8 do NodeJS divide o heap em vários espaços diferentes para um gerenciamento eficaz de memória:

-   **Novo espaço:** a maioria dos objetos é alocada aqui. O novo espaço é pequeno e foi projetado para ser coletado rapidamente.
-   **Espaço do ponteiro antigo:** contém a maioria dos objetos que podem ter ponteiros para outros objetos. A maioria dos objetos é movida para cá depois de sobreviver no novo espaço depois de um determinado tempo.
-   **Espaço de dados antigo:** contém objetos que contêm apenas dados mortos (sem ponteiros para outros objetos). Strings, números e matrizes são movidos para cá depois de sobreviver em um novo espaço por um tempo.
-   **Espaço de objeto grande:** contém objetos que são maiores que os limites de tamanho de outros espaços. Cada objeto obtém sua própria região de memória mmap. Objetos grandes nunca são movidos pelo coletor de lixo.
-   E**spaço** **de** **Código:** objetos de código, que contêm instruções JIT, são alocados aqui. Este é o único espaço com memória executável (seu código está aqui)
-   **Espaço de célula, espaço de célula de propriedade e espaço de mapa:** Contém Células, PropertyCells e Mapas, respectivamente. Cada espaço contém objetos que têm o mesmo tamanho e são restritos em ponteiros, o que simplifica a coleção.

## Funcionamento mais detalhado

Basicamente o coletor de lixo possui dos modos de operar.

### Coleta Curta - Short GC

Como vimos anteriormente o V8 divide o heap em duas gerações. Os objetos são alocados no novo espaço, que é bastante pequeno (entre 1 e 8 MB). A alocação em um novo espaço é muito barata: temos apenas um ponteiro de alocação que incrementamos sempre que queremos reservar espaço para um novo objeto. Quando o ponteiro de alocação chega ao final do novo espaço, é acionada uma eliminação (ciclo menor de coleta de lixo), que remove rapidamente qualquer objeto mortos do novo espaço.

### Coleta Completa - Full GC

Objetos que sobreviveram a dois ciclos de coletas pequenas de lixo são promovidos para o "espaço antigo". O espaço antigo é o lixo coletado no GC completo (ciclo principal de coleta de lixo), que é muito menos frequente. Um ciclo completo de GC é acionado quando uma certa quantidade de memória no espaço antigo é atingido.

Para coletar espaço antigo, que pode conter várias centenas de megabytes de dados, usamos dois algoritmos intimamente relacionados, [Mark-sweep](https://www.geeksforgeeks.org/mark-and-sweep-garbage-collection-algorithm/) e [Mark-compact](https://en.wikipedia.org/wiki/Mark-compact_algorithm).

## Forçando o Coletor de Lixo

Embora o coletor de lixo do NodeJS vem melhorado, e muito, nos últimos tempos, talvez faça sentido você forçar a coleta de lixo em alguns casos. Mas lembre-se, toda existe um custo de processamento para isso.

Executando no modo normal isso não é possível, o Node não nos permite alocar ou desalocar memórias e nem ter acesso ao coletor de lixo, se quisermos ter acesso a função que chama o coletor, precisamos executar nossa aplicação com a seguinte opção:

$ node --expose-gc index.js

Ao iniciar seu programa com esta opção, você terá acessoa a função:

global.gc();

Para torná-lo mais seguro, você pode usar:

function forceGC()
   if (global.gc) {
      global.gc();
   } else {
      console.warn('GC não habilitado! Execute seu programa com \`node --expose-gc index.js\`.');
   }
}
