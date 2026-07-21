---
title: Containers and Docker - What is it and what is it for?
description: "Disruptive technologies that change the market and the way we know
  how to develop do not stop emerging, currently we can highlight one of them:
  Containers. They revolutionized the way we interact with our applications from
  development through deployment into production. First of all, we need to
  understand that containers are the technology and Docker would be the
  platform, the execution environment for this technology."
date: 2020-04-05T19:11:22.000Z
lang: en
translationKey: conteineres-e-docker-o-que-e-e-para-que-serve
slug: containers-and-docker-what-and-what-it-is-what-for
category: technology
tags: []
wpId: 11941
canonicalPath: /en/technology/containers-and-docker-what-and-what-it-is-what-for/
needsReview: false
updated: 2021-12-12T11:16:00.000Z
---

Disruptive technologies that change the market and the way we know how to develop do not stop emerging, currently we can highlight one of them: Containers. They revolutionized the way we interact with our applications from development through deployment into production.

First of all, we need to understand that containers are the technology and Docker would be the platform, the execution environment for that technology.

## Container Concept

Containers are a standardized unit of software that encompasses and packages all code and its dependencies, enabling a fast and reliable way to run applications on different ecosystems (machines).

Imagine the following, an application can be made in several programming languages, be it Java, JavaScript, Python, and it can also have several system dependencies, a library needed to improve performance, convert images and so on… This creates a whole dependency cycle for your application, that is, if someone needs to start developing or even deploying in another environment, all these dependencies need to be pre-installed. The solution found by many companies was to create virtual machines (VMs), with the necessary settings inside a VM image, thus being portable and only necessary to install the virtualization software and share the VM image and the developer was ready to to start. Now things start to get a little confusing, because theoretically this is more or less the solution covered by containers, encapsulating the code inside an image that later becomes a container and runs in the runtime environment (Docker, for example).

Now you might be wondering, but why then should I use container and not virtual machines? Why such popularity if they do the same thing? To answer this we need to understand the differences between a VM and a Container.

### Virtual Machines vs Containers

Virtual machines are designed to run software on top of a physical server, which in turn emulates a particular piece of hardware. A hypervisor, a virtual machine monitor, is the software, firmware, and hardware that creates and runs VMs. That's what gets between the hardware and the virtual machine, and is needed to virtualize the machine. Each virtual machine runs an operating system, and each has its own binaries, libraries, and applications, so VMs can be gigabytes in size.

By contrast, containers all run on top of the same operating system, sharing their kernel and usually binaries and libraries as well. Making these containers light weight and requiring less physical machine resources, making them more portable.

![Virtual Machines vs Containers ](https://blog.netapp.com/wp-content/uploads/2016/03/Screen-Shot-2018-03-20-at-9.24.09-AM-1024x548.png)

Image: [Netapp Blog](https://blog.netapp.com/blogs/containers-vs-vms/)

The following table shows some of the similarities and differences of these technologies:

|  | Virtual machine | Containers |
| --- | --- | --- |
| Isolation | Provides complete isolation from the host operating system and other VMs. | It typically provides lightweight isolation from the host and other containers, but does not provide as strong a security boundary as a VM. |
| Operational system | Runs a complete operating system, including the kernel, requiring more system resources (CPU, memory and storage). | Runs the user-mode part of an operating system and can be customized to contain only the services needed by your app, using less system resources. |
| OS compatibility | Run virtually any operating system inside the virtual machine | Linux containers can run on top of any operating system, while Windows containers need to run on top of the same hosted Windows version |
| Operating system updates and upgrades and dependencies | Requires manual update of each VM. | It is usually enough to just update the container image file to a new version. |
| Storage | Typically uses one virtual hard disk (VHD) for local storage per VM. | Uses host disk, sharing folders across volumes. |
| Network | Use virtual network adapters. | It uses an isolated instance of a virtual network adapter providing a little less virtualization, the host firewall is shared with containers, for example. |

I hope that I have understood a little of the differences of each one and why the popularization of containers for development environments.

## So what is Docker?

Now that we understand what a container is and why it exists, let's go to Docker, which has become the industry standard service for implementing this technology.

**docker** is container software from the company Docker, Inc, currently provides an abstraction and automation layer for Windows and Linux operating system virtualization.

Docker Inc. was founded by Solomon Hykes and Sebastien Pahl during the Y Combinator Summer 2010 startup incubator group and launched in 2011. Its technology debuted to the public in Santa Clara at PyCon in 2013 and released as open source.

Its popularization was due to the adoption by large companies and by the entire development ecosystem that was created. Several tools tangent to containers are available to facilitate development and deployment in production environments. The main tools and components are:

**Registry** : The docker registry is a repository that allows you to upload and download Docker images. These images can be public or private, the vast majority of applications centralize their images in this repository.

**docker daemon (dockerd)** : is a persistent background process that manages Docker containers and manipulates container objects.

**Docker Compose** : A tool for developing and running multiple containers. It uses YAML files to configure the application's services and performs the process of creating and initializing all containers with a single command. This makes development much easier, with just one command we can upload our application and any other external dependencies, for example, a database.

**Docker Swarm** : Tool to monitor and manage multiple containers in a clustered environment, basically it acts as the container manager, taking care of health, deploys and other nuances. While currently the industry standard is Kubernetes, it was the forerunner of Docker container management.

## Conclusion

Now that we've learned what containers are and what Docker is, I recommend that you start studying this technology, most companies already use or are looking to adapt to this new form of development. It definitely makes life easier for developers, today I can't imagine developing without using Docker.

**Check out:** [Optimized development in NodeJS with Typescript, Docker and ESlint](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/)
