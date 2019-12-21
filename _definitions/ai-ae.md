---
layout: definition
title: Artificial Intelligence vs Artificial Emotion
category: definition
released: true
excerpt_separator: <ex>
defs: [cog]
---

{% capture left %}

### Artificial Intelligence

Intelligence covers a broad range of cognition, including
making plans, reasoning, forming analogies, teaching,

Neural net AIs do one tiny portion of this (classification)
very well, but they do not do everything that we might call "intelligence."

{% endcapture %}

{% capture right %}

### Artificial Emotion

Emotion is what we call our capacity for snap judgement. With all
emotion and no reason, we can act instantly and decisively, which is
exactly how neural nets perform.

An emotion is a predisposition or bias. It cuts down on time spent
thinking and helps us decide how to act. With every emotion (angry,
sad, love, fear), we are inclined to be more likely to act a certain
way, driven by that emotion and our capacity to act.

We trust our emotions because they lead us to act appropriately. We
run away when we're afraid, we share food with those we love, etc. We
do this quickly and without hesitation.

The AIs we build, using neural net algorithms, are in fact Artificial Emotion engines. 

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
