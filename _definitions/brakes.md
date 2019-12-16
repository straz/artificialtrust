---
layout: definition
title: Accellerators vs. brakes
category: definition
released: true
excerpt_separator: <ex>
arts: [cyber, errors]
defs: [teach]
---


{% capture left %}

### Accellerators

Accelleration is moving forward faster, growth, advancement, and
progress. We seek acceleration in society, economics, and engineering.
We want our companies and retirement funds to grow. We want faster
airplanes and faster internet connections. We don't want just regular
delivery, we want overnight (or same-day) delivery, and we want it to be free.

We don't want to be told "No." We don't want to fill out the paperwork, and we
don't want a committee of strangers saying we can't build something in our
back yard. Freedom, to some, is the freedom to accellerate as you wish.

Companies try to avoid regulation when it limits their own growth.<sup>*</sup>

*\* On the other hand, companies embrace regulation and participate in
writing regulations when it keeps out potential competitors.*

{% endcapture %}

{% capture right %}

### Brakes

The paradox of brakes is that they make accelleration sustainable.

A car without brakes is unsafe to drive. With brakes, you can drive a
car faster because you know you can control it at high speeds.

When cells replicate unchecked, we get cancer. When cells grow
normally, a cancer-free host can live much longer.

In government and genomics, regulation is a form of brakes. It slows
some processes down but overall this makes healthy, normal growth
possible.





{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
