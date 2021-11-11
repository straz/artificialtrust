---
layout: definition
title: Training vs. teaching
category: definition
released: true
status: ready
defs: [cog, semantic]
arts: [entertainment, questions]
---

* Being *trained*: when a mind learns something through reinforcement, after experiencing it dozens or hundreds of times.

* Being *taught*: when a mind learns something through extension, after experiencing it just once.

* Using *reason*: when a mind reflects on what it has already experienced, and figures out something new.


{% capture left1 %}

### Training

*Training* is how you improve a neural net. A neural net cannot be taught, it can only be trained.

{% endcapture %}

{% capture right1 %}

### Teaching

*Teaching* is how you improve a semantic net. Semantic nets can learn
in many different ways besides teaching. See [Cognition](cog) for just
a few examples that are beyond the reach of neural nets.

{% endcapture %}

{% assign leftmd = left1 | markdownify %}
{% assign rightmd = right1 | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}

{% capture left2 %}
<hr/>
Training *reinforces* what has been learned but it cannot be extended with new ideas.
For example, a *friend/enemy* classifier can be reinforced with additional training.
But a new idea like "former enemy" cannot be trained, it requires a different classifier.

{% endcapture %}

{% capture right2 %}
<hr/>
Teaching *extends* what has been learned. For example, learning some
facts about the past makes it possible to ask further questions and
learn even more.

{% endcapture %}

{% assign leftmd = left2 | markdownify %}
{% assign rightmd = right2 | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false %}

{% capture left3 %}
<hr/>
Neural nets are a structure for making snap decisions, and include
the mechanism for reinforcement learning. This lets them learn through
experience alone, without any teacher.

A neural net learns nothing useful from a single example. In order to
learn anything, a large data set with many examples are needed.

One neural net cannot teach another neural net anything. Transferring
part of the network is not useful. Between neural nets, knowledge can
only be transferred by copying the entire neural net, making a clone.
The replicas perform essentially the same as the original.

{% endcapture %}

{% capture right3 %}
<hr/>
Semantic nets are a structure for storing data. By themselves, they do not learn anything.
Other agents are needed to act on the data to improve it, for example, a teacher can
teach it something new.

Teaching a semantic net means it can be improved with a single new piece of knowledge.

Any amount of knowledge can be transferred from one semantic net to
another; this can be a single fact or a complete copy of the entire
knowledge base.  Where the two nets differ, they can disagree about
some facts but agree about others.

{% endcapture %}


{% assign leftmd = left3 | markdownify %}
{% assign rightmd = right3 | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false%}


