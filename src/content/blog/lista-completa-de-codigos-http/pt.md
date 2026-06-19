---
title: Lista Completa de Códigos HTTP
description: A seguir está uma lista de códigos de resposta em HTTP. Os códigos
  (codes) são usados para informar o lado do cliente o estado (status) das suas
  requisições, afim de padronizar e facilitar a comunicação entre eles. O
  primeiro dígito de cada código de status indica a qual das cinco classes de
  resposta ele pertence.
date: 2020-09-04T14:35:33.000Z
lang: pt
translationKey: lista-completa-de-codigos-http
slug: lista-completa-de-codigos-http
category: desenvolvimento
tags:
  - http
  - internet
  - https
  - protocol
wpId: 10104
canonicalPath: /desenvolvimento/lista-completa-de-codigos-http/
needsReview: false
updated: 2020-09-04T15:46:16.000Z
---

**Hypertext Transfer Protocol** ou **HTTP** para os mais íntimos é um conjunto de regras para transferência de dados como arquivos de texto, imagens, audio, vídeo e outros arquivos multimedia. Quando você digita um site em seu navegador, ele por trás dos panos está enviando uma requisição **HTTP** solicitando a página desejada para algum servidor web. Pense nos protocolos da internet como regras de trânsito, elas são necessárias para que todos os carros (dados) consigam chegar em seu destino (cliente). [Saiba mais sobre o HTTP](http://marquesfernandes.com/tecnologia/o-que-e-http/).

A seguir está uma lista de códigos de resposta em HTTP. Os códigos (codes) são usados para informar o lado do cliente o estado (status) das suas requisições, afim de padronizar e facilitar a comunicação entre eles. O primeiro dígito de cada código de status indica a qual das cinco classes de resposta ele pertence.

## 1XX - Informativa

Indica que a requisição foi recebida e entendida. Essa resposta é enviada enquanto o processamento da requisição ainda está em andamento. Serve para alertar ao cliente que ele pode esperar por uma resposta final.

| Código | Status | Descrição |
| --- | --- | --- |
| 100 | Continuar | Significa que o servidor recebeu os cabeçalhos da solicitação, e que o cliente deve proceder para enviar o corpo do pedido, |
| 101 | Mudança de protocolos | Significa que o solicitante pediu ao servidor para mudar os protocolos e o servidor está reconhecendo que irá fazê-lo. |
| 102 | Em Processamento  | Significa que o servidor entendeu a solicitação mas que irá demorar para processar e não terá uma resposta imediata, enviando esse status para impedir que o usuário fique esperando e ultrapasse o limite de tempo da requisição. |

## 2XX - Sucesso

Esta classe de códigos de status indica que a requisição do cliente foi recebida, compreendida, aceita e processada com sucesso.

| Código | Status | Descrição |
| --- | --- | --- |
| 200 | OK | O pedido foi aceito e a resposta enviada. |
| 201  | Criado | O pedido foi aceito e um novo recurso foi criado. |
| 202  | Aceito | O pedido foi aceito para processamento, mas o processamento ainda não foi concluído. |
| 203 | Informação Não Autoritária | O servidor processou a solicitação com sucesso, mas está retornando informações que podem ser de outra fonte, por exemplo, de um cache. |
| 204 | Nenhum Conteúdo | O servidor processou a solicitação com sucesso, mas não existe nenhuma resposta. |
| 205 | Resetar | Avisa o agente para resetar o documento que fez a requisição. |
| 206 | Conteúdo Parcial | O servidor está entregando apenas parte do recurso devido a um cabeçalho intervalo enviados pelo cliente. Esse intervalo é muito utilizado para conseguir retomar downloads interrompidos. |
|  |  |  |

## 3XX - Redirecionamento

O solicitante deve tomar medidas adicionais para completar a requisição. Essa classe de código de status indica que a ação ainda precisa de alguma ação pelo usuário. A ação necessária pode ser realizada pelo agente, sem interação com o usuário, se e somente se o método utilizado no segundo pedido é GET ou HEAD. Normalmente 5 é o limite para redirecionamentos nessa classe, de modo a evitar problemas com interações infinitas entre as requisições.

| Código | Status | Descrição |
| --- | --- | --- |
| 300 | Múltipla escolha | Indica mais opções para uma mesmo recurso. Pode ser usado para apresentar opções para formatos diferentes de vídeos ou imagens. |
| 301 | Movido Permanentemente | Esta e todas as solicitações futuras devem ser direcionadas para uma nova URI. |
| 302 | Encontrado | Este código de resposta significa que o URI do recurso solicitado foi alterado temporariamente. Outras alterações no URI podem ser feitas no futuro. Portanto, esse mesmo URI deve ser usado pelo cliente em solicitações futuras. |
| 303 | Consulte Outros | O servidor enviou esta resposta para direcionar o cliente a obter o recurso solicitado em outro URI com uma solicitação GET. |
| 304 | Não modificado | Isso é usado para fins de cache. Ele informa ao cliente que a resposta não foi modificada, para que o cliente possa continuar a usar a mesma versão em cache da resposta. |
| 307 | Redirecionamento temporário | Nesta ocasião, o pedido deve ser repetido com outro URI, mas futuras solicitações ainda pode usar o URI original. Em contraste com o 303, o método de pedido não deve ser mudado quando a reedição do pedido original. Por exemplo, uma solicitação POST deve ser repetido com outro pedido POST. |
| 308 | Redirecionamento permanente | Indica que o recurso foi movido para um novo URI permanente e todas as requisições futuras devem usar um dos URIs retornados. Os códigos 307 e 308 são similares ao comportamento dos códigos 302 e 301, mas não permitem que o método HTTP seja modificado. |
|  |  |  |

## 4XX - Erro de cliente

A classe 4XX de status é destinado para avisar um possível erro na requisição do usuário. O servidor deve incluir uma resposta que contenha uma possível explicação sobre o erro, e se é uma situação temporária ou permanente.

| Código | Status | Descrição |
| --- | --- | --- |
| 400 | Requisição Inválida | O pedido não pôde ser entregue por algum erro na requisição do lado do usuário. |
| 401 | Não Autorizado | O recurso solicitado precisa de autenticação e a mesma não foi fornecida. |
| 403 | Proibido | O pedido é reconhecido pelo servidor mas o usuário não tem permissão para acessar. Normalmente usado para quando o usuário está autenticado mas não tem a permissão necessária para acessar esse recurso. |
| 404 | Não Encontrado | O recurso solicitado não foi encontrado. |
| 405 | Método não Permitido | Foi feita uma solicitação para um recurso usando um método de pedido que não é aceito, por exemplo, usando GET em um recurso que aceita apenas POST. |
| 406 | Não Aceitável | Esta resposta é enviada quando o servidor web, após realizar a negociação de conteúdo baseada no servidor , não encontra nenhum conteúdo que esteja de acordo com os critérios fornecidos pelo agente do usuário. |
| 407 | Autenticação de Proxy Necessária | Semelhante ao 401, mas a autenticação deve ser feita por um proxy. |
| 408 | Tempo de Requisição Esgotada (Timeout) | Esta resposta é enviada em uma conexão ociosa por alguns servidores, mesmo sem qualquer solicitação prévia do cliente. Isso significa que o servidor deseja encerrar esta conexão não utilizada. |
| 409 | Conflito geral | Essa resposta é enviada quando uma solicitação entra em conflito com o estado atual do servidor. |
| 410 | Deletado (Gone) | Esta resposta é enviada quando o conteúdo solicitado foi excluído permanentemente do servidor, sem endereço de encaminhamento. |
| 411 | Comprimento Necessário | O servidor rejeitou a solicitação porque o `Content-Length` campo do cabeçalho não está definido e o servidor o exige. |
| 412 | Pré-condição Falhou | O cliente indicou pré-condições em seus cabeçalhos que o servidor não atende. |
| 413 | Solicitação muito Grande | A solicitação é maior do que o servidor está disposto ou é capaz de processar. |
| 414 | Pedido-URI Too Long | O URI solicitado pelo cliente é mais longo do que o servidor está disposto a interpretar. |
| 415 | Tipo de Mídia não Suportado | O formato de mídia dos dados solicitados não é compatível com o servidor, portanto, o servidor está rejeitando a solicitação. |
| 416 | Faixa não Satisfatória | O intervalo especificado pelo `Range` no campo de cabeçalho na solicitação não pode ser atendido. É possível que o intervalo esteja fora do tamanho dos dados do URI de destino. |
| 417 | Falha na Expectativa | Este código de resposta significa que a expectativa indicada pelo `Expect`no campo do cabeçalho da solicitação não pode ser atendida pelo servidor. |
| 418 | Eu sou um Bule de Chá | Este código foi definido em 1998 como uma das tradicionais brincadeiras de 1º de abril, e não é esperado para ser implementado por servidores HTTP reais. |
| 422 | Entidade não Processável | O pedido foi bem formado, mas era incapaz de ser seguido devido a erros de semântica. |
| 423 | Fechado | O recurso que está sendo acessado está bloqueado. |
| 424 | Falha de Dependência | A solicitação falhou devido à falha de uma solicitação anterior (por exemplo, um PROPPATCH). |
| 425 | Muito Cedo | Indica que o servidor não está disposto a correr o risco de processar um pedido que pode ser reproduzido. |
| 426 | Atualização Obrigatória | O servidor se recusa a realizar a solicitação usando o protocolo atual, mas pode estar disposto a fazê-lo depois que o cliente atualizar para um protocolo diferente. |
| 429 | Pedidos em Excesso | O usuário enviou muitas solicitações em um determinado período de tempo, usado para limitar a quantidade de requisições feitas pelo usuário. |

## 5XX - Outros Erros

Essa categoria contem erros genéricos ou não tratados pelo lado do servidor.

| Código | Status | Descrição |
| --- | --- | --- |
| 500 | Erro Interno do Servidor | O servidor recebeu a requisição, mas encontrou um erro que não soube como tratar. |
| 501 | Não Implementado | O servidor ainda não suporta a funcionalidade ativada. |
| 502 | Bad Gateway | Essa resposta de erro significa que o servidor, enquanto trabalhava como um gateway para obter uma resposta necessária para lidar com a solicitação, obteve uma resposta inválida. |
| 503 | Serviço Indisponível | O servidor está em manutenção ou não consegue dar conta dos processamentos de recursos devido à sobrecarga do sistema. Isto deve ser uma condição temporária. |
| 504 | Gateway Time-Out | É caracterizado por erros particulares do site em questão. Pode ser que o site esteja em manutenção ou não exista. |
| 505 | HTTP Version not supported | A versão HTTP usada na solicitação não é compatível com o servidor. |
