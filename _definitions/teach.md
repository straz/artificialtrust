---
layout: definition
title: Training vs. teaching
category: definition
released: true
status: ready
defs: [cog, semantic]
arts: [entertainment, questions]
---

Learning can occur in different ways:

* Being *trained*: when a mind learns something through reinforcement,
  after experiencing similar events dozens or hundreds of times.

* Being *taught*: when a mind learns something by extending what it
  already knows, after experiencing it just once.

* Using *reason*: when a mind reflects on what it has already
  experienced, and figures out something new.

{% capture left1 %}

### Training

*Training* is how you improve a neural net. A neural net cannot be
taught, it can only be trained. 

{% endcapture %}

{% capture right1 %}

### Teaching

*Teaching* is one way to extend a semantic net. Knowledge can be added
in many different ways besides teaching. See [Cognition](cog) for some
others.

{% endcapture %}

{% assign leftmd = left1 | markdownify %}
{% assign rightmd = right1 | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}

{% capture left2 %}

Training *reinforces* what has been learned but it cannot be extended with new ideas.
For example, a *friend/enemy* classifier can be reinforced with additional training.
But a new idea like "former enemy" cannot be trained in the same classifier; 
it requires introduction of a new and different classifier.

{% endcapture %}

{% capture right2 %}

Teaching *extends* what has been learned. For example, learning some
facts about the past makes it possible to ask further questions and
learn even more.

{% endcapture %}

{% assign leftmd = left2 | markdownify %}
{% assign rightmd = right2 | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false %}

{% capture left3 %}
A neural net AI learns nothing useful from a single example. In order to
learn anything, a large data set with many examples are needed.
{% endcapture %}

{% capture right3 %}
A semantic net is teachable. It can be extended by adding new
knowledge, one piece at a time.
{% endcapture %}


{% assign leftmd = left3 | markdownify %}
{% assign rightmd = right3 | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false%}

{% capture left4 %}
One neural net AI cannot teach another neural net anything. Transferring
part of the network is not useful. Between neural nets, knowledge can
only be transferred by copying the entire neural net, making a clone.
A replica will perform essentially the same as the original.
{% endcapture %}

{% capture right4 %}
Any amount of knowledge can be transferred from one semantic net to
another; this can be a single fact or a complete copy of the entire
knowledge base.  Where the two differ, they can disagree about
some of the facts and also agree about others.
{% endcapture %}

{% assign leftmd = left4 | markdownify %}
{% assign rightmd = right4 | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false%}

