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

When reason and emotion are in conflict, and reason wins out, reason's
role is to overcome one's innate emotional bias. It's likely one of
two possible situations:

<p class="mb-5"/>

{% capture left %}

### Delicious poison

A *delicious poison* is something we find really attractive, even when logic tells us it's bad for us.

We say we give into the temptation of delicious poison in moments of weakness.

Sometimes this is moral weakness, and we express disappointment in or loss of respect for people who do this.

While we disapprove, we can all relate to behaving this way ourselves.

{% endcapture %}

{% capture right %}

### Disgusting cleanup

A *disgusting cleanup* is something we really don't want to do, even when logic tells us it's something we need to do.

We say we do what needs to be done in moments of strength.

Sometimes this is moral strength, and we express admiration for, and increased respect for people who do this.

While we express admiration, we can understand reluctance to behave this way ourselves.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}

When emotion wins out over reason: [Softer now vs. harder now](soft)
