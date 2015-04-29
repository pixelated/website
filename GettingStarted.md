---
layout: blogpost
title: Getting Started with Pixelated
---

Pixelated: Getting Started
==========================

Pixelated is an email solution that simultaneously targets the problems of poor spread of email encryption and high centralization of email services.

Pixelated consists of a number of components, each of which plays a different role.

### User Agent
The **User Agent** is the user-facing piece of Pixelated. It consists of a single-page webapp (since users are most accustomed to using webmail as opposed to a locally installed email client) and provides a RESTful API. The User Agent focuses on high-quality user experience in order to facilitate the use of email encryption. Pixelated uses an opportunistic approach to encryption: it encrypts every email that it can find public keys for. 
Using the Pixelated User Agent, the email user does not have to worry about key generation or key management anymore, since it is handled automatically as far as possible.

### Dispatcher
Pixelated can be run as a group email solution. In order to keep user data and details separated for each user, each logged-in user on Pixelated uses a different instance of the User Agent in its own virtual container. To ensure that each user communicates properly and securely with the correct instance of the User Agent, the **Dispatcher** routes communication between the User Agent and the further-back parts of the system. 

### LEAP Platform
In a Pixelated server-side setup, the provider is running the **Pixelated Platform**, which includes a LEAP single node installation and the Pixelated dispatcher that spins up instances of the user agent on every user log-in. LEAP ensures that all data is encrypted at rest, including your meta data, and communicates with other email providers via SMTP/TLS.

So where do *I* start?
======================

That depends on what you want to use Pixelated for! Different kinds of users will need different components of the system.

#### EMAIL Users
So you just want to use awesome encrypted email? 
All you have to do is find a Pixelated provider:

> *We are not yet in production mode. Just be a little patient -- there will be Pixelated providers available soon!*
>
> In the meantime, you can [**try Pixelated on our test server**][1]


#### ACTIVISTS and other high-risk email users
Do you want to use Pixelated but, due to your personal threat model, you are not comfortable with having your private key stored on the provider’s server?

You need to install: [**Pixelated User Agent**][2]: run it on localhost and connect to your Pixelated Provider

#### SYSADMINS or tech-savvy people

Do you want to set up a Pixelated email provider for your friends, an organization, or something similar?

You need to set up: [**Pixelated Platform**][3] (which brings along the Pixelated Dispatcher and the User Agent as a Webmail interface)

#### DEVELOPERS and contributors

You want to help develop the User Agent and always wanted to work with FlightJs or a Python Webapp?
[**Start here.**][2]

You want to help develop the Dispatcher, because you love Javascript and Python backend development?
[**Start here.**][4]

You want to help develop the Pixelated Platform and get all excited about infrastructure as code and Puppet?
[**Start here.**][3]

[1]: http://try.pixelated-project.org:8080
[2]: https://github.com/pixelated-project/pixelated-user-agent
[3]: https://github.com/pixelated-project/pixelated-platform
[4]: https://github.com/pixelated-project/pixelated-dispatcher