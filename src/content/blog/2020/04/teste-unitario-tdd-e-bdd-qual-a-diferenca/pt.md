---
title: Teste Unitário, TDD e BDD - Qual a diferença?
description: Você provavelmente deve ter escutado alguém falar sobre teste
  unitário, TDD (Test-Driven Development - Desenvolvimento Orientado a Testes)
  ou BDD (Behavior-Driven Development - Desenvolvimento Orientado ao
  Comportamento). Mas qual a real diferença entre eles? E qual devo usar?
date: 2020-04-01T13:36:37.000Z
lang: pt
translationKey: teste-unitario-tdd-e-bdd-qual-a-diferenca
slug: teste-unitario-tdd-e-bdd-qual-a-diferenca
category: tecnologia
tags:
  - test
  - unittest
  - bdd
  - tdd
wpId: 7947
cover: ./2020-04-man-wearing-black-and-white-stripe-shirt-looking-at-white-212286.jpg
canonicalPath: /tecnologia/teste-unitario-tdd-e-bdd-qual-a-diferenca/
needsReview: false
updated: 2020-08-09T17:04:47.000Z
---

Você provavelmente deve ter escutado alguém falar sobre teste unitário, TDD (Test-Driven Development - Desenvolvimento Orientado a Testes) ou BDD (Behavior-Driven Development - Desenvolvimento Orientado ao Comportamento). Mas qual a real diferença entre eles? E qual devo usar? São as perguntas mais frequentes, embora não existe uma resposta correta o que todos os bons desenvolvedores concordam é: você precisa de testes.

## Teste Unitário (Unit Testing)

Começarei pelo mais fácil de explicar, o teste unitário visa testar unidades de código. Normalmente o teste se restringe a uma função em um objeto ou módulo. Esses testes devem ser específicos a função, simples e rápidos de escrever e executar. Quanto mais testes unitários seu código tiver, mais bugs serão pegos antes do seu código ir para produção. O teste unitário traz a paz de espirito para uma equipe de desenvolvedores, se eles confiam na quantidade de testes disponíveis, eles sabem que a mudança de código será feita com garantia, possíveis quebras serão pegas cedo no processo de desenvolvimento.

Testes unitários devem ser isolados de qualquer dependência externa, como banco de dados ou rede. Caso você precise, existem bibliotecas específicas para simularem essas situações para você. Os princípios básicos de um teste de unidade devem estar lá: Testes Individuais; Testam apenas uma coisa; Isolados um do outro.

Existe uma confusão entre teste unitários e testes automatizados, eles não são a mesma coisa. Existem diferentes tipos de testes automatizados, veja alguns dos principais:

-   **Testes de unidade:** um único pedaço de código (geralmente um objeto ou uma função) é testado, isolado de outras partes.
-   **Testes de integração:** varios componentes são testadas juntas, por exemplo, testando o código de acesso ao banco de dados em um banco de dados de teste ou até mesmo a interação entre serviços distribuidos.
-   **Testes E2E (End to End):** Técnica usada para testar se o fluxo de um aplicativo do início ao fim está se comportando conforme o esperado.

É importante que você entenda essas diferenças pelo seguinte motivo: Se você está escrevendo um teste unitário e não está sendo fácil de escrever, é provável que ele não seja um teste unitário. Os testes de integração e de aceitação, por exemplo, são mais complexos e geralmente são mais lentos, portanto verifique se você está realmente testando unitariamente.

## TDD (Test-Driven Development - Desenvolvimento Orientado a Testes)

TDD é na realidade um processo, ele indica o fluxo que deve ser tomado no desenvolvimento. Ele visa desde o princípio cubrir a maior quantidade possível de código com testes, dessa maneira reduzindo a quantidade de bugs em seu desenvolvimento e inclusive bugs em seu teste. O processo do TDD possuí o seguinte fluxo:

1.  Começa escrevendo o teste
2.  Execute o teste e quaisquer outros testes.Seu teste recém-adicionado deve falhar. Se não falhar aqui, pode não estar testando a coisa certa e, portanto, possui um bug
3.  Escreva a quantidade mínima de código necessária para fazer o teste passar
4.  Execute os testes para verificar as novas passagens de teste
5.  Refatorar opcionalmente seu código
6.  Repita a partir de 1

Exige um certo esforço para se adaptar a essa prática, mas gastar esse tempo pode recompensar, e muito! Os projetos que aplicam TDD geralmente possuem uma cobertura de testes entre 90 a 100%, o que significa que é fácil manter o código e adicionar novos recursos garantido a qualidade.

Para muitos desenvolvedores a parte mais difícil do TDD é o fato de ter que desenvolver seu teste antes de qualquer linha de código.

## BDD (Behavior-Driven Development - Desenvolvimento Orientado ao Comportamento)

BDD é onde talvez a coisa possa ficar complicada para entender. O BDD é um conjunto de práticas recomendadas para escrever ótimos testes. O BDD pode e deve ser usado junto com os métodos de teste unitários e TDD.

Um problema comum com testes unitários ruins é que eles dependem muito de como a função sendo testada é implementada. Isso significa que, se você atualizar a função, mesmo sem alterar as entradas e saídas, também deverá atualizar o teste. Tornando o processo tedioso e repetitivo sem necessidade, e é exatamente ai que entra o BDD, no detalhe de implementação do teste.

O BDD soluciona esse problema, mostrando como você deve testar. Você não deve testar exclusivamente a implementação, mas sim o comportamento. Ao sugerir testar o comportamento e não em como o código é implementado, passamos a refletir qual o real cenário. Normalmente, você tenta separar seu teste em "esse teste deve fazer alguma coisa", por exemplo, ao testar uma função que incrementa em um o contador, "deve incrementar o contador em 1".
