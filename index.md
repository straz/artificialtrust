---
layout: page
---

*Artificial Trust* is a collection of essays, offering
a framework for understanding complex systems. It's an attempt to
explain how algorithms can fail in the things we trust.

We rely on complex systems like our health, our society, and the internet.
These in turn rely on mechanisms to govern themselves and to
evolve. These mechanisms involve feedback and selective pressure,
which in turn rely on some mechanisms of recognition and trust. 

<p class="mt-4"></p>

##### [What is Artificial Trust?]({{ '../definitions/trust' | relative_url }})

*Artificial Trust:* A false computational
shortcut. Artificial trust closely resembles natural trust, as it
reduces the computation needed to achieve confidence in a
result. But in artificial trust, this confidence is false, because
the results are not reliably valid.
...[*read more*]({{'../definitions/trust' | relative_url }})

{% for article in site.articles %}
{% if article.show_home != true %}
{% continue %}
{% endif %}
    
<p class="mt-4"></p>

##### [{{ article.title }}]({{ article.url | relative_url }})

{% capture seemore %}...[*read more*]({{ article.url | relative_url }}){% endcapture %}
{% assign seemorehtml = seemore | markdownify | remove: '<p>'  %}

{% assign excerpt_snip1 = article.content | split: "<!-- start_excerpt -->" %}
{% assign excerpt_snip2 = excerpt_snip1[1] | split: "<!-- end_excerpt -->" %}
{{ excerpt_snip2[0] | append: seemorehtml }}

{% endfor %}
