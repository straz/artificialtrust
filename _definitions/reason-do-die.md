---
layout: definition
title: Do or die vs. reason why
category: definition
released: true
status: ready
arts: [remove-bias]
defs: [delicious]
---

<style>
   img[alt=aristotle] { width: 200%;}
</style>


We have two kinds of intelligence, which Daniel Kahneman[^1] refers to
as System 1 and System 2.

More informally, I like to refer to them as *do or die* and *reason why.*

[^1]: Kahneman (2011). [*Thinking Fast And Slow*](https://www.amazon.com/dp/0374533555/). Farrar, Straus and Giroux.

{% capture left %}

### Do or die
"Do or die" responses are knee-jerk survival reflexes, epitomized by neural nets,
or what Kahneman calls System 1.

{% endcapture %}

{% capture right %}

### Reason why

"Reason why" intelligence is the capacity for slow thinking, or what
Kahneman calls System 2.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}


{% capture left2 %}
They're always fast. They make decisions in real time, where speed is needed for survival.

Knee-jerk responses are not always correct. They're easily fooled by 
tricks like [delicious poison](delicious). 

**Trust**: Trust is how we follow others in our tribe. Once we trust another
member of the tribe, we follow them quickly, without hesitation or
thinking.

![ants]({{ 'follow-ant.svg' | prepend:'/assets/pix/' | relative-url}} )

{% endcapture %}

{% capture right2 %}

Reasoning is slow and expensive. We don’t have the capacity to do
much of it, because it’s exhausting.

Careful reasoning is not always perfect, but it can catch mistakes
made by fast thinking.

**Trust**: Reason takes time and effort to produce conclusions. Those
conclusions can then be trusted and followed quickly, just like
trusted members of the tribe.

![aristotle]({{ 'aristotle.svg' | prepend:'/assets/pix/' | relative-url}} )

{% endcapture %}

{% assign leftmd = left2 | markdownify %}
{% assign rightmd = right2 | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false %}


<style>
#fnref\:2, .reversefootnote { display: none}
li#fn\:2 { list-style-type: none;}
</style>

[^2]

[^2]: *image credit:* Plato and Aristotle in [School of Athens](https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/stanze-di-raffaello/stanza-della-segnatura/scuola-di-atene.html), by Raphael, c.1510.




