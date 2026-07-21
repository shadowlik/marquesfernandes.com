---
title: "0. Por qué hago crecer HAID en público, no construyo en público"
description: "Todo el mundo construye en público. Hilos en Twitter (perdón, X) sobre stacks tecnológicos, decisiones de arquitectura, pipelines de despliegue. Me encanta leerlos, pero esto no es eso: es documentar el proceso honesto de aprender a crecer desde cero."
date: 2026-04-05T10:55:21.000Z
lang: es
translationKey: 0-why-im-growing-haid-in-public-not-building-in-public
slug: 0-por-que-hago-crecer-haid-en-publico-no-construyo-en-publico
category: desenvolvimento
tags: []
needsReview: true
cover: ./2026-04-IMG_9164.png
canonicalPath: /es/0-por-que-hago-crecer-haid-en-publico-no-construyo-en-publico/
---

## El gancho

Todo el mundo construye en público. Hilos en Twitter (perdón, X) sobre stacks tecnológicos, decisiones de arquitectura, pipelines de despliegue. Me encanta leerlos, pero esto no es eso.

Soy ingeniero de software con más de 15 años de experiencia. He lanzado productos usados por miles de usuarios mucho antes de que la IA formara parte del vocabulario de nadie. Construir es mi zona de confort. Sé cómo hacerlo. Sí, sé que construir en público también va de recibir feedback temprano, no de pedirle literalmente a la gente que escriba tu código. Pero acompáñame.

¿Crecimiento? ¿Marketing? ¿Conseguir que desconocidos en internet se interesen por algo que hice? No tengo ni idea de cómo hacer eso. Y de eso trata exactamente esta serie: documentar el proceso honesto y caótico de un desarrollador que aprende a crecer desde cero.

