---
title: Como executar diariamente e automaticamente planilhas do Excel com VBA
  Macro no Windows
description: "Você já precisou rodar diariamente uma planilha do Excel?
  Recentemente me deparei com esse cenário, e como programador preguiçoso
  pensei: Não é possível que não de para automatizar isso! Encontrei uma solução
  relativamente simples e resolvi documentar."
date: 2019-09-25T17:35:18.000Z
lang: pt
translationKey: como-executar-diariamente-e-automaticamente-planilhas-do-excel-com-vba-macro-no-windows
slug: como-executar-diariamente-e-automaticamente-planilhas-do-excel-com-vba-macro-no-windows
category: desenvolvimento
tags:
  - excel
  - vba
  - vbscript
  - macro
  - xls
  - agendador
  - cscript
wpId: 6012
cover: ./2019-08-beginneradvVBA.png
canonicalPath: /desenvolvimento/como-executar-diariamente-e-automaticamente-planilhas-do-excel-com-vba-macro-no-windows/
needsReview: false
updated: 2019-09-25T17:35:24.000Z
---

Você já precisou rodar diariamente uma planilha do Excel? Recentemente me deparei com esse cenário, e como programador preguiçoso pensei: Não é possível que não de para automatizar isso! Encontrei uma solução relativamente simples e resolvi documentar.

> **Eu sempre escolho uma pessoa preguiçosa  
> para fazer um trabalho difícil... Porque ela encontrará uma forma fácil de fazê-lo.**
> 
> Bill Gates

Vou explicar como você pode fazer isso usando o **Agendador de Tarefas** **(Windows Task Scheduler - já vem instalado)** para: Abrir; Executar Macros VBA; Salvar; Fechar o Excel. Essa solução permite uma ampla variedade de configurações de agendamento!

**PARA O AGENDADOR FUNCIONAR O COMPUTADOR PRECISA ESTAR LIGADO**

## Pré-requisitos

Todos os pré-requisitos já vem instalados por padrão no Windows:

-   Agendador de Tarefas (Windows Task Scheduler)
-   Bloco de Notas (Ou algum editor de texto neutro)
-   CScript **(C:\\Windows\\System32\\cscript.exe)**

## Criando o arquivo VBS

O arquivo que fará toda a magia acontecer será um script VBS (Visual Basic Script). Caso você esteja familiarizado com VBA não terá dificuldades em entender os comandos do script.

Abra o *Bloco de Notas* e copie o conteúdo abaixo:

'Caminho completo para a planilha excel 
CaminhoArquivoExcel = "C:\\Users\\henrique\\Documents\\nome\_da\_planilha.xlsm" 
 
'Escopo e nome completo da macro para executar 
CaminhoMacro = "Module1.NomeDaMacro" 

'Criamos uma instância do excel 
Set ExcelApp = CreateObject("Excel.Application") 

'Você deseja que essa instância fique visível? 
ExcelApp.Visible = True  'or "False" 

'Previne que o Excel mostre alertas
ExcelApp.DisplayAlerts = False 

'Abrimos o arquivo excel 
Set wb = ExcelApp.Workbooks.Open(CaminhoArquivoExcel) 

'Executamos a macro 
ExcelApp.Run CaminhoMacro

'Salvamos o arquivo excel após a execução da macro 
wb.Save 

'Voltamos com o parâmetro de alertas para evitar problemas com outras planilhas 
ExcelApp.DisplayAlerts = True 
 
'Fechamos o arquivo Excel 
wb.Close 

'Fechamos a instância do Excel 
ExcelApp.Quit 
  
'Alerta para avisar quando a planilha for executada com sucesso 
MsgBox "Sua planilha foi executada automaticamente com sucesso às:" & TimeValue(Now), vbInformation 

Agora precisamos substituir algumas informações: 

1.  Troque o valor da variável **CaminhoArquivoExcel** para a localização exata do arquivo Excel que você deseja abrir. Importante colocar tanto o nome correto como a extensão.
2.  Troque o valor da variável **CaminhoMacro** para o valor exato da macro que você deseja rodar.
3.  Em **ExcelApp.Visible** você pode decidir se quer que a aplicação abra uma instância visível **(true)** ou que ela execute em segundo plano **(false).** **Alguns** **add-ins não funcionam em segundo plano.**
4.  **MsgBox**: Alerta com mensagem visível para o usuário caso a macro tenha rodado com sucesso, caso não deseje basta remover essa linha.

