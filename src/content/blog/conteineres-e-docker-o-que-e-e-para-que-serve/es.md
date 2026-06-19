---
title: Contenedores y Docker - ¿Qué es y para qué sirve?
description: "Las tecnologías disruptivas que cambian el mercado y la forma en
  que sabemos desarrollar no dejan de emerger, actualmente podemos destacar una
  de ellas: Los contenedores. Revolucionaron la forma en que interactuamos con
  nuestras aplicaciones desde el desarrollo hasta la implementación de la
  producción. En primer lugar, tenemos que entender que los contenedores son la
  tecnología y Docker sería la plataforma, el entorno de ejecución de esta
  tecnología"
date: 2020-04-05T19:11:22.000Z
lang: es
translationKey: conteineres-e-docker-o-que-e-e-para-que-serve
slug: conteineres-and-docker-what-and-and-for-serving
category: tecnologia-es
tags: []
wpId: 9136
canonicalPath: /es/tecnologia-es/conteineres-and-docker-what-and-and-for-serving/
needsReview: false
updated: 2021-12-12T11:23:32.000Z
---

Las tecnologías disruptivas que cambian el mercado y la forma en que sabemos desarrollar no dejan de emerger, actualmente podemos destacar una de ellas: Los contenedores. Revolucionaron la forma en que interactuamos con nuestras aplicaciones desde el desarrollo hasta la implementación de la producción.

En primer lugar, tenemos que entender que los contenedores son la tecnología y Docker sería la plataforma, el entorno de ejecución de esta tecnología.

## Concepto de contenedor

Los contenedores son una unidad estandarizada de software que abarca y empaqueta todo el código y sus dependencias, lo que permite una forma rápida y confiable de ejecutar aplicaciones en diferentes ecosistemas (máquinas).

Imagine lo siguiente, una aplicación se puede hacer en varios lenguajes de programación, ya sea Java, JavaScript, Python, y también puede tener varias dependencias del sistema, una biblioteca necesaria para mejorar el rendimiento, convertir imágenes y así sucesivamente... Esto crea un ciclo de dependencia completo para la aplicación, es decir, si alguien necesita empezar a desarrollar o incluso implementar en otro entorno, todas estas dependencias deben estar preinstaladas. La solución encontrada por muchas empresas era crear máquinas virtuales (VM), con la configuración necesaria dentro de una imagen de máquina virtual, por lo que era portátil y solo era necesario instalar el software de virtualización y compartir la imagen de máquina virtual y el desarrollador estaba listo para iniciarse. Ahora las cosas comienzan a ser un poco confusas, porque teóricamente esta es más o menos la solución dirigida por contenedores, encapsulando el código dentro de una imagen que luego se convierte en un contenedor y se ejecuta en el entorno de ejecución (Docker, por ejemplo).

Ahora puede que se pregunte, pero ¿por qué debería usar contenedor y no máquinas virtuales? ¿Por qué tanta popularidad si hacen lo mismo? Para responder a esto, necesitamos comprender las diferencias entre una máquina virtual y un contenedor.

### Máquinas virtuales vs contenedores

Las máquinas virtuales están diseñadas para ejecutar software encima de un servidor físico, que a su vez emula un hardware determinado. Un hipervisor, un monitor de máquina virtual, es el software, el firmware y el hardware que crea y ejecuta las máquinas virtuales. Esto es lo que se encuentra entre el hardware y la máquina virtual, y es necesario virtualizar la máquina. Cada máquina virtual ejecuta un sistema operativo y cada una tiene sus propios archivos binarios, bibliotecas y aplicaciones, por lo que las máquinas virtuales pueden tener un tamaño de gigabytes.

Por el contrario, los contenedores se ejecutan en todo el mismo sistema operativo, comparten su kernel y normalmente también se encuentran binarios y bibliotecas. Hacer que estos contenedores sean ligeros y que requieran menos recursos físicos de la máquina, haciéndolos más portátiles.

