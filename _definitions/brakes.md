---
layout: definition
title: Accelerators vs. brakes
category: definition
released: true
status: ready
excerpt_separator: <ex>
arts: [cyber, errors]
defs: [teach]
---

Brakes are not the opposite of accelerators.

The paradox of brakes is that they make acceleration sustainable.

{% capture left %}

### Accelerators

A car with terrible brakes is unsafe to drive.

When cells replicate unchecked, they become cancer.

When the rule of law is weak, those who are beyond law's reach
are free to enrich themselves.

{% endcapture %}

{% capture right %}

### Brakes

You can drive a car with good brakes much faster than a car with
terrible brakes.

When cell growth is regulated, the host is cancer-free.

When laws are created and enforced fairly, corruption is minimized,
innovation thrives, and businesses can prosper.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd topmargin=false %}


