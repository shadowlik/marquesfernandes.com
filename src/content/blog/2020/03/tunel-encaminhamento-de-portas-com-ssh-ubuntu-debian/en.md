---
title: Tunnel/Port Forwarding with SSH - Ubuntu/Debian
description: Using the SSH protocol to forward ports to a server with external
  web access, we call this the SSH Tunnel.
date: 2020-03-21T19:26:17.000Z
lang: en
translationKey: tunel-encaminhamento-de-portas-com-ssh-ubuntu-debian
slug: tunnel-port-forwarding-with-ssh-ubuntu-debian
category: development
tags: []
wpId: 11967
canonicalPath: /en/development/tunnel-port-forwarding-with-ssh-ubuntu-debian/
needsReview: false
updated: 2021-12-12T11:15:55.000Z
---

I recently ran into a problem creating a web server at home using an old computer, so I decided to write about the [Carrier Grade NAT (CGNAT)](http://marquesfernandes.com/2019/03/07/o-que-e-cgnat-double-nat/) , which is what makes port routing and external access to home web servers/services impossible. Fortunately there is a way around this situation using the protocol [ssh](https://pt.wikipedia.org/wiki/Secure_Shell) to forward ports to a server with external web access, we call it [SSH Tunnel.](https://www.ssh.com/ssh/tunneling/example)

## prerequisites

-   Open SSH installed on your local machine
-   [Web server with external access to internet and SSH Server installed](https://m.do.co/c/6bc37502c1d9)

## Starting...

You have a web server on your computer at home and you would like to be able to access it outside your local network, for that you will need to have some machine that has external access, for example, a basic droplet on the [digitalocean](https://m.do.co/c/6bc37502c1d9) (5 monthly doletas) that already comes with SSH installed and enabled by default, you can also consult the services of the [Amazon](https://aws.amazon.com/pt/) and [Google cloud](https://cloud.google.com/?&utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-bkws-all-all-trial-e-dr-1008075-LUAC0010101&utm_content=text-ad-none-none-DEV_c-CRE_380746899544-ADGP_BKWS+%7C+Multi+~+GCP-KWID_43700047045899971-kwd-155951229-userloc_1001773&utm_term=KW_gcp-ST_GCP&gclid=Cj0KCQjw9tbzBRDVARIsAMBplx-vPL2bYpnbkP49E7n_QpkMwSEJ0VbcLbssHOeHDUbDZuOhIjEbMUoaAmAHEALw_wcB&gclsrc=aw.ds) , they offer some free limits and even a starting credit to use.

In order not to cause confusion, in this tutorial whenever I refer to a server, I'm talking about the machine that has an IP with external access, that is, the machine created in some cloud provider as mentioned above.

## Setting up the SSH server

Assuming you are using a linux server, Ubuntu for example, we will need to edit some settings in the file /etc/ssh/sshd\_config, look for the line containing the properties AllowTcpForwarding and GatewayPorts for yes . And then you will need to restart the SSH server:

sudo systemctl restart sshd
sudo service sshd restart

## Forwarding Remote Ports

Imagine that you have a server at home and you need to access it externally, outside of your local network. For this we are going to use the functionality of "Remote Port Forwarding", basically we are going to create a tunnel, a connection with the computer that we want to have external access on the server that has external access, this server will act with what we call a proxy, it it will only receive and route requests through this tunnel. For this we will use the following command:

$ ssh -R remote\_port:local\_address:local\_port user@externalserver.com

So, assuming we have our web server running on port 6060 and making this server accessible via port 8080 on the external server, we would use the following command:

$ ssh -R 8080:localhost:6060 henrique@marquesfernandes.com

If everything works out, now when we access the server via the URL marquesfernandes.com:8080 (it could also be an IP), the request will be routed to port 6060 of the local machine and the response returned to the user.

## Forwarding Local Ports

Imagine that you have a MySQL database on your office network that only allows local connections, and you want to access that database through a local port on your computer. We use the following command:

ssh -L 4000:127.0.0.1:3306 user@example.com

This will make a call to the port `4000` in your computer. Any request arriving at this port will be forwarded to the port `3306` from the external server, you can now connect your MySQL client locally on port 4000.

## Auto SSH

If you want to keep your SSH Tunnel always active, restarting in case of disconnection, use the program [Auto SSH](https://www.everythingcli.org/ssh-tunnelling-for-fun-and-profit-autossh/) . It lets you monitor SSH tunnels and takes care of all the work of restarting in case of a crash, you can even leave it running as a service on your machine for maximum persistence.