![Máquinas virtuales vs contenedores ](https://blog.netapp.com/wp-content/uploads/2016/03/Screen-Shot-2018-03-20-at-9.24.09-AM-1024x548.png)

Imagen: B[log de Netapp](https://blog.netapp.com/blogs/containers-vs-vms/)

La siguiente tabla muestra algunas de las similitudes y diferencias de estas tecnologías:

|  | Máquina virtual | Contenedores |
| --- | --- | --- |
| Aislamiento | Proporciona aislamiento completo del sistema operativo host y otras máquinas virtuales. | Normalmente proporciona un aislamiento ligero del host y otros contenedores, pero no proporciona un límite de seguridad tan fuerte como una máquina virtual. |
| Sistema operativo | Ejecuta un sistema operativo completo, incluido el kernel, que requiere más recursos del sistema (CPU, memoria y almacenamiento). | Ejecuta la parte de modo de usuario de un sistema operativo y se puede personalizar para que contenga solo los servicios necesarios para la aplicación, utilizando menos recursos del sistema. |
| Compatibilidad con el sistema operativo | Ejecuta prácticamente cualquier sistema operativo dentro de la máquina virtual | Los contenedores en Linux se pueden ejecutar encima de cualquier sistema operativo, mientras que los contenedores de Windows deben ejecutarse encima de la misma versión hospedada de Windows |
| Actualizaciones y actualizaciones del sistema operativo y dependencias | Requiere la actualización manual de cada máquina virtual. | Por lo general, es suficiente actualizar solo el archivo de imagen de contenedor a una nueva versión. |
| Almacenamiento | Normalmente usa un disco duro virtual (VHD) para el almacenamiento local por máquina virtual. | Utiliza el disco host, compartiendo carpetas a través de volúmenes. |
| Red | Utiliza adaptadores de red virtual. | Utiliza una instancia aislada de un adaptador de red virtual, lo que proporciona un poco menos de virtualización, el firewall de host se comparte con contenedores, por ejemplo. |

Espero que haya comprendido un poco de las diferencias de cada uno y por qué la popularización de contenedores para entornos de desarrollo.

## ¿Qué es Docker?

Ahora que entendemos lo que es un contenedor y por qué existen, vamos a Docker, que se ha convertido en el servicio de mercado estándar para implementar esta tecnología.

**Docker** es una empresa de software de contenedor de Docker, Inc., actualmente proporciona una capa de abstracción y automatización para la virtualización de sistemas operativos Windows y Linux.

Docker Inc. fue fundada por Solomon Hykes y Sebastien Pahl durante el grupo de incubadoras de startups Y Combinator Summer 2010 y lanzado en 2011. Su tecnología debutó al público en Santa Clara en PyCon en 2013 y fue lanzada como código abierto.

Su popularización tuvo en cuenta la adopción por parte de las grandes empresas y de todo el ecosistema de desarrollo que se creó. Hay varias herramientas de tangente de contenedor disponibles para facilitar el desarrollo y la implementación en entornos de producción. Las principales herramientas y componentes son:

**Registro: el regi**stro de docker es un repositorio que le permite cargar y descargar imágenes de Docker. Estas imágenes pueden ser públicas o privadas, la gran mayoría de las aplicaciones centran sus imágenes en este repositorio.

**Demonio de Docker (dock**erd): es un proceso en segundo plano persistente que administra contenedores de Docker y controla los objetos contenedor.

**Docker Compose**: una herramienta para desarrollar y ejecutar varios contenedores. Utiliza archivos YAML para configurar los servicios de aplicación y realiza el proceso de creación e inicialización de todos los contenedores con un solo comando. Esto facilita enormemente el desarrollo, con un solo comando podemos subir nuestra aplicación y cualquier otra dependencia externa, por ejemplo, una base de datos.

**Docker Swarm**: herramienta para supervisar y administrar varios contenedores en un entorno agrupado, básicamente actúa como administrador de contenedores, cuidando la salud, las implementaciones y otros matices. Aunque el estándar del mercado es actualmente Kubernetes, fue el precursor de la gestión de contenedores acopladores.

## Conclusión

Ahora que hemos aprendido qué son los contenedores y qué es Docker, le recomiendo que empiece a estudiar esta tecnología, que la mayoría de las empresas ya utilizan o buscan adaptarse a esta nueva forma de desarrollo. Definitivamente hace la vida más fácil para los desarrolladores, hoy no puedo imaginar el desarrollo sin usar Docker.

**Desprot**e[jo: desarrollo optimizado de NodeJS con Typescript, Docker y ESlint](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/)
