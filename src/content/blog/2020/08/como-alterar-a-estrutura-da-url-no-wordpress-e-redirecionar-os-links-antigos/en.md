---
title: How to Change URL Structure in WordPress and Redirect Old Links
description: If you just change the structure and don't redirect, all old links
  will go to a 404 Error - Page Not Found page. So how to make this change
  without breaking the links already created and indexed in Google?
date: 2020-08-18T11:03:32.000Z
lang: en
translationKey: como-alterar-a-estrutura-da-url-no-wordpress-e-redirecionar-os-links-antigos
slug: how-to-change-url-structure-in-wordpress-and-redirect-old-links
category: development
tags: []
wpId: 11855
canonicalPath: /en/development/how-to-change-url-structure-in-wordpress-and-redirect-old-links/
needsReview: false
updated: 2021-12-12T11:17:14.000Z
---

I recently needed to change the structure of my urls in WordPress, the link was set to be at the root of my site and I needed the new format to have the category. The permanent link structure was `/%postname%/` and now in the new format it would be `/%category%/%postman%/` . A practical example:

-   Old link: http://marquesfernandes.com/o-que-e-python-e-pra-que-serve/
-   New link: http://marquesfernandes.com/desenvolvimento/o-que-e-python-e-pra-que-serve/

If you just change the structure and don't redirect, all old links will go to a 404 Error - Page Not Found page. So how to make this change without breaking the links already created and indexed in Google?

What we need to do is try to capture the URL that would cause the 404 error and try to find the post's new permanent link. If no links are found, then we will display the not found page. The method is quite simple, as long as your old URL has something that we can use to search for the new link, such as the `/%postname%/` , we can find and redirect to the correct page.

For this we will add the following script in the file `functions.php` from the active WordPress theme:

add\_action( 'template\_redirect', 'maybe\_redirect\_404\_old\_permalink' );

function maybe\_redirect\_404\_old\_permalink() {
    // Only run this function if it's a 404 page
    if( ! is\_404() ) {
        return;
    }
 
    // Trick to get the full URL
    $url = add\_query\_arg( '', '' );

    // We get the part referring to %postname%
    $parts = explode( '/', $url );
    $parts = array\_filter( $parts );
    $size = count( $parts );
    $maybe\_slug = $parts\[ $size \] ;

    // We try to find the new link in the database
    $args = array(
        'name' => $maybe\_slug,
        'post\_type' => 'post',
        'post\_status' => 'publish',
        'numberposts' => 1,
    );

    $posts = get\_posts( $args );

    // We found the post
    if( $posts && ! empty( $posts\[0\] ->ID ) ) {
        $post\_id = $posts\[0\] ->ID;

        $post\_url = get\_permalink( $post\_id );

        // We redirect to the new URL with the permanent redirect status 301
        if( $post\_url ) {
            wp\_safe\_redirect( $post\_url, 301 );
        }
    }

  // If you get this far, it's because no posts were actually found
// and the 404 page will be displayed
}

Thanks to [ben lobaugh](https://ben.lobaugh.net/blog/202980/wordpress-add-category-to-permalink-and-redirect-old-permalinks) , original creator of this solution!
