---
title: Como Integrar e Consultar Banco de Dados SQL com o Google Planilhas
description: O Google App Scripts permite acesso ao conector JDBC, que nos
  permite conectar a nossa Google Planilha a um banco de dados MySQL (Até a
  versão 5.7), Microsoft SQL Server, Oracle ou Google Cloud SQL.
date: 2020-08-03T16:20:33.000Z
lang: pt
translationKey: como-integrar-e-consultar-banco-de-dados-sql-com-o-google-planilhas
slug: como-integrar-e-consultar-banco-de-dados-sql-com-o-google-planilhas
category: desenvolvimento
tags:
  - google-apps-script
  - mysql
  - sql
  - google-planilhas
wpId: 7422
canonicalPath: /desenvolvimento/como-integrar-e-consultar-banco-de-dados-sql-com-o-google-planilhas/
needsReview: false
updated: 2020-08-09T17:05:00.000Z
---

Comecei a trabalhar em uma Google Spreadsheets para controlar os meus posts do blog e algumas outras métricas de acompanhamento, como odeio trabalho repetitivo, logo cansei de ficar copiando, colando e atualizando todas as informações manualmente. Foi quando descobri que existe uma maneira de conectar diretamente a minha planilha ao banco de dados da minha instalação WordPress e fazer algumas consultas pra extrair automaticamente os dados que eu preciso. Tudo isso é possível através do Google App Scripts, uma plataforma de script desenvolvida pela Google para o desenvolvimento de aplicativos leves utilizando a linguagem de desenvolvimento Javascript.

*\* Se você está familiarizado com o Excel, o Apps Scripts é o VBA do Google Planilhas.*

O Google App Scripts permite acesso ao conector [JDBC](https://developers.google.com/apps-script/guides/jdbc), que nos permite conectar a nossa Google Planilha a um banco de dados MySQL (Até a versão 5.7), Microsoft SQL Server, Oracle ou Google Cloud SQL.

Vamos aprender como conectar em nosso banco de dados, realizar consultas e exibir em um range de células de nossa planilha. Se você não conhece JavaScript ou tem pouco familiaridade com códigos, não se preocupe, seguindo os passos desse artigo você vai conseguir ter uma função fácil e genérica para realizar consultas em SQL sem precisar modificar quase nada.

## Criando a Planilha

Bom, a primeira coisa que precisamos fazer é criar uma nova planilha e abrir o editor de códigos do Google Apps Scripts:

![](/wp-content/uploads/2020/08/image-11-1024x487.png)

Vamos então ter uma editor de código parecido com o abaixo:

![](/wp-content/uploads/2020/08/image-12-1024x487.png)

## Criando o App Scripts para Conectar no Banco de Dados

Agora vamos copiar o [código de exemplo](https://gist.github.com/shadowlik/0ead7e8ace5a5ba9062bb00a368811f5) para o nosso arquivo:

function getPosts() {  
      /\* 
       \* Dados de Conexão 
       \* 
       \* Altere os dados abaixo com os dados de sua conexão
       \*/
      var BANCO = "mysql"; // Conector do banco
      var HOST = "0.0.0.0"; // IP (0.0.0.0) ou HOST (seudominio.com.br)
      var PORTA = "3306"; // Porta para conexão
      var BANCODEDADOS = "wordpress" // Banco de dados desejado
      var USUARIO = "usuario"; // Usuario
      var SENHA = "senha"; // Senha
      var ABA = "posts" // Aba para imprimir os resultados
     
      var start = new Date(); // Debug, vamos usar para saber o tempo de execução do script
  
      // Google Planilhas       
      var doc = SpreadsheetApp.getActiveSpreadsheet(); // Retorna a aba ativa 
      var posts = doc.getSheetByName(ABA); // Selecionamos a aba para limpar os dados
      posts.clear();  // Limpamos todos os dados
  
      var cell = doc.getRange('a1'); // Vamos inserir os dados a partir da primeira célula

      // Criamos a conexão com o banco de dados 
  var conn = Jdbc.getConnection("jdbc:" + BANCO +"://" + HOST + ":" + PORTA + "/" + BANCODEDADOS,  USUARIO, SENHA);
      var stmt = conn.createStatement();
      var rs = stmt.executeQuery("SELECT \* FROM wp\_posts LIMIT 10"); // Executamos a query para buscar em nosso banco de dados
      
      var row = 0;
      var getCount = rs.getMetaData().getColumnCount(); // Contamos quantas colunas a consulta retornou
      
      for (var i = 0; i < getCount; i++){  
         cell.offset(row, i).setValue(rs.getMetaData().getColumnName(i+1)); // Adicionamos os nomes para as colunas
      }  
      
      var row = 1; 
      while (rs.next()) {
        for (var col = 0; col < rs.getMetaData().getColumnCount(); col++) { 
          cell.offset(row, col).setValue(rs.getString(col + 1)); // Adicionamos os dados por linha
        }
        row++;
      }
      
      rs.close();
      stmt.close();
      conn.close();
      var end = new Date();
      Logger.log('Tempo de execução: ' + (end.getTime() - start.getTime())); // Geramos um log de tempo execução
    } 

Altere todas as variáveis indicadas no início do script para a configuração da sua conexão, recomendo que na variável `HOST` você utilize o IP, porque o Google App Script possui alguns problemas com resolução de DNS que podem dar um falso erro de conexão no banco de dados.

Esse script basicamente realiza uma conexão ao banco de dados, no exemplo usei um banco de uma instalação WordPress, onde eu faço um select simples, `SELET * FROM wp_posts LIMIT 10` , onde ele me retorna 10 posts (linhas) da tabela `wp_posts`. Com o resultado fazemos um loop para criar os cabeçalhos e popular as linhas na aba `posts`, veja o resultado abaixo:

![](/wp-content/uploads/2020/08/image-10-1024x487.png)

## Conclusão

Esse foi um exemplo simples de como conectar ao seu banco de dados e executar um query SQL, você pode alterar esse script e realizar qualquer consulta SQL. Essa integração permite criar uma ferramente poderosa, podemos extrair e atualizar automaticamente dados de nossos sistemas para análise, geração de relatório e muito mais!