Vamos salvar esse arquivo com a extensão **.vbs**: No Bloco de notas na hora de salvar no campo nome do arquivo digite algo parecido com: **excelautomatico.vbs** e em tipo de arquivo selecione: **Todos os arquivos**. De uma boa se todos os caminhos estão corretos e salve esse arquivo em algum lugar seguro onde ninguém possa acidentalmente remover. Anote o caminho do arquivo salvo pois precisaremos para depois!

[![](./2019-09-image.jpg)](./2019-09-image.jpg)

## Criando o agendamento com o Agendador de Tarefas

Para encontrar o programa basta digitar na busca do menu iniciar **Agendador de Tarefas**. 

[![](./2019-09-image-1.jpg)](./2019-09-image-1.jpg)

Para criar uma nova tarefa basta clicar no botão no lado direito: **Criar Tarefa...**

[![screenshot-marquesfernandes.com-2019.09.24-16\_39\_54.png](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ca63bcb61328d843bcc4d5199d845ee6/screenshot-marquesfernandes.com-2019.09.24-16_39_54.png)](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ca63bcb61328d843bcc4d5199d845ee6/screenshot-marquesfernandes.com-2019.09.24-16_39_54.png)

### Criar tarefa - Aba Geral 

[![screenshot-marquesfernandes.com-2019.09.24-16\_41\_55.png](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ec8ed4c4d718fadfac9c908f76d213dc/screenshot-marquesfernandes.com-2019.09.24-16_41_55.png)](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ec8ed4c4d718fadfac9c908f76d213dc/screenshot-marquesfernandes.com-2019.09.24-16_41_55.png)

Na **Aba Geral** você vai preencher o nome do agendamento e sua descrição.

*Dica: A descrição é opcional porém uma boa prática para que no futuro você ou outra pessoa consiga entender o que diabos esse agendamento faz. Experiência própria, crie uma descrição objetiva!*

Nessa aba podemos definir também se queremos que o agendamento rode quando o usuário não estiver logado no computador, **lembrando novamente que para funcionar o computador sempre precisa estar ligado**. Vou assumir que você queira executar sempre mesmo com o computador bloqueado: Selecione **Executar estando o usuário conectado ou não** e digite seu usuário e senha para validar essa opção. 

### Criar tarefa – Aba Disparadores 

Na **Aba Disparadores** configuramos os agendamentos da tarefa, clique no botão **Novo** para criar e configurar um novo agendamento. No exemplo abaixo estamos criando uma regra para rodar nosso agendamento todo dia às 16:43 hs:

[![screenshot-marquesfernandes.com-2019.09.24-16\_44\_36.png](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/617x512/a9aae6c23cf29987b1719a0b8fa745bf/screenshot-marquesfernandes.com-2019.09.24-16_44_36.png)](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/617x512/a9aae6c23cf29987b1719a0b8fa745bf/screenshot-marquesfernandes.com-2019.09.24-16_44_36.png)

Você pode criar mais de uma regra para cada agendamento.

### Criar tarefa – Aba Ações 

Na **Aba Ações** vamos mapear quais ações deverão ser executadas. Para executar o script criado no começo do tutorial precisamos utilizar um programa nativo do Windows chamado **CScript** que permite executar nosso arquivo **.vbs**: 

No campo “Programa/script” adicione: **"C:\\Windows\\System32\\cscript.exe"** 

Agora vamos passar como argumento para o **CScript** qual arquivo queremos que ele execute. Cole o caminho completo do arquivo **.vbs** que criamos no começo: 

No campo “Adicione argumentos (opcional)” troque os valores e adicione algo parecido com: **“C:\\****Users****\\****henrique****\\****excelautomatico****.vbs”** 

**Ambas configurações devem estar entre aspas.** 

[![screenshot-marquesfernandes.com-2019.09.24-16\_46\_38.png](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/444x496/54ca5124a4c8a2022389264752fab181/screenshot-marquesfernandes.com-2019.09.24-16_46_38.png)](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/444x496/54ca5124a4c8a2022389264752fab181/screenshot-marquesfernandes.com-2019.09.24-16_46_38.png)

### Criar tarefa – Outras Abas 

Algumas configurações adicionais podem ser encontradas nas outras abas, por isso recomendo que você de uma conferida e veja se alguma outra configuração será necessária para o seu caso.
