---
layout: definition
title: Do or die vs. reason why
category: definition
released: true
defs: [brakes]
excerpt_separator: <ex>
---

{% capture left %}

### Do or die
“Do or die” responses are knee-jerk survival reflexes, epitomized by neural nets.

<a href="{{ site.url }}/assets/pix/follow-ant.svg">
<img src="{{ site.url }}/assets/pix/follow-ant.svg"/>
</a>

This is the ant story

{% endcapture %}

{% capture right %}

### Reason why

“Reason why” intelligence is not a replacement for *bias*, it’s an
extension. In the course of reasoning, you reclassify a few labels:
with reason, you can deduce that some seeming friends are actually
enemies, and some seeming food is actually poison. But at the end of
the day, “reason why” intelligence is overhead, and is utterly
inadequate for daily survival.

Reasoning is very slow and very, very expensive. We don’t have the
capacity to do much of it, and it’s exhausting. Real-time execution
still relies on the biases (the labels) we create.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
