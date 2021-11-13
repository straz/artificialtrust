---
layout: definition
title: Long reach vs. short reach problems
category: definition
released: true
status: ready
excerpt_separator: <ex>
defs: [cog]
---

Problems come in all shapes and sizes. We're used to thinking about them in terms
of *easy* vs. *hard* problems.

The *reach* of a problem is different from how difficult it may
be. The problem of "what's for lunch" can be easy or difficult, but we
face this problem every day, and the consequences usually fade
quickly.  "Where should I live" is a problem with longer reach. It
arises more rarely and the consequences can have an impact even beyond
one's lifetime.

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
{% include twocol.html left=leftmd right=rightmd %}

