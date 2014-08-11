# Pixelated is an Open Source secure email solution.  

There are a few things you can do with Pixelated:

- Setup your own secure mail provider using the [Pixelated Platform](http://github.com/pixelated-project/pixelated-platform)
- Connect to a secure mail provider through a self-hosted web client - the [Pixelated User Agent](http://github.com/pixelated-project/pixelated-user-agent)
- Setup an enterprise secure mail solution by combining the Pixelated Plataform and User Agent with the [Pixelated Dispatcher](http://github.com/pixelated-project/pixelated-dispatcher)

__________________

## Getting Started

### Developing

#### Web-Ui
Starting with the User Agent is probably a good idea. First create a fork of the [github repo](http://github.com/pixelated-project/pixelated-user-agent). Now that you have the code, let's talk architecture a bit:

* There are two main components - the 'web-ui' and a 'service'. They talk REST to each other. The way to develop this is to start both components. To start the web-ui you must have node.js, npm and ruby 2.1.2 installed. Then run:

    cd web-ui
    npm install # to install grunt and all the build dependencies
    node_modules/bower/bin/bower install # to install the js libraries
    bundle install # to install compass and sass
    ./go watch # to start serving the javascript 

* The 'service' part is where the REST api is implemented. The web-ui was first developed using a fake-service that can still be used to develop new features. It is also used as the service for running functional (selenium) tests. To start it do:

    cd fake-service
    bundle install # install the fake service dependencies
    ./go server:start # to start the server
    curl -d '' http://localhost:4567/control/mailset/mediumtagged/load # to load a set of mails

* Now if you hit http://localhost:4567/ you should see the user agent up and running

* To run the tests run:

    ./go test

### LEAP service

Developing with a fake service is fun it isn't the goal for pixelated. The 'service' folder in the User Agent is where the real service lives, the one that will talk to the LEAP provider to send and receive encrypted mails. To use it, you'll need an account in a LEAP provider and will also need to download the LEAP provider certificates and put them inside the **'service/leap'** folder. You also must configure the application to use your account credentials - you can do that by changing the **'service/adapter/mail\_service.rb'** file.

Once that is done you must install the dependencies. We use python's **virtualenv** when developing to keep things clean. Once you ready to install the dependencies, run:

    cd service
    pip install -r requirements.txt 

To run the server you can run:

    ./go

To run the tests run:

    ./runtests
