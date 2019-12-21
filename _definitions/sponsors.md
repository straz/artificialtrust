---
layout: definition
title: Sponsors vs. subjects
category: definition
released: true
status: ready
excerpt_separator: <ex>
arts: [errors]
---

{% capture left %}

### Sponsors 

A sponsor is typically a corporation or government entity that deploys a neural net AI.

{% endcapture %}

{% capture right %}

### Subjects

A subject is typically a person whose life is affected by a neural net AI's decisions.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
	
{% capture left %}

The sponsor *profits from* the work done by that AI.

{% endcapture %}

{% capture right %}

The subject *faces the consequences of* the work done by that AI.

AIs that make *low-stakes* decisions affect some small, often
unnoticed aspect of a subject's life. An example of a low-stakes AI is
the elevator controller that predicts which elevator to send to your
floor to reduce your waiting time.

The stakes are *high* when decisions are made that affect healthcare,
justice, and money, or in other words, life, liberty, and the pursuit
of happiness.

{% endcapture %}


{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}


