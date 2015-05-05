---
layout: faq
title: Getting Started with Pixelated
---
Pixelated: Getting Started
======================

Do you want to start using Pixelated? Read on to figure out how to begin. Different kinds of users will need different components of the system.

#### EMAIL Users
So you just want to use awesome encrypted email? 
All you have to do is find a Pixelated provider:

> *We are not yet in production mode. Just be a little patient -- there will be Pixelated providers available soon!*
>
> In the meantime, you can <a target="_blank" href="http://try.pixelated-project.org:8080">try Pixelated on our test server</a>


#### ACTIVISTS and other high-risk email users
Do you want to use Pixelated but, due to your personal threat model, you are not comfortable with having your private key stored on the provider’s server?

You need to install: <a target="_blank" href="https://github.com/pixelated-project/pixelated-user-agent">Pixelated User Agent</a>: run it on localhost and connect to your Pixelated Provider

#### SYSADMINS or tech-savvy people

Do you want to set up a Pixelated email provider for your friends, an organization, or something similar?

You need to set up: <a target="_blank" href="https://github.com/pixelated-project/pixelated-platform">platform</a> (which brings along the <a target="_blank" href="https://github.com/pixelated-project/pixelated-dispatcher">dispatcher</a> and the <a target="_blank" href="https://github.com/pixelated-project/pixelated-user-agent">user Agent</a> as a Webmail interface)

#### DEVELOPERS and contributors

You want to help develop the User Agent and always wanted to work with FlightJS or a Python Webapp?
<a target="_blank" href="https://github.com/pixelated-project/pixelated-user-agent">Start here</a>

You want to help develop the Dispatcher, because you love Javascript and Python backend development?
<a target="_blank" href="https://github.com/pixelated-project/pixelated-dispatcher">Start here</a>

You want to help develop the Pixelated Platform and get all excited about infrastructure as code and Puppet?
<a target="_blank" href="https://github.com/pixelated-project/pixelated-platform">Start here</a>

<br />

A Guide to Pixelated Components
===============================

Pixelated consists of a number of components, each of which plays a different role.

### User Agent
The **User Agent** is the user-facing piece of Pixelated. It consists of a single-page webapp (since users are most accustomed to using webmail as opposed to a locally installed email client) and provides a RESTful API. The User Agent focuses on high-quality user experience in order to facilitate the use of email encryption. Pixelated uses an opportunistic approach to encryption: it encrypts every email that it can find public keys for. 
Using the Pixelated User Agent, the email user does not have to worry about key generation or key management anymore, since it is handled automatically as far as possible.

### Dispatcher
Pixelated can be run as a group email solution. In order to keep user data and details separated for each user, each logged-in user on Pixelated uses a different instance of the User Agent in its own virtual container. To ensure that each user communicates properly and securely with the correct instance of the User Agent, the **Dispatcher** routes communication between the User Agent and the further-back parts of the system. 

### LEAP Platform
In a Pixelated server-side setup, the provider is running the **Pixelated Platform**, which includes a LEAP single node installation and the Pixelated dispatcher that spins up instances of the user agent on every user log-in. LEAP ensures that all data is encrypted at rest, including your meta data, and communicates with other email providers via SMTP/TLS.