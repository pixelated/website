---
layout: blogpost
title: PixelState 2016-02
authors:
  - name: Felix Hammerl
    link: https://twitter.com/felixhammerl
excerpt: Current threads, news, discussions, and related stuff.
---

Hi fellow Pixelettes and Pixelators,

Welcome to the first edition of the PixelState. This newsletter is a wrap-up of current threads, news, discussions, etc. that happened here during the last month.

## PixelThreads

#### Multi-User without Docker

In the past, Pixelated ran strictly in single-user mode. LEAP libraries were not built to allow multiple users in one process, which made sense when there existed only one client (Bitmask). As a consequence of this, we managed multiple instances of the Pixelated user agent via Docker. This unfortunately became a drag, since Python is not used as a binary, but interpreted at runtime, causing the lightweight Docker instances to blow up to 50MB when idle, and even further when under load. 

We helped to change that; now libraries are updated and fit our multi-user requirements, keeping an eye on simplicity, scalabity, and memory consumption. You are now able to [run the User Agent in multi-user mode](https://github.com/pixelated/pixelated-user-agent/blob/master/README.md#multi-user-mode), without Docker.

#### Simplified setup

Simplifying the setup had multiple goals: making contributor onboarding easier, deployment easier, and supporting multiple OSes.

During [the most recent hacknight](https://cryptohack.net/post/10th-feb-hacknight-welcome.html) Down Under, we came across a bunch of difficulties with Windows, which we're solving right now.

#### Homepage redesign

New year, new homepage. In January, we decided to revamp the homepage design. This was done to streamline onboarding of potential contributors. The new design should answer these questions as fast as possible:

1. Who are you? What is this? Is this legit?
2. Will this work for me?
3. Why should I care?
4. How can I help?

If you see room for improvement, please [drop us a line](https://pixelated-project.org/faq/#contact-the-project). Thanks in advance!

#### Team changes

Team-wise, we will see some fluctuations in the contributor team in the upcoming weeks and months. For various reasons, the following team members will throttle their contributions:

* [Albo](https://github.com/albogabriel)
* [Shyba](https://github.com/shyba)
* [Jeff](https://github.com/jeffhsta)
* [Gil](https://github.com/pereiragislene)
* [Folker](https://github.com/fbernitt)
* [Christoph](https://github.com/cz8s)

We thank everyone for their contributions to the project, and hope to see them on our issue tracker every now and then. Plus, you'll probably still be able to get a hold of them in our [IRC and Slack channels](https://pixelated-project.org/faq/#contact-the-project). There will be new members joining over the course of March and April, among them:

* [Denis](https://github.com/deniscostadsc)
* Thais

Welcome! We're excited to have them with us and we'll keep you posted with a bio when the time comes.

#### LEAP Database discussions

[Original Post](https://lists.riseup.net/www/arc/leap-discuss/2016-01/msg00004.html)

*tl;dr*

BigCouch, the database that LEAP platform is based on, is no longer maintained. It is a fork of CouchDB which implements clustering support. That support was merged into CouchDB and will be available with CouchDB 2.0. We are not able to support replication of user storage with plain CouchDB, so we needed a new database. The challenge is distributed database scalability (NB: scalability != replication). We're looking into CouchDB, MongoDB, Postgres, Redis, MariaDB, etc.

## PixelEvents (upcoming)

* [Hacknight in Hamburg (GER) on 15-02-2016](https://pixelated-project.org/2016/02/04/Hacknight-HH/)

## PixelNews

* [Rails Girls Summer of Code](https://pixelated-project.org/2016/02/11/Rails-Girls-SoC/)
* [Hacknight in Hamburg (GER) on 15-02-2016](https://pixelated-project.org/2016/02/04/Hacknight-HH/)
* [Cryptohack Virtual Hacknight in AUS](https://cryptohack.net/post/10th-feb-hacknight-welcome.html)
* Pixelated listed on [Bruce Schneier's Worldwide Encryption Products Survey](https://www.schneier.com/blog/archives/2016/02/worldwide_encry.html)

## PixelMisc

* [DON'T PANIC - Making Progress on the "Going Dark" Debate](https://cyber.law.harvard.edu/pubrelease/dont-panic/)
* [Robin Doherty - Why privacy is important, and having "nothing to hide" is irrelevant](https://robindoherty.com/2016/01/06/nothing-to-hide.html)
* [Natasha Lomas (Techcrunch) - The Repeat Political Madness Of Never-Ending Crypto Wars](http://techcrunch.com/2016/01/23/the-repeat-political-madness-of-never-ending-crypto-wars/)
* [On Cyber - the grugq](https://www.youtube.com/watch?v=qlk4JDOiivM)
* [USENIX Enigma 2016 - NSA TAO Chief on Disrupting Nation State Hackers](https://www.youtube.com/watch?v=bDJb8WOJYdA)
* [Russell Brandom (The Verge) - The five big lies of the encryption debate](http://www.theverge.com/2016/1/12/10749806/encryption-debate-fbi-terrorism-going-dark)
* [Jenna McLaughlin (TI) - Apple’s Tim Cook Lashes Out at White House Officials for Being Wishy-Washy on Encryption](https://theintercept.com/2016/01/12/apples-tim-cook-lashes-out-at-white-house-officials-for-being-wishy-washy-on-encryption/)
