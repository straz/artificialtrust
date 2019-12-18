---
layout: definition
title: Neural nets vs. semantic nets
category: definition
released: true
status: ready
excerpt_separator: <ex>
defs: [cog, teach]
---


{% capture left %}

### Neural nets

Neural nets are *creators of labels*. By attaching labels to inputs, a
mind makes decisions quickly and decisively. It can recognize and
classify inputs and decide what actions to trigger.

<p class="m-5"/>

Neural nets are lopsided voting machines. They have many inputs
which are boiled down to an output. Each output is either a label
(e.g. *food or poison*, *friend or enemy*), or its corresponding 
action (e.g. *eat or avoid*, *help or fight*).

<a href="{{ site.url }}/assets/pix/neural-net.svg">
<img src="{{ site.url }}/assets/pix/neural-net.svg"/>
</a>

<p class="m-5"/>

Since a neural net's purpose is to make decisions quickly and
decisively, its design makes it possible to turn inputs into outputs
instantly. 

Each neuron gathers votes from its inputs, combines them unevenly, and
passes the result onward. The vote is on a sliding scale, typically
represented as a fraction between 0 and 1.  Each neuron gathers votes
but not all the votes are added equally. The weight of a neuron's vote
can be changed to increase or decrease the impact of that vote on the
final outcome.

The only output from a neural net is the final result. There is no
useful way to investigate why it arrived at any particular decision,
or to show any kind of justification or reason. There are no inner
workings or partial answers that are worth looking at.

{% endcapture %}

{% capture right %}

### Semantic nets

Semantic nets are *storage for labels*. By storing labels and the
relations among them, a mind can carefully reflect on what it knows. 
It can critically evaluate its labels and decide to rearrange them or
create new ones.

Semantic nets are road maps. They don't have inputs or outputs.  Each
node is the label representing a single idea.  Each link describes the
relationship between one node and another (e.g. *"the friendship
between Jeff Bezos and Elon Musk"*)

<a href="{{ site.url }}/assets/pix/semantic-net.svg">
<img src="{{ site.url }}/assets/pix/semantic-net.svg"/>
</a>

Since a semantic net's purpose is to support reflection and
understanding, its design makes it possible to represent complexity,
exceptions to rules, and subtle shades of meaning.

A subject's elements are a description which can be used to reason
about or understand that subject.

When you use a semantic net, you apply reason as a series of steps.
These steps both describe and justify the conclusion you arrive at.




{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}

