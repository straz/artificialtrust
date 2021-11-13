---
layout: definition
title: Long reach vs. short reach problems
category: definition
released: true
status: ready
excerpt_separator: <ex>
defs: [cog]
---

{% capture left %}
### Short reach problems

*High volume, rapid decisions*: you might face these problems over and
over again

*Readily available inputs*: the decision must be made with the
information available at hand.

*Readily available outcomes*: once the decision is made, 
it's clear whether the decision was good or bad.

*Recurring situations*: you can adapt to a problem if it arises repeatedly.

*Solution tools*: neural nets tend to work well
{% endcapture %}

{% capture right %}
### Long reach problems

*Low volume, slow decisions*: you might face these problems
as rarely as once in a lifetime

*Inputs require pursuit*: before deciding, you may have to investigate
further.

*Unintended consequences*: once the decision is made, the outcome may
look clear at first, but surprises may arise later.

*Unique situations*: without repetition, you may have only one shot at
making the right decision

*Solution tools*: reasoning tends to work well

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false %}

