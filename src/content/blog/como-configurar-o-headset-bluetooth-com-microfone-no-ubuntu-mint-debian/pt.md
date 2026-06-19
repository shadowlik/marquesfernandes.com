---
title: Como configurar o headset bluetooth com microfone no Ubuntu, Mint (Debian)
description: Se você usa ou acabou de migrar para o ambiente linux,
  especialmente nas distros Ubuntu ou Mint, derivados do Debian, você pode
  encontrar problemas com o microfone do seu headset bluetooth.
date: 2021-04-02T09:26:15.000Z
lang: pt
translationKey: como-configurar-o-headset-bluetooth-com-microfone-no-ubuntu-mint-debian
slug: como-configurar-o-headset-bluetooth-com-microfone-no-ubuntu-mint-debian
category: tecnologia
tags:
  - linux
  - ubuntu
  - debian
  - mint
  - bluetooth
  - headset
  - fone
  - ofono
  - pulseaudio
wpId: 11380
canonicalPath: /tecnologia/como-configurar-o-headset-bluetooth-com-microfone-no-ubuntu-mint-debian/
needsReview: false
updated: 2021-12-10T08:19:46.000Z
---

Se você usa ou acabou de migrar para o ambiente linux, especialmente nas distros Ubuntu ou Mint, derivados do Debian, você pode encontrar problemas com o microfone do seu headset bluetooth.

Especialmente agora durante a pandemia, as famosas call (videoconferência) fazem cada vez mais parte do nosso cotidiano. Então você resolveu comprar aquele fone bluetooth bacana pra usar e quando conectou o seu microfone não funcionou? Não se preocupe, existe uma maneira de conseguir fazer o microfone do seu headset bluetooth funcionar no linux.

Esse tutorial foi testado com fones da JBL e Air Pods, mas ele deverá funcionar para a maioria dos casos.

## Ativando o microfone do headset bluetooth

Para que o headset consiga funcionar corretamente com o microfone, você precisará habilitar o perfil de áudio HSP/HFP. Porém, por padrão, o [pulseaudio](https://wiki.archlinux.org/index.php/PulseAudio_\(Portugu%C3%AAs\)#:~:text=PulseAudio%20%C3%A9%20um%20software%20livre,GNU%20Lesser%20General%20Public%20License.) (servidor de som embarcado nessas distribuições do linux) só oferece suporte para o HSP. Para fazer o HSP/HFP funcionar, precisamos habilitar o HFP no pulseaudio e para isso vamos utilizar o serviço [ofono](https://en.wikipedia.org/wiki/OFono).

1\. Instale o `ofono`

$ sudo apt install ofono

2\. Configure o `pulseaudio` para usar o `ofono`  
Edite o arquivo `/etc/pulse/default.pa` , encontre a linha `load-module module-bluetooth-discover` e mude para `load-module module-bluetooth-discover headset=ofono`

3\. Adicione o usuário `pulse` ao grupo `bluetooth` para que ele tenha as permissões necessárias

$ sudo usermod -aG bluetooth pulse

4\. Edite e adicione as permissões no arquivo `/etc/dbus-1/system.d/ofono.conf` adicione o código abaixo logo antes do fechamento `</busconfig>`

<policy user="pulse">
    <allow send\_destination="org.ofono"/>
</policy>

5\. Para fazer o ofono funcionar é necessário fornecer um modem para ele. E para isso vamos instalar um emulador de modem chamado [phonesim](https://packages.debian.org/stretch/devel/ofono-phonesim) que será implementado pelo ofono para funcionar. Instale o `ofono-phonesim`:

$ sudo add-apt-repository ppa:smoser/bluetooth
$ sudo apt-get update
$ sudo apt-get install ofono-phonesim

6\. Configure o `phonesim` adicionando as seguintes linhas no arquivo `/etc/ofono/phonesim.conf`

\[phonesim\]
Driver=phonesim
Address=127.0.0.1
Port=12345

Agora, reinicie o serviço ofono:

$ sudo systemctl restart ofono.service

7\. Agora precisamos definir e habilitar alguns serviços para iniciar o ofono-phonesim como serviço.

Para executar `ofono-phonesim -p 12345 /usr/share/phonesim/default.xml` na inicialização do sistema, crie como root o arquivo `/etc/systemd/system/ofono-phonesim.service` com o seguinte conteúdo:

\[Unit\]
Description=Run ofono-phonesim in the background

\[Service\]
ExecStart=ofono-phonesim -p 12345 /usr/share/phonesim/default.xml
Type=simple
RemainAfterExit=yes

\[Install\]
WantedBy=multi-user.target

Depois que o `ofono-phonesim` for executado, você também precisará habilitar e colocar o modem phonesim online.

Para isso vamos usar o código de um [repositório](http://git.kernel.org/pub/scm/network/ofono/ofono.git) git:

$ cd /tmp
$ git clone git://git.kernel.org/pub/scm/network/ofono/ofono.git
$ sudo mv ofono /opt/

Agora você pode habilitar e tornar o modem phonesim online criando outro serviço do que depende do serviço ofono-phonesim.Novamente, crie um novo arquivo de serviço como root o arquivo em `/etc/systemd/system/phonesim-enable-modem.service` e coloque o seguinte conteúdo:

\[Unit\]
Description=Enable and online phonesim modem
Requires=ofono-phonesim.service

\[Service\]
ExecStart=/opt/ofono/test/enable-modem /phonesim
ExecStart=/opt/ofono/test/online-modem /phonesim
Type=oneshot
RemainAfterExit=yes

\[Install\]
WantedBy=multi-user.target

Em seguida, execute os seguintes comandos para habilitar e executar os dois daemons:

$ sudo systemctl daemon-reload
$ sudo systemctl enable ofono-phonesim.service
$ sudo systemctl enable phonesim-enable-modem.service
$ sudo service phonesim-enable-modem start

Verifique se tudo ocorreu como esperado e se o serviço está sendo executado:

$ sudo service phonesim-enable-modem status

8\. Por fim, reinicie o `pulseuadio`:

$ pulseaudio -k.

![](/wp-content/uploads/2021/04/image.jpg)

Agora você já deve conseguir enxergar o seu headset como dispositivo de input na parte de configuração de som. Existe uma certa instabilidade nesse setup, de vez em quando pode ser que o seu fone de uma desconfigurada ou a troca de perfil de áudio não funcione, quando isso ocorrer, reinicie os serviços como descrito acima e também o pulseaudio.
