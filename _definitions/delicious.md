---
layout: definition
title: Delicious poison vs. disgusting cleanup
category: definition
released: true
status: ready
excerpt_separator: <ex>
defs: [soft]
---

### When reason > emotion

Sometimes you do the wrong thing even though it feels good.
It's a recognition failure &mdash; a kind of false positive.

When deciding what to do, there are two kinds of failures:
doing something you shouldn't, and failing to do something you
should. We call these two failures *delicious poison* and
*disgusting cleanup*.

When this happens, your emotional bias leads you to make a poor
choice.  Your reason may or may not warn you that it's a poor choice,
and you may ignore reason anyway because, hey, it feels good.  Reason's role
is to overcome one's innate emotional bias and give one last chance to
avoid making a mistake.



{% capture left %}

### Delicious poison

A *delicious poison* is something we find really attractive, even when logic tells us it's bad for us.

Our emotion says "yes," while our reason says "no."

We say: "we give in to temptation in moments of weakness."

Sometimes this is moral weakness, and we express disappointment in
&mdash; or loss of respect for &mdash; people who do this.

While we disapprove, we can all relate to behaving this way ourselves.

{% endcapture %}

{% capture right %}

### Disgusting cleanup

A *disgusting cleanup* is something we really don't want to do, even when logic tells us it's
absolutely necessary.

Our emotion says "no," while our reason says "yes."

We say: "we do what needs to be done in moments of strength."

Sometimes this is moral strength, and we express admiration for &mdash; and increased
respect for &mdash; people who do this.

While we express admiration, we can understand reluctance to behave this way ourselves.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}

When emotion wins out over reason: see [Softer now vs. harder now](soft)
