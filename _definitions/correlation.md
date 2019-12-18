---
layout: definition
title: Correlation vs. causation
category: definition
released: true
---

In justice and in science, we use *correlation* to suggest, but *causation* to prove.

If someone is suspected of a crime, we don't say "he *resembles* most of the other
criminals, therefore he's guilty". Correlation is not adequate, we have to show
evidence that one committed the crime.

A neural net does not deal with causation, it works purely on correlation.

{% capture left %}

### Correlation

Correlation is when you tend to observe two things together.

Neural net AIs work on the principal of correlation: in reinforcement learning
the classification (output) is correlated with certain kinds of inputs.



{% endcapture %}

{% capture right %}

### Causation

Causation is when you understand *why* something happens. To say that
*A causes B* is to have a model that explains the reason for *B*. This
is not something neural net AIs attempt to address.



{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}


{% capture left %}
*Example:
We know that the presence of beta-amyloid plaques are correlated with
neural degeneration found in Alzheimer's disease. What we **don't** know
today is whether the disease causes the plaques to form, or if the
formation of these plaques cause the disease.*

{% endcapture %}

{% capture right %}
*Example:
Scurvy has been killing people painfully since ancient times, and the
cure (eating citrus fruit) has been learned and forgotten many times
across different societies. It wasn't until the 20th century that it
became widely established that it was caused by a lack of vitamin C in
the diet.*

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
