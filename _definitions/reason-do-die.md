---
layout: definition
title: Do or die vs. reason why
category: definition
released: true
status: ready
defs: [delicious]
---

We have two kinds of intelligence, which Nobel laureate Daniel
Kahneman[^1] refers to as System 1 and System 2. 

More informally, I like to refer to them as *do or die* and *reason why.*

[^1]: Kahneman (2011). [*Thinking Fast And Slow*](https://www.amazon.com/dp/0374533555/). Farrar, Straus and Giroux.

{% capture left %}

### Do or die
"Do or die" responses are knee-jerk survival reflexes, epitomized by neural nets,
or what Kahneman calls System 1.

They're always fast. They make decisions in real time, where speed is needed for survival.

Knee-jerk responses are not always correct. They're easily fooled by 
tricks like [delicious poison](delicious). 

**Trust**: Trust is how we follow others in our tribe. Once we trust another
member of the tribe, we follow them quickly, without hesitation or
thinking.

<img src="{{ site.url }}/assets/pix/follow-ant.svg"/>

{% endcapture %}

{% capture right %}

### Reason why

"Reason why" intelligence is the capacity for slow thinking, or what
Kahneman calls System 2.

Reasoning is slow and expensive. We don’t have the capacity to do
much of it, because it’s exhausting.

Careful reasoning is not always perfect, but it can catch mistakes
made by fast thinking.

**Trust**: Reason takes time and effort to produce conclusions. Those
conclusions can then be trusted and followed quickly, just like
trusted members of the tribe.


<img style="width: 40em" src="{{ "/assets/pix/aristotle.svg" | relative-url }}">

{% endcapture %}

<style>
#fnref\:2 { display: none}
</style>

[^2]

[^2]: *image credit:* Plato and Aristotle in <i>Causarum Cognitio</i> (Knowledge of the Causes), <br/>by Raphael, c.1510.


{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
