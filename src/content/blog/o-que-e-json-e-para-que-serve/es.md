---
title: ¿Qué es JSON y para qué sirve?
description: JSON, es un acrónimo de JavaScript Object Notation, un formato de
  datos de transferencia ligero, compacto, de estándar abierto e independiente
  que se utiliza para el intercambio de datos entre sistemas. Aunque el nombre
  puede ser sugerente, JSON no solo lo utiliza el lenguaje JavaScript, hoy en
  día se ha convertido en el formato estándar de comunicación en aplicaciones
  web.
date: 2020-03-06T17:27:59.000Z
lang: es
translationKey: o-que-e-json-e-para-que-serve
slug: what-and-json-and-for-that-serves
category: tecnologia-es
tags: []
wpId: 9161
canonicalPath: /es/tecnologia-es/what-and-json-and-for-that-serves/
needsReview: false
updated: 2021-12-12T11:23:41.000Z
---

Si recientemente has escuchado el término JSON y no tienes idea de lo que es, no te preocupes, no es una enfermedad y es muy fácil de entender.

JSON, es un acrónimo de J*avaScript Object Notation, un* formato de datos de transferencia ligero, compacto, de estándar abierto e independiente que se utiliza para el intercambio de datos entre sistemas. Aunque el nombre puede ser sugerente, JSON no solo lo utiliza el lenguaje JavaScript, hoy en día se ha convertido en el formato estándar de comunicación en aplicaciones web.

En pocas palabras, el formato JSON proporciona una colección de datos legibles a los que se puede acceder de forma lógica y coherente.

## Breve historia de JSON

JSON surgió de la necesidad de un protocolo de comunicación entre el servidor y el navegador en tiempo real, sin [estado y si](http://marquesfernandes.com/json-web-token-jwt-o-que-e-para-que-serve-como-funciona/)n el uso de plug-ins o software de terceros en el navegador, como applets Flash o Java, estos fueron los métodos dominantes utilizados a principios de la década de 2000.

[Douglas Crockford](https://pt.wikipedia.org/wiki/Douglas_Crockford) fue el primero en especificar y popularizar el formato JSON. El acrónimo fue origam en State Software, una compañía fundada por Crockford en marzo de 2001. Durante los últimos 18 años, JSON ha estado reemplazando XML y convirtiéndose en el formato de archivo predeterminado para la transferencia de datos en la web.

## Estructura JSON

Un archivo JSON es un conjunto desordenado de pares nombre/valor. Un JSON comienza con el valor `de` la tecla y termina con `el` valor de la dirección y, a continuación, se forma por *pares d*e "nam*e": "val*ue". A cada nombre le siguen: dos puntos y los pares nombre/valor están separados por comas.

*Nam*e puede ser cualquier texto que identifique los datos *y el* valor puede ser un texto, `núme`ro`, obje`to`, matr`iz`, tru`e/`false o null det`ermi`nado`s. Puede consultar más información en [json.org.](https://www.json.org/json-en.html)

Separé un ejemplo que cubre la mayoría de los usos y tipos de datos que se pueden encontrar en un JSON:

{
  "name": "Henrique Marques Fernandes",
  "edad": 70,
  "usesOculos": verdadero,
  "alergias": nulo,
  "sitios":\["marquesfernandes.com", "uol.com.br"\] ,
  "NumerosDaSorte": \[05, 07, 28\],
  "amigos": \[os"
     "name": "Ulises",
      "city": "Londres"
  }\]
  "dirección":
    "city": "Sao Paulo",
    "state": "Sao Paulo",
    "padres": "Brasil"
  }
}

### Propiedad de tipo de matriz

Todos los tipos de valores aceptados se pueden utilizar como miembros de matrices:

{
  "Text Matrix": \["texto1", "texto2"\],
  "ArrayNumeries": \[1, 2, 3\],
  "ArrayObjects": \[{ "a": 1 }, { "b": 2 }\],
  "Matriz Debooleana":\[true, false, false, true\] ,
  "Matrix OfNulos":\[null, null\] ,
}

### Propiedad de tipo de objeto

Todos los tipos de valores aceptados se pueden utilizar como valores de propiedad secundarios:

{
 "Yo soy un objeto":
   "text": "texto1",
   "número": 1,
   "null": nulo,
   "verdadeiro\_falso": falso,
   "matriz":\[1, 2, 3\]
 }
}

## Caso de uso JSON

JSON se utiliza ampliamente en la comunicación entre el explorador y el servidor, lo que hace que las páginas lonn para consumir pequeños conjuntos de datos en lugar de tener que tomar todos los datos necesarios para cargar la página a la vez. Así que cuando vas a alguna aplicación web es muy probable que esté haciendo uso de este patrón de comunicación.
