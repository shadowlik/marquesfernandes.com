---
title: Como Deletar Arquivos Usando Padrão de Busca no Windows
description: Então você tem uma pasta com diversos arquivos dentro, e esse
  arquivos seguem um padrão de nome ou talvez você queria deletar todos os
  arquivos com uma determinada extensão. Existem duas maneiras de realizar essa
  tarefa, abordaremos às duas maneiras de realizar essa tarefa.
date: 2020-10-16T18:19:26.000Z
lang: pt
translationKey: como-deletar-arquivos-usando-padrao-de-busca-no-windows
slug: como-deletar-arquivos-usando-padrao-de-busca-no-windows
category: tecnologia
tags: []
wpId: 10462
canonicalPath: /tecnologia/como-deletar-arquivos-usando-padrao-de-busca-no-windows/
needsReview: false
updated: 2020-10-16T18:19:27.000Z
---

Então você tem uma pasta com diversos arquivos dentro, e esse arquivos seguem um padrão de nome ou talvez você queria deletar todos os arquivos com uma determinada extensão. Existem duas maneiras de realizar essa tarefa, abordaremos às duas maneiras de realizar essa tarefa.

## 1\. Usando o PowerShell

Você pode encadear um comando `Get-ChildItem` por meio de um filtro `Where-Object` que aceita um padrão `RegEx` e, em seguida, encadear o comendo `Remove-Item` para remover. 

Get-ChildItem $Path | Where{$\_.Name -Match "<RegEx>"} | Remove-Item

O atributo nome corresponderá apenas ao nome do arquivo ou pasta, junto com a extensão do arquivo. Não vai corresponder a outras coisas ao longo do processo. Isso passará um objeto `FileInfo` pelo canal, que `Remove-Item` toma como entrada do canal e removerá os arquivos em questão.

Se você quiser incluir subpastas para a busca, precisamos adicionar a opção `-Recurse` ao comando `Get-ChildItem`:

Get-ChildItem $Path -Recurse | Where{$\_.Name -Match "<RegEx>"} | Remove-Item

Se você deseja apenas excluir arquivos, pode especificar isso na instrução `Where`, observando a propriedade `PSIsContainer` do objeto `FileInfo`:

Get-ChildItem $Path -Recurse | Where{$\_.Name -Match "<RegEx>" -and !$\_.PSIsContainer} | Remove-Item

## 2\. Usando o Explorer

Para usuários que não tem o costume de utilizar a linha de comando, existe a possibilidade de filtrar usando a busca do próprio Windows Explorer e selecionando todos os arquivos filtrados para deleção. Essa maneira não é a mais performatica e pode dar um pouco mais de trabalho, visto que o filtro às vezes retorna itens que não desejamos necessariamente deletar, no exemplo abaixo vemos o filtro pela extensão `.png`. Por isso, se for utilizar esse método, não se esqueça de verificar antes de selecionar tudo e deletar, se todos os arquivos listados são realmente os que você deseja remover.

![](/wp-content/uploads/2020/10/image-1-1024x560.jpg)
