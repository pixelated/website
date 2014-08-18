---
layout: default
--- 
      
# Pixelated is an Open Source secure email solution.

There are a few things you can do with Pixelated:

* Setup your own secure mail provider using the <a href="http://github.com/pixelated-project/pixelated-platform">Pixelated Platform</a>
* Connect to a secure mail provider through a self-hosted web client - the <a href="http://github.com/pixelated-project/pixelated-user-agent">Pixelated User Agent</a>
* Setup an enterprise secure mail solution by combining the Pixelated Plataform and User Agent with the <a href="http://github.com/pixelated-project/pixelated-dispatcher">Pixelated Dispatcher</a>


## Getting Started

### Developing

#### Pixelated User Agent Web-Ui

Starting with the User Agent is probably a good idea. First create a fork of the <a href="http://github.com/pixelated-project/pixelated-user-agent">github repo</a>. Now that you have the code, let’s talk architecture a bit:

* There are two main components - the ‘web-ui’ and a ‘service’. They talk REST to each other. The way to develop this is to start both components. To start the web-ui you must have node.js, npm and ruby 2.1.2 installed. Then run:


{% highlight bash %}
cd web-ui
npm install # to install grunt and all the build dependencies
node_modules/bower/bin/bower install # to install the js libraries
bundle install # to install compass and sass
./go watch # to start serving the javascript 
{% endhighlight bash %}

* The ‘service’ part is where the REST api is implemented. The web-ui was first developed using a fake-service that can still be used to develop new features. It is also used as the service for running functional (selenium) tests. To start it do:


{% highlight bash %}
cd fake-service
bundle install # install the fake service dependencies
./go server:start # to start the server
curl -d '' http://localhost:4567/control/mailset/mediumtagged/load # to load a set of mails
{% endhighlight bash %}


* Now if you hit http://localhost:4567/ you should see the user agent up and running
* To run the tests run:

{% highlight bash %}
./go test
{% endhighlight bash %}


### Pixelated User Agent Service

Developing with a fake service is fun but it isn’t enough. The ‘service’ folder in the User Agent is where the real service lives, the one that will talk to the LEAP provider to send and receive encrypted mails. To use it, you’ll need an account in a LEAP provider and will also need to download the LEAP provider certificates and put them inside the <strong>‘service/leap’</strong> folder. You also must configure the application to use your account credentials - you can do that by changing the <strong>‘service/adapter/mail_service.rb’</strong> file.

Once that is done you must install the dependencies. We use python’s <strong>virtualenv</strong> when developing to keep things clean. Once you ready to install the dependencies, run:

{% highlight bash %}
cd service
pip install -r requirements.txt 
{% endhighlight bash %}

To run the server you can run:

{% highlight bash %}
./go
{% endhighlight bash %}

To run the tests run:

{% highlight bash %}
./runtests
{% endhighlight bash %}
