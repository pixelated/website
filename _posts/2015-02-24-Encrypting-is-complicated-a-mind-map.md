---
layout: blogpost
title: Encrypting is complicated, a mind map
excerpt: It turns out there's a reason why current email encryption implementations are not easy. On top of all complexities of public and private keys, you want be able to guarantee that a message will not leak unless the sender is ok with it. Here's a mind map of all the combinations we are looking into, plus some explanations.

--- 

by [Lourenço P. Soares](https://twitter.com/protolous)

There are many variables that come in play when encrypting email and the combinations can be overwhelming.

Encrypting emails to only one sender is relatively simple - because it is either encrypted or not - and the sender only have to worry about how much the keys available can be trusted. Emailing many people is a different matter altogether. If a recipient receives an encrypted email, it is reasonable to expect that it is private between sender and recipient, but as you can see below, it is not always true.

![Encrypting messages](/assets/images/posts/encryption-map/Encrypt_message_mind_map.png)

This map aims to cover all the possible scenarios. As mentioned above, the cases under a single recipient are pretty straightforward and hinge mostly on how many keys the recipient has made available to the sender and how much the sender trust one of these keys. In the chart above, the ![T](/assets/images/posts/T.png) icon indicates that from that point, the flow jumps to the appropriate top level case (e.g.: after verification, a key becomes trusted). We also have one case to ask for the key, which is a catch-all for the cases where one is not available and the sender is not comfortable sending the message in plain text.

When there are multiple recipients, things get trickier. There are two major forks around what to do with encryption: one if some recipients don’t have public keys available and another if some of this keys are not trusted. There are many ways to handle this: the sender could specify defaults, the application could add text in the message informing recipients of the lack of encryption/trust for some recipients or something else. For the purposes of this exercise, We chose to handle this as a “split message” case, allowing us to threat the remaining flows differently for each type of recipient. We also created a case called “Encrypt opportunistically” that is a catch all for letting the system use the best keys available for each and don’t notify the recipient in any way. This is pretty much what happens today.

When designing the encryption experience in Pixelated mail we will have to map the behaviour for each of these states and identify what sort of controls and decisions points will be made available to the user. As always, we would love to hear your [feedback](/#contact)! 

