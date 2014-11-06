---
layout: default
--- 

Developing
==========

**Pixelated is in early development state! Things may not work to their full extend, yet.** 

General Architecture
--------------------
**Pixelated consists of the following three core elements**

>### 1. Pixelated User Agent 
>The User Agent is composed of a web UI (JavaScript single page app) and a service that provides a REST-ful interface that the UI can use for all User Agent actions. 

>### 2. Pixelated Dispatcher
>The Dispatcher allows to run multiple User Agent instances (agents) on a server. Aside from managing the different instances it also provides a login form to restrict access to the individual agents.

>### 3. Pixelated Platform 
>The Plattform holds the installation scripts for the Pixelated components. It is the objective of the Pixelated Platform to provide a simple to install and maintain mail server based on the LEAP Platform.


Getting started
---------------

>### 1. Pixelated User Agent
 
>**Starting with the User Agent is probably a good idea.**

* First create a fork of the <a href="https://github.com/pixelated-project/pixelated-user-agent">Pixelated User Agent repo</a>.

* For a Quickstart, dependencies are: node, npm, ruby, bundle, virtualenv, git. Once you have that, run:

        curl https://raw.githubusercontent.com/pixelated-project/pixelated-user-agent/master/install-pixelated.sh | /bin/bash

>**Now that you have the code, let’s talk architecture a bit:**

>There are two main components that talk REST to each other. The way to develop this is to start both components.

>  1. __The pixelated-user-agent web-ui__
* The Web UI is the HTML, CSS and JS files served to the browser.
  2. __A pixelated-user-agent service__
* The Service component, which is the web service that serves the Web Ui to the browser, provides the REST API which the Web Ui uses, and integrates with the LEAP or Pixelated provider.
  
>**Hooked? For more detail on setting things up visit <a href= "https://github.com/pixelated-project/pixelated-user-agent">Github: Pixelated User Agent</a>**


>### 2. Pixelated Dispatcher

>**Or how to run multiple user agents on a server**

* Here is where you can create a fork of the <a href="https://github.com/pixelated-project/pixelated-dispatcher">Pixelated-Dispatcher repo</a>.

* The pixelated-dispatcher allows you to run multiple instances of an application that had been designed for a single user, hence the name pixelated-dispatcher. Aside from managing the different instances it also provides a login form to restrict access to individual agents.

* For a Quickstart, the repository contains a Vagrantfile that sets up a running pixelated-dispatcher installation within a virtual machine. Just run:
 
         vagrant up
         vagrant ssh
 
         # It takes some time to initialize the docker containers so wait until there is no docker job running for
         # a few minutes:
         docker ps  # list running docker processes
 
         cd /vagrant
         
>**The pixelated-dispatcher is based on a combination of two deamons to provide the service.**

* __pixelated-dispatcher proxy__

    The proxy is the user facing part and the service you access when connecting to https://localhost:8080/.
    It handles authentication and acts as a proxy for the agents. The intention is for this daemon to give up on
    all unnecessary privileges as soon as possible.


>The entire user agent management is delegated to:

* __pixelated-dispatcher manager__

    The manager is not accessible from the web and is responsible for managing the lifecycle of the instances.
    It provides a RESTful API to create/start/stop/delete/... agents. It uses [docker](https://github.com/dotcloud/docker)
    to isolate the agents from each other and to provide the necessary runtime environment.

        
>**To set up your full-fledged dispatcher development environment visit <a href="https://github.com/pixelated-project/pixelated-dispatcher">Github: pixelated-dispatcher.</a>** 


>### 3. Pixelated Platform

* It is the objective of the Pixelated Platform to provide a simple to install and maintain mail server based on the LEAP Platform.

* Bare with us: we are not quite there, yet, with our Images. Stay tuned, there's more to come on <a href="https://github.com/pixelated-project/pixelated-platform">Github: pixelated-platform.</a>

>**In the meantime we recommend checking out <a href="https://leap.se/en">the LEAP project</a>!**
