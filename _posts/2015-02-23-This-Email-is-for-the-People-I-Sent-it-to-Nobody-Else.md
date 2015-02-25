---
layout: blogpost
title: This Email is for the People I Sent it to. Nobody Else.
excerpt: Most people think of email like sending a letter in the post, a person-to-person communication in a sealed envelope. However, email is more like sending a postcard. Multiple actors have access to the contents and we need to be careful who we ask to convey our communication.  

--- 

#This Email is for the People I Sent it to. Nobody Else.

by [Lourenço P. Soares](https://twitter.com/protolous) and [Lisa Junger](https://twitter.com/lieblingswelt)

*Our email infrastructure is flawed. We need to reconsider our approach to email to make it safer  -  and easier.*

Most people think of email like sending a letter in the post, a person-to-person communication in a sealed envelope. However, email is more like sending a postcard. Multiple actors have access to the contents and we need to be careful who we ask to convey our communication.  

Email is a staple of our digital lives. It is vital to the way Internet users shop, share and work. With the unprecedented level of mass surveillance revealed by Edward Snowden[\[1\]](http://www.theguardian.com/world/the-nsa-files), we understand better than ever that secure email is a vital element to protecting our personal privacy.

Think of all the data you share through email: passwords, credit card numbers, purchase records, personal information, love letters. How would you feel sending this same type of information on a postcard? Imagine that it’s not only you, but over 3 billion people sharing over 196[\[2\]](http://www.radicati.com/wp/wp-content/uploads/2014/01/Email-Statistics-Report-2014-2018-Executive-Summary.pdf) billion such postcards every day!

### The hazards of going from Alice to Bob

Email is based on a store and forward model. When Alice sends an email to Bob, she is actually sending it to the server of her email provider, which sends it to Bob’s email provider’s server, to be stored until Bob fetches his emails. On the way from Alice's computer to Bob’s, the email message has gone through the computers and routers of their providers' hardware, which is not under physical control of Alice or Bob.

Until only recently, the majority of providers did not enforce or support Transport Layer Security (TLS), the cryptographic protocols designed to provide communication security over the Internet. Many email providers leave unencrypted email messages on their servers, sometimes including those deleted from the mailbox by the user[\[3\]](# "In the more modern IMAP architecture, mails are often even left on the server in order to connect to multiple devices."). This means that the email provider can look at, or be compelled to share, any messages that have been sent or received.

Today, it is possible to encrypt email data in a way that makes it hard for third parties to read, but email security tools available today, such as public key encryption, were made by technologists, for technologists. Without good usability for a non-tech audience, only a small number of end-users make use of encryption for their email communication[\[4\]](#%20In%20the%20aftermath%20of%20the%20Snowden%20revelations,%20we%20also%20learned%20how%20difficult%20it%20was%20for%20Mr.%20Snowden%20to%20find%20a%20journalist%20who%20knew%20how%20to%20use%20email%20encryption%20properly.).

Even if sending encrypted email, because of the way email is transmitted today, metadata is generally exposed and is a source of rich information for social network analysis (e.g. “who Alice had been emailing before attending that rally?” or “what time Bob usually emails from his home?”).

### The Road to Recovery

More email providers are enabling TLS in their services thanks to increased public attention. While this is an important step to take, it doesn’t solve all the issues (e.g. direct access by the email provider and exposing metadata).

Considering how little we use encryption and the fact that email communication is widely persisted unencrypted on providers’ servers, it is important to understand the email provider landscape.

In February 2014, Forbes’s 1,000,000-strong user database was hacked and gave some interesting insights into shares on the the email-provider market. It revealed that 66% of all email accounts in the database were hosted by one of the four biggest providers (gmail.com: 39%; yahoo.com: 17%; hotmail.com: 8%; aol.com: 2%)[\[5\]](http://nakedsecurity.sophos.com/2014/02/17/forbes-hack-password-shootout-gmail-vs-yahoo-vs-hotmail-vs-aol-whose-users-are-the-smartest/).

In Germany, Statista.com found that 88% of all email is hosted by the 8 biggest providers, with more than 50% hosted by either GMX or Web.de[\[6\]](# "Statista.com &#40;2013&#41;. 'Entwicklung der Marktanteile der E-Mail-Postfach-Anbieter in Deutschland bis 2013.'"). A similar picture can be found for the United States (89% of webmail accesses through only four providers[\[7\]](http://www.zdnet.com/blog/microsoft/whos-the-biggest-u-s-e-mail-service-of-them-all-hint-its-not-gmail/7967)) and there is good reason to assume this tendency for most other countries.

This severe concentration means that a handful of companies have access to most of the world’s email communication and can thus make use of private communications data for business purposes (e.g. targeted ads). It is vulnerable to misuse, theft and targeting from a variety of motivated agents.

This leads us to two major problems in our current email infrastructure:

Mass surveillance: Email communication is subject to dragnet surveillance. If we can achieve widespread use of secure communication, it will be too costly to routinely intercept the majority of communication on the Internet. A motivated adversary could still intercept particularly targeted communication, but it should end mass surveillance on the scale we endure today.

Single point of failure: As outlined above, the high degree of concentrated information makes our email less private and more vulnerable. If we can make it easy for organisations to host communication infrastructure, there will be less dependency on the major service providers, making it harder to obtain or compromise individual’s communication.

People developed the core protocols for email approximately 30 years ago, before modern security challenges emerged. Hence, it is worth reconsidering every aspect of the existing protocols, and even the protocols themselves. This is an opportunity to tackle the challenges and integrate the lessons learned from decades of using SMTP, IMAP and POP. Some initiatives are working on post-email solutions such as Pond or OTR. However, while we wait for such initiatives to fix the broken Internet, we need a secure email solution.

Stay tuned for Part 2 where we discuss solutions to this important problem.