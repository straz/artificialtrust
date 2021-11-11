---
layout: definition
title: Sponsors vs. subjects
category: definition
released: true
status: ready
excerpt_separator: <ex>
arts: [errors]
---

A genetic algorithm is setup by a *sponsor*, and is applied to
*subjects*.

The selective pressure on a genetic algorithm is asymmetrical. The
benefits from running an algorithm and the ability to "shop around" or
apply influence to the algorithm are not the same for sponsors and
subjects.

Typically an AI's behavior is not independently verified, so the
sponsor has the absolute and final say over whether that behavior is
correct.  Typically outcomes cannot be disputed by the subjects. There
is no recourse or appeal for the subjects if they suspect they've
received a false positive or false negative.

The owner of the marketplace faces no competition, they enjoy a monopoly.

The sponsor is more like the owner of a marketplace, not the owner of
a shop within a marketplace.  The shoppers and sellers can negotiate
quality and price with each other, but they cannot negotiate quality
and price of the marketplace itself.



{% capture left %}

### Sponsors 

The sponsor *profits from* the work done by that AI.

A sponsor is typically a corporation or government entity that deploys an AI.

If the algorithm is not performing well, the sponsor can change it. The sponsor
can update the algorithm's decisions if the yield is not optimal.

A sponsor is typically isolated from the effects of false positives or
false negatives.

The sponsor benefits from transaction volume - the
more transactions, the better, even if some of those transactions are
erroneous.  Compensation comes from quantity, not quality of
transactions.


{% endcapture %}

{% capture right %}

### Subjects

The subject *faces the consequences of* the work done by that AI.

A subject is typically a person whose life is affected by an AI's decisions.

If the algorithm is not performing well, the subjects cannot change it. They will
be subject to the algorithm's decisions whether they like it or not.

The subject is directly affected by a (typically) single decision.

A single false positive or false negative can be harmful, and even
fatal to a subject. It can deprive the subject of their job, their
home, their health, or their freedom.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
