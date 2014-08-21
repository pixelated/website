---
layout: default
--- 
      
# Pixelated is a secure* Open Source email solution
<sup>* We want to build a solution for the masses, not to make communication secure against all known and unknown adversaries.</sup>

There are a few exciting things you can do with Pixelated:

* Setup your own secure mail provider using the <a href="http://github.com/pixelated-project/pixelated-platform">Pixelated Platform</a>

* Connect to a secure mail provider through a self-hosted web client - the <a href="http://github.com/pixelated-project/pixelated-user-agent">Pixelated User Agent</a>
* Setup an enterprise secure mail solution by combining the Pixelated Platform and User Agent with the <a href="http://github.com/pixelated-project/pixelated-dispatcher">Pixelated Dispatcher</a>


## Key Features
* Compelling web-based user interface with fast search and tagging instead of folders
* An organisation setup that requires no software to be installed by the end user
* End-to-End encryption with maximum compatibility with existing solutions (i.e. use of PGP, SMTP/TLS)
* Developed with usability for administrators in mind: installing and maintaining Pixelated as frictionless as possible
* Built on the <a href="https://leap.se">LEAP Platform</a>
* Source code available on Github under AGPL license

## Why Pixelated
* Mass surveillance
Email communication in particular can be subject to dragnet surveillance. If we can achieve widespread use of secure communication, it will be too costly to routinely intercept the majority of communication on the internet. This does not mean that a motivated adversary will not be able to intercept specifically targeted communication, but it should end mass surveillance on the scale we have to endure today.

* Centralisation
In the current context, there is a high degree of concentration with regards to where this information officially sits. If we can make it easy (as it was in the early days of the public Internet) for organisations to host communication infrastructure, there will be less dependency on the major service providers, making it harder to obtain or compromise individual’s communication.


## Try it

**Demo coming soon**
  
    
## Developing

### Pixelated User Agent 
**Starting with the User Agent is probably a good idea.**

* First create a fork of the <a href="http://github.com/pixelated-project/pixelated-user-agent">github repo</a>. Now that you have the code, let’s talk architecture a bit:

* There are two main components - the ‘web-ui’ and a ‘service’. They talk REST to each other. The way to develop this is to start both components. To start the web-ui you must have node.js, npm and ruby 2.1.2 installed. Then run:

        cd web-ui
        npm install # to install grunt and all the build dependencies
        node_modules/bower/bin/bower install # to install the js libraries
        bundle install # to install compass and sass
        ./go watch # to start serving the javascript


* The ‘service’ part is where the REST api is implemented. The web-ui was first developed using a fake-service that can still be used to develop new features. It is also used as the service for running functional (selenium) tests. To start it do:

        cd fake-service
        bundle install # install the fake service dependencies
        ./go server:start # to start the server
        curl -d '' http://localhost:4567/control/mailset/mediumtagged/load # to load a set of mails

* Now if you hit http://localhost:4567/ you should see the user agent up and running
* To run the tests run:

        ./go test


#### Pixelated User Agent Service

* Developing with a fake service is fun but it isn’t enough. The ‘service’ folder in the User Agent is where the real service lives, the one that will talk to the LEAP provider to send and receive encrypted mails. To use it, you’ll need an account in a LEAP provider and will also need to download the LEAP provider certificates and put them inside the <strong>‘service/leap’</strong> folder. You also must configure the application to use your account credentials - you can do that by changing the <strong>‘service/adapter/mail_service.rb’</strong> file.

* Once that is done you must install the dependencies. We use python’s <strong>virtualenv</strong> when developing to keep things clean. Once you are ready to install the dependencies, run:

        cd service
        pip install -r requirements.txt

* To run the server you can run:

       ./go

* To run the tests run:

       ./runtests

### Pixelated Dispatcher

**Or how to run multiple single user agents on a server**

* The pixelated-dispatcher allows you to run multiple instances of an application that had been designed for a single user, hence the name pixelated-dispatcher. Aside from managing the different instances it also provides a login form to restrict access to individual agents.

The pixelated-dispatcher is based on a combination of two deamons to provide the service.

* __pixelated-dispatcher proxy__

    The proxy is the user facing part and the service you access when connecting to https://localhost:8080/.
    It handles authentication and acts as a proxy for the agents. The intention is for this daemon to give up on
    all unnecessary privileges as soon as possible.


The entire user agent management is delegated to:

* __pixelated-dispatcher server__

    The server is not accessible from the web and is responsible for managing the lifecycle of the instances.
    It provides a RESTful API to create/start/stop/delete/... agents. It uses [docker](https://github.com/dotcloud/docker)
    to isolate the agents from each other and to provide the necessary runtime environment.


__Setting up the Development Environment__

* As the default provider is based on docker you need a running docker daemon somewhere. So you have to set
DOCKER_HOST to the according value, e.g.

        export DOCKER_HOST=tcp://192.168.59.103:2375
    
* If you are working on OS X, we recommend [boot2docker](http://boot2docker.io/) as there is no native docker support.

* To setup a dev environment, call:

        git clone git@github.com:pixelated-project/pixelated-dispatcher.git
        virtualenv pixelated_dispatcher_venv   # or created elsewhere
        source pixelated_dispatcher_venv/bin/activate
        cd pixelated-dispatcher
        pip install -r requirements.txt
    
        python setup.py test


