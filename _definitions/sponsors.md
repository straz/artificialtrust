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

Capitalism is founded on the premise that if a customer doesn't like a
service, they can shop around for a better one. With AI algorithms
that make decisions about people, the subjects cannot "shop around"
for a better algorithm. Sponsors typically enjoy a monopoly in markets
where they deploy their AIs.

Typically an AI's behavior is not independently verified, so the
sponsor has the absolute and final say over whether that behavior is
correct. 


{% capture left %}

### Sponsors 

The sponsor *profits from* the work done by that AI.

A sponsor is typically a corporation or government entity that deploys an AI.

If the algorithm is not performing well, the sponsor can change it. The sponsor
can update the algorithm's decisions if they don't serve the sponsor's needs.

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

If the algorithm is not performing well, the subjects cannot change
it. They must live with the algorithm's decisions whether they like it
or not.

The subject is directly affected by single decision.

Algorithms can determine who gets a bank loan, who gets an organ
transplant, or who gets parole.  A single false positive or false
negative can be harmful, even fatal to a subject. It can deprive the
subject of their job, their home, their health, or their freedom.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
