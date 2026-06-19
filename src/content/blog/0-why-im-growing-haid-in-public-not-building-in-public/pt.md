---
title: "0. Por que estou crescendo a HAID em público, e não construindo em público"
description: "Todo mundo está fazendo build in public. Threads no Twitter (perdão, X) sobre stacks de tecnologia, decisões de arquitetura, pipelines de deploy. Adoro ler essas coisas, mas não é disso que se trata aqui: é documentar o processo honesto de aprender a crescer do zero."
date: 2026-04-05T10:55:21.000Z
lang: pt
translationKey: 0-why-im-growing-haid-in-public-not-building-in-public
slug: 0-why-im-growing-haid-in-public-not-building-in-public
category: desenvolvimento
tags: []
wpId: 13487
cover: ./2026-04-IMG_9164.png
canonicalPath: /desenvolvimento/0-why-im-growing-haid-in-public-not-building-in-public/
needsReview: true
updated: 2026-04-05T11:03:35.000Z
---

## O gancho

Todo mundo está fazendo build in public. Threads no Twitter (perdão, X) sobre stacks de tecnologia, decisões de arquitetura, pipelines de deploy. Adoro ler essas coisas, mas não é disso que se trata aqui.

Sou engenheiro de software com mais de 15 anos de experiência. Já coloquei no ar produtos usados por milhares de pessoas muito antes de a IA fazer parte do vocabulário de alguém. Construir é a minha zona de conforto. Eu sei fazer isso. E sim, eu sei que build in public também tem a ver com receber feedback cedo, não com pedir literalmente para as pessoas escreverem o seu código. Mas fica comigo aqui.

Crescimento? Marketing? Fazer com que desconhecidos na internet se importem com algo que eu criei? Não faço a menor ideia de como fazer isso. E é exatamente sobre isso que esta série fala: documentar o processo honesto e bagunçado de um dev aprendendo a crescer do zero.

