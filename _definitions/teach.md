---
layout: definition
title: Training vs. teaching
category: definition
released: true
defs: [cog, semantic]
---

* Being *trained*: when a mind learns something after experiencing it dozens or hundreds of times.

* Being *taught*: when a mind learns something after experiencing it just once.

* Using *reason*: when a mind reflects on what it has already experienced, and figures out something new.

<p class="mb-5"/>

{% capture left1 %}

### Training

*Training* is how you improve a neural net. A neural net cannot be taught, it can only be trained.

<p class="mb-4"/>&nbsp;
<p class="mb-3"/>

Neural nets are a structure for storing data, but also typically include
the mechanism for reinforcement learning. This lets them learn through
experience alone, without any teacher.

A neural net learns nothing useful from a single example. In order to
learn anything, a large data set with many examples are needed.

{% endcapture %}

{% capture right1 %}

### Teaching

*Teaching* is how you improve a semantic net. Semantic nets can learn
in many different ways besides teaching. See [Cognition](cog) for just
a few examples that are beyond the reach of neural nets.

Semantic nets are a structure for storing data. By themselves, they do not learn anything.
Other agents are needed to act on the data to improve it, i.e. the act of teaching.

Teaching a semantic net means it can be improved with a single new piece of knowledge.


{% endcapture %}

{% assign leftmd = left1 | markdownify %}
{% assign rightmd = right1 | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}

{% capture left2 %}

Training *reinforces* what has been learned. For example, a
*friend/enemy* classifier can be reinforced with additional training,
but it cannot be extended.

One neural net cannot teach another neural net anything. Transferring
part of the network is not useful. Between neural nets, knowledge can
only be transferred by copying the entire neural net, so that the
replicas perform essentially the same as the original.

{% endcapture %}

{% capture right2 %}

Teaching *extends* what has been learned. For example, learning some
facts about the past makes it possible to ask further questions and
learn even more.

Any amount of knowledge can be transferred from one semantic net to
another; this can be a single fact or a complete copy of the entire
knowledge base.  Where the two nets differ, they can disagree about
some facts but agree about others.

{% endcapture %}


{% assign leftmd = left2 | markdownify %}
{% assign rightmd = right2 | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}


