---
title: Como alterar a estrutura da URL no WordPress e Redirecionar os Links Antigos
description: Se você apenas alterar a estrutura e não redirecionar, todos os
  links antigos vão direcionar para uma página de Erro 404 - Página Não
  Encontrada. Então como fazer essa alteração sem quebrar os links já criados e
  indexados no Google?
date: 2020-08-18T11:03:32.000Z
lang: pt
translationKey: como-alterar-a-estrutura-da-url-no-wordpress-e-redirecionar-os-links-antigos
slug: como-alterar-a-estrutura-da-url-no-wordpress-e-redirecionar-os-links-antigos
category: desenvolvimento
tags:
  - wordpress
wpId: 9834
canonicalPath: /desenvolvimento/como-alterar-a-estrutura-da-url-no-wordpress-e-redirecionar-os-links-antigos/
needsReview: false
updated: 2020-08-18T11:03:33.000Z
---

Recentemente precisei alterar a estrutura das minhas urls no WordPress, o link estava configurado para ser na raiz do meu site e eu precisava que o novo formato tivesse a categoria. A estrutura do link permanente estava `/%postname%/` e agora no novo formato seria `/%category%/%postman%/`. Um exemplo prático:

-   Link antigo: http://marquesfernandes.com/o-que-e-python-e-pra-que-serve/
-   Link novo: http://marquesfernandes.com/desenvolvimento/o-que-e-python-e-pra-que-serve/

Se você apenas alterar a estrutura e não redirecionar, todos os links antigos vão direcionar para uma página de Erro 404 - Página Não Encontrada. Então como fazer essa alteração sem quebrar os links já criados e indexados no Google?

O que precisamos fazer é tentar capturar a URL que causaria o erro 404 e tentar localizar o novo link permanente da postagem. Se nenhum link for encontrado, ai sim exibiremos a página de não encontrado. O método é bem simples, desde que na sua URL antiga exista algo que possamos utilizar para buscar o link novo, como, por exemplo, o `/%postname%/`, poderemos encontrar e redirecionar para a página correta.

Para isso adicionaremos o seguinte script no arquivo `functions.php` do tema ativo do WordPress:

add\_action( 'template\_redirect', 'maybe\_redirect\_404\_old\_permalink' );

function maybe\_redirect\_404\_old\_permalink() {
    // Apenas executa essa função se for uma página de 404
    if( ! is\_404() ) {
        return;
    }
 
    // Truque para pegar a URL completa
    $url = add\_query\_arg( '', '' );

    // Pegamos a parte referente ao %postname%
    $parts = explode( '/', $url );
    $parts = array\_filter( $parts );
    $size = count( $parts );
    $maybe\_slug = $parts\[ $size \];

    // Tentamos localizar o novo link no banco de dados
    $args = array(
        'name'        => $maybe\_slug,
        'post\_type'   => 'post',
        'post\_status' => 'publish',
        'numberposts' => 1,
    );

    $posts = get\_posts( $args );

    // Encontramos o post
    if( $posts && ! empty( $posts\[0\]->ID ) ) {
        $post\_id = $posts\[0\]->ID;

        $post\_url = get\_permalink( $post\_id );

        // Redirecionamos para a nova URL com o status de redirecionamento permanente 301
        if( $post\_url ) {
            wp\_safe\_redirect( $post\_url, 301 );
        }
    }

  // Se chegar até aqui é porque nenhum post realmente foi encontrado
// e a página de 404 será exibida
}

Agradecimentos ao [Ben Lobaugh](https://ben.lobaugh.net/blog/202980/wordpress-add-category-to-permalink-and-redirect-old-permalinks), criador original dessa solução!