Isso também é uma volta à escrita pra mim. Um dos meus primeiros projetos paralelos foi o [marquesfernandes.com](http://marquesfernandes.com/), que hoje em dia é mais um portfólio do que um blog. Mas, naquela época, escrever me fazia bem. Me obrigava a pensar com mais profundidade, a aprender as coisas de verdade, e me dava um momento de mindfulness fazendo algo em que não sou lá muito bom. Depois de alguns anos sem escrever, senti que era hora de voltar.

Então aqui está a história até agora: como a [HAID](https://haid.app/) saiu de um projeto paralelo de um atleta frustrado para algo com uma direção de verdade, e por que a parte difícil só está começando agora.

## Por que a HAID existe

Sou corredor e triatleta, e por anos me frustrei com a mesma coisa: não existe um único lugar que eu possa chamar de casa pros meus dados de fitness.

O Strava é ótimo pra parte social. O Garmin Connect joga uma parede de dados em cima de você, com uma interface que continua tosca apesar das tentativas recentes de redesign. O Apple Health é limpo e acerta em algumas coisas, mas deixa de lado a camada social e motivacional que, pra mim, faz diferença. Cada app é excelente em uma coisa, nenhum em tudo, e nenhum deles realmente conversa com os outros de um jeito útil.

Eu já tinha coçado uma coceira parecida antes: construí o [apuama.com](https://apuama.com/) porque achar provas de corrida e triatlo no Brasil era difícil sem necessidade. Então eu sou o tipo de pessoa que, quando se frustra com uma ferramenta que não existe, simplesmente começa a construí-la.

E como eu amo um projeto paralelo: bora lá.

![](./2026-04-image.png)

## O primeiro instinto: só construir

Comecei a HAID usando a tecnologia que eu já conhecia. Primeiro POC, estruturar o repo, fazer a ingestão de dados funcionar a partir do Apple Health e do Garmin, tudo se encaixou rápido. Essa fase é pura dopamina pra um dev. As ideias fluindo, as peças se encaixando, aquela sensação de que tudo é possível.

Eu precisava de um ponto de foco, então escolhi um: **desafios**. Eu e um monte de amigos usávamos o Gymrats pra desafios fitness em grupo, e achei que conseguia fazer algo melhor. Isso me deu direção e impulso, uma funcionalidade concreta pra me organizar em vez de me afogar num mar de "não seria legal se…".

Bom instinto. Hora errada.

## A aposta inicial errada

Desafios são uma funcionalidade social. E funcionalidades sociais precisam de gente.

Pra serem úteis, você precisa de usuários. Mas os usuários não vêm se não houver outros usuários ali. O clássico problema do ovo e da galinha. Mesmo que eu convencesse cada pessoa da minha rede que se exercita, isso daria talvez algumas dezenas de pessoas, e não é o suficiente pra uma interação que faça sentido nem pra dados úteis.

A ideia dos desafios não estava errada pra sempre. Mas estava errada como primeira alavanca, porque dependia de resolver distribuição antes de o produto ter conquistado distribuição. Na hora eu não enxerguei isso.

Eu só precisava colocar algumas pessoas lá dentro. Quão difícil podia ser?

## Tentando tudo o que me veio à cabeça

### A minha própria rede

Todo mundo te diz pra começar pela sua própria rede. Então foi o que eu fiz. Falei com amigos, colegas e parceiros de treino. Alguns entraram e foram genuinamente prestativos, testando funcionalidades, reportando bugs e dando feedback honesto. Sou grato a eles.

Mas a maioria? Leu a mensagem, ignorou. Ou respondeu "ah, com certeza, vou dar uma olhada!" e nunca deu.

E tudo bem. As pessoas estão ocupadas. Meu projeto paralelo não é a prioridade delas. Mas eu estaria mentindo se dissesse que isso não doeu um pouquinho. Doeu.

Tive uns amigos próximos, gente que eu ajudei no passado com as próprias coisas, que me mandaram "Pode deixar, mano, vou baixar com certeza". Nunca baixaram. Esse tipo dói diferente de um desconhecido te ignorar.

### Contato com influenciadores

A próxima: contato liderado pelo fundador. Comecei a seguir um monte de influenciadores menores do mundo da corrida e do endurance. Mandei mensagens personalizadas e ofereci o tier Pro vitalício. Quase nenhuma resposta e zero downloads.

E eu entendo, as redes sociais hoje em dia dificultam pra qualquer um chegar nos criadores, o que é uma funcionalidade, não um bug. Se eu fosse eles, também não ia querer desconhecidos me enchendo de spam. Mas isso te deixa com uma pergunta: se não é a minha rede e não são os influenciadores, então como?

### Reddit

Sem verba pra anúncios. Sem conhecimento de marketing. Onde as pessoas descobrem produtos novos de graça?

Todo mundo fala de viralizar no Reddit. Eu nunca tinha usado de verdade, mas achei que valia a tentativa. Pesquisei subreddits relacionados a acompanhamento de fitness, corrida e wearables. O objetivo era simples: compartilhar o que eu estava construindo e pedir ajuda pra testar.

Os poucos posts que não foram banidos na hora receberam… reações interessantes.

Um monte de comentário de ódio. Gente sendo dura sem motivo aparente, mesmo quando você chega com a melhor das intenções. Mas eu entendo, essa era a internet que eu sempre soube que existia… eu só nunca tinha estado do lado de quem recebe antes. Sou uma pessoa reservada. Não curto superexposição. Então isso era território novo.

![](./2026-04-image-1.png)

Levei muito disso. E caramba, mexeu comigo. Faço software profissionalmente há mais de 15 anos. Já coloquei no ar produtos usados por milhares de pessoas em empresas de verdade, muito antes de o GPT existir. E agora, só porque é 2026, tudo o que um dev solo lança é descartado como lixo gerado por IA?

Não me entenda mal, eu uso IA. Tenho um medo da porra dela e do que ela vai fazer com o meu trabalho (*mas isso é assunto pra outro post*), mas tem 15 anos de cuidado, aprendizado, entendimento de tradeoffs, escalabilidade e pesquisa de segurança por trás disso. Como o usuário PinkToe1994 ousa dizer o contrário? hahaha

Acho que, no fim, lidei com isso razoavelmente bem. Dei um passo atrás, entendi as dinâmicas, percebi que as pessoas na internet muitas vezes estão projetando as próprias frustrações, e segui em frente. Alguns usuários de fato baixaram o app. Foi divertido ver desconhecidos aleatórios aparecendo no meu banco de dados. Mas a taxa de conversão comparada ao custo emocional? Não valeu a tentativa.

## A parte dolorosa é que as pessoas tinham um pouco de razão

Mas é o seguinte.

Enterrado debaixo de todo aquele barulho, tinha um sinal útil. Recebi dois feedbacks do Reddit e um de um amigo próximo. Os três diziam essencialmente a mesma coisa:

**"Por que eu baixaria isso? O que tem de diferente aqui?"**

E, sinceramente? Naquele momento, não havia uma boa resposta.

A minha primeira iteração da HAID era basicamente Apple Health + Strava + Garmin misturados. Meu único argumento era "tudo num lugar só", e nem eu estava totalmente convencido de que aquilo bastava.

Eu tinha grandes planos pro app. Conseguia ver a versão futura na minha cabeça. E, no meu ego, eu pensava: *as pessoas só precisam entender a visão! Eu só preciso de usuários pra testar o pipeline de dados!*

Mas por que elas iriam? Ninguém me deve nada.

Caiu a ficha porque eu provavelmente também não baixaria. Passo direto por anúncios de app todos os dias. Por que as outras pessoas seriam diferentes?

Não me faltava só usuários. Me faltava um motivo pros usuários se importarem.

Essa é a lição.

Eu tinha confundido funcionalidade com valor.

## No que a HAID de fato se transformou

Então eu sentei e me obriguei a responder a pergunta: pra que a HAID *serve*? Não o que ela poderia ser um dia, mas pra que ela serve agora mesmo que nada mais faz.

HAID significa *How Am I Doing* (como eu estou indo). E percebi que a resposta pra essa pergunta não deveria vir só dos dados do wearable. Deveria vir do **contexto**.

É isto que quero dizer: eu amo viajar. Quando estou viajando, meu treino despenca. Minha carga de treino cai. Minha contagem de passos muda. Mas eu não sou um atleta profissional. Quando viajo, eu como, bebo, fico acordado até tarde, aproveito a vida. Nenhum app sabe disso. E nenhum app usa essa informação pra realmente me ajudar. Algo tão simples quanto: "Você está viajando, aproveita, mas que tal uma corrida leve essa semana?".

A mesma coisa com lesões, estresse, mudanças na vida. Essas coisas impactam diretamente o treino e a recuperação, mas nenhum app de fitness leva isso em conta. O seu Garmin não sabe que você estirou um músculo, teve uma semana terrível no trabalho ou acabou de voltar de férias.

Pensa em lesões. Os apps registram carga de treino, TSS, tudo isso, mas será que eles realmente te avisam pra desacelerar antes que seja tarde demais? Imagina se o app conseguisse enxergar o padrão: três semanas estressantes, sono ruim e uma carga de treino subindo. Isso é receita pra lesão. E com usuários o bastante compartilhando esse contexto, a prevenção de lesões fica mais inteligente com o tempo.

O objetivo da HAID não é só agregar dados, mas ajudar a responder uma pergunta melhor: *como eu estou indo, de verdade?*

Quando cheguei nisso, as coisas começaram a se encaixar.

![](./2026-04-image-2.png)

## Agora começa a parte difícil

Eu achava que estava, acima de tudo, tentando validar o pipeline de ingestão, a UX e as funcionalidades de desafio. Mas o que eu realmente precisava validar era bem mais simples: a HAID já dava às pessoas um motivo pra se importarem?

Naquele estágio, a resposta era não.

Foi difícil de ouvir, mas também foi útil. Porque, a partir dali, a HAID deixou de ser "um pouco de Strava, um pouco de Garmin, um pouco de Apple Health" e começou a virar um produto com uma ideia mais específica: ajudar as pessoas a entender o próprio fitness através do contexto da vida, não só dos dados brutos.

Construir era a parte que eu já sabia fazer.

Crescer é a parte que estou aprendendo agora.

* * *

*Se você quiser dar uma olhada no que estou construindo: [haid.app](https://haid.app/)*

*Próximo post: como transformei uma bagunça de ideias de funcionalidade num roadmap de produto de verdade e o que aprendi sobre pensamento de produto como um engenheiro que nunca tinha feito isso antes.*