Esto también es un regreso a la escritura para mí. Uno de mis primeros proyectos paralelos fue [marquesfernandes.com](http://marquesfernandes.com/), que hoy en día es más un portafolio que un blog. Pero por aquel entonces, escribir me hacía bien. Me obligaba a pensar más a fondo, a aprender las cosas de verdad, y me daba un momento de mindfulness haciendo algo en lo que no soy particularmente bueno. Después de un par de años sin escribir, sentí que era hora de volver a hacerlo.

Así que aquí está la historia hasta ahora: cómo [HAID](https://haid.app/) pasó de ser el proyecto paralelo de un atleta frustrado a algo con una dirección real, y por qué la parte difícil apenas empieza ahora.

## Por qué existe HAID

Soy corredor y triatleta, y durante años me ha frustrado lo mismo: no existe un único lugar al que pueda llamar hogar para mis datos de fitness.

Strava es genial para la parte social. Garmin Connect te lanza un muro de datos encima, con una interfaz que sigue siendo tosca a pesar de los recientes intentos de rediseño. Apple Health es limpia y acierta en algunas cosas, pero le falta la capa social y motivacional que para mí importa. Cada app es excelente en una sola cosa, ninguna en todo, y ninguna se comunica de verdad con las demás de forma útil.

Ya había rascado una picazón parecida antes: construí [apuama.com](https://apuama.com/) porque encontrar eventos de running y triatlón en Brasil era innecesariamente difícil. Así que soy la clase de persona que, cuando se frustra por una herramienta que falta, simplemente se pone a construirla.

Y como me encanta un proyecto paralelo: hagámoslo.

![](./2026-04-image.png)

## El primer instinto: simplemente construir

Empecé HAID usando tecnología que conocía. Primer POC, estructurar el repo, hacer que funcionara la ingesta de datos desde Apple Health y Garmin, todo encajó rápido. Esa fase es pura dopamina para un desarrollador. Las ideas fluyen, las piezas encajan, la sensación de que todo es posible.

Necesitaba un punto de enfoque, así que elegí uno: **desafíos**. Yo y un grupo de amigos usábamos Gymrats para desafíos de fitness en grupo, y pensé que podía construir algo mejor. Me dio dirección e impulso, una funcionalidad concreta en torno a la cual organizarme en lugar de ahogarme en un mar de "¿no sería genial si…?".

Buen instinto. Mal momento.

## La apuesta temprana equivocada

Los desafíos son una funcionalidad social. Y las funcionalidades sociales necesitan personas.

Para que sean útiles, necesitas usuarios. Pero los usuarios no llegarán si no hay otros usuarios allí. El clásico dilema del huevo y la gallina. Aunque convenciera a cada una de las personas de mi red que hace ejercicio, eso son quizá unas pocas docenas de personas, y no es suficiente para una interacción significativa ni para datos útiles.

La idea de los desafíos no estaba equivocada para siempre. Pero estaba equivocada como primera palanca, porque dependía de resolver la distribución antes de que el producto se hubiera ganado la distribución. En ese momento no lo vi.

Solo necesitaba meter a algunas personas ahí dentro. ¿Qué tan difícil podía ser?

## Probando todo lo que se me ocurría

### Mi propia red

Todo el mundo te dice que empieces por tu propia red. Así que lo hice. Contacté con amigos, colegas y compañeros de entrenamiento. Algunos se unieron y fueron genuinamente útiles, probando funcionalidades, reportando bugs y dando feedback honesto. Les estoy agradecido.

¿Pero la mayoría? Leyeron el mensaje, lo ignoraron. O respondieron "¡sí, claro, le echo un vistazo!" y nunca lo hicieron.

Y está bien. La gente está ocupada. Mi proyecto paralelo no es su prioridad. Pero mentiría si dijera que no escoció un poco. Escoció.

Tenía un par de amigos cercanos, gente a la que he ayudado en el pasado con sus propias cosas, que me enviaron: "Sí tío, me lo descargo seguro". Nunca lo hicieron. Eso escuece distinto a que un desconocido te ignore.

### Contacto con influencers

Lo siguiente: contacto liderado por el fundador. Seguí a un montón de influencers más pequeños del mundo del running y el endurance. Envié mensajes personalizados y ofrecí el tier Pro de por vida. Casi ninguna respuesta y cero descargas.

Y lo entiendo, las plataformas sociales hoy en día se lo ponen difícil a la gente al azar para llegar a los creadores, lo cual es una funcionalidad, no un bug. Si yo fuera ellos, tampoco querría que desconocidos me spamearan. Pero te deja con una pregunta: si no es mi red y no son los influencers, entonces ¿cómo?

### Reddit

Sin presupuesto para anuncios. Sin conocimientos de marketing. ¿Dónde descubre la gente nuevos productos gratis?

Todo el mundo habla de hacerse viral en Reddit. Nunca lo había usado de verdad, pero pensé que valía la pena intentarlo. Investigué subreddits relacionados con el seguimiento de fitness, el running y los wearables. El objetivo era simple: compartir lo que estaba construyendo y pedir ayuda para probarlo.

Las pocas publicaciones que no fueron baneadas de inmediato recibieron… reacciones interesantes.

Muchos comentarios de odio. Gente siendo dura sin razón aparente, incluso cuando llegas con las mejores intenciones. Pero lo entiendo, esta era la internet que siempre supe que existía… solo que nunca había estado en el lado receptor antes. Soy una persona reservada. No me gusta la sobreexposición. Así que esto era territorio nuevo.

![](./2026-04-image-1.png)

Recibí eso mucho. Y maldita sea, se me metió bajo la piel. Llevo más de 15 años construyendo software profesionalmente. He lanzado productos usados por miles de personas en empresas reales, mucho antes de que existiera GPT. ¿Y ahora, porque estamos en 2026, todo lo que un desarrollador en solitario publica se descarta como basura generada por IA?

No me malinterpretes, uso IA. Me da un miedo de muerte y lo que va a hacerle a mi trabajo (*pero ese es tema para otro post*), pero detrás de esto hay 15 años de dedicación, aprendizaje, comprensión de compromisos, escalabilidad e investigación de seguridad. ¿Cómo se atreve el usuario PinkToe1994 a decir lo contrario? jajaja

Creo que al final lo gestioné razonablemente bien. Di un paso atrás, entendí las dinámicas, me di cuenta de que la gente en internet a menudo proyecta sus propias frustraciones, y seguí adelante. Algunos usuarios sí descargaron la app. Fue divertido ver aparecer a desconocidos al azar en mi base de datos. ¿Pero la tasa de conversión frente al coste emocional? No valió la pena el intento.

## La parte dolorosa es que la gente tenía algo de razón

Pero aquí está la cosa.

Enterrada bajo todo el ruido, había una señal útil. Recibí dos comentarios de feedback de Reddit y uno de un amigo cercano. Los tres decían esencialmente lo mismo:

**"¿Por qué me descargaría esto? ¿Qué es diferente aquí?"**

¿Y sinceramente? En ese momento, no había una buena respuesta.

Mi primera iteración de HAID era básicamente Apple Health + Strava + Garmin mezclados. Mi único argumento era "todo en un solo lugar", e incluso yo no estaba del todo convencido de que eso fuera suficiente.

Tenía grandes planes para la app. Podía ver la versión futura en mi cabeza. Y en mi ego, pensaba: *¡la gente solo necesita entender la visión! ¡Solo necesito usuarios que prueben el pipeline de datos!*

¿Pero por qué lo harían? Nadie me debe nada.

Me golpeó porque yo probablemente tampoco me la descargaría. Paso de largo ante anuncios de apps todos los días. ¿Por qué iba a ser diferente la demás gente?

No solo me faltaban usuarios. Me faltaba una razón para que a los usuarios les importara.

Esa es la lección.

Había confundido funcionalidad con valor.

## En qué se convirtió realmente HAID

Así que me senté y me obligué a responder la pregunta: ¿para qué *sirve* HAID? No qué podría llegar a ser algún día, sino para qué sirve ahora mismo que nada más hace.

HAID significa *How Am I Doing* (cómo me va). Y me di cuenta de que la respuesta a esa pregunta no debería venir solo de los datos del wearable. Debería venir del **contexto**.

A esto me refiero: me encanta viajar. Cuando viajo, mi entrenamiento se viene abajo. Mi carga de entrenamiento cae. Mi conteo de pasos cambia. Pero no soy un atleta profesional. Cuando viajo, como, bebo, me quedo despierto hasta tarde, disfruto de la vida. Ninguna app sabe eso. Y ninguna app usa esa información para realmente ayudarme. Algo tan simple como: "Estás viajando, disfrútalo, pero ¿qué tal una carrera suave esta semana?".

Lo mismo con las lesiones, el estrés, los cambios de vida. Estas cosas impactan directamente el entrenamiento y la recuperación, pero ninguna app de fitness las tiene en cuenta. Tu Garmin no sabe que te desgarraste un músculo, que tuviste una semana terrible en el trabajo, o que acabas de volver de vacaciones.

Piensa en las lesiones. Las apps registran la carga de entrenamiento, el TSS, todo eso, pero ¿de verdad te avisan de que vayas más despacio antes de que sea demasiado tarde? Imagina que la app pudiera ver el patrón: tres semanas estresantes, mal sueño y una carga de entrenamiento en aumento. Esa es la receta para una lesión. Y con suficientes usuarios compartiendo ese contexto, la prevención de lesiones se vuelve más inteligente con el tiempo.

El objetivo de HAID no es solo agregar datos, sino ayudar a responder una mejor pregunta: *¿cómo me va, de verdad?*

Una vez que aterricé en eso, las cosas empezaron a encajar.

![](./2026-04-image-2.png)

## Ahora empieza la parte difícil

Pensaba que estaba sobre todo intentando validar el pipeline de ingesta, la UX y las funcionalidades de desafíos. Pero lo que de verdad necesitaba validar era mucho más simple: ¿HAID ya le daba a la gente una razón para que le importara?

En esa etapa, la respuesta era no.

Eso fue duro de oír, pero también útil. Porque a partir de ese momento, HAID dejó de ser "un poco de Strava, un poco de Garmin, un poco de Apple Health" y empezó a convertirse en un producto con una idea más específica: ayudar a la gente a entender su fitness a través del contexto de la vida, no solo datos en bruto.

Construirlo era la parte que ya sabía hacer.

El crecimiento es la parte que estoy aprendiendo ahora.

* * *

*Si quieres ver lo que estoy construyendo: [haid.app](https://haid.app/)*

*Próximo post: cómo convertí un lío de ideas de funcionalidades en una hoja de ruta de producto real y lo que aprendí sobre el pensamiento de producto como ingeniero que nunca lo había hecho antes.*
