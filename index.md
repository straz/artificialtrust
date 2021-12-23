---
layout: page
---

<p class="drop-cap">A<em>rtificial Trust</em> is a collection of
essays, offering a framework for understanding complex systems. It's
an attempt to explain how algorithms can fail in the things we
trust.</p>

We rely on complex systems like our health, our society, and the internet.
These in turn rely on mechanisms to govern themselves and to
evolve. These mechanisms involve feedback and selective pressure,
which in turn rely on some mechanisms of recognition and trust. 


{% for article in site.articles %}
  {% if article.show_home != true %}
  {% continue %}
  {% endif %}
    
<p class="mt-4"></p>
#### [{{ article.title }}]({{ article.url | relative_url }})
{% capture seemore %}...[*read more*]({{ article.url | relative_url }}){% endcapture %}
{% capture seemore2 %}{{ seemore
   | markdownify | remove: '<p>' | remove: '</p>'
   | prepend: '<span class="text-nowrap">' | append: '</span>' }}{% endcapture %}
{% assign excerpt_snip1 = article.content | split: "<!-- start_excerpt -->" %}
{% assign excerpt_snip2 = excerpt_snip1[1] | split: "<!-- end_excerpt -->" %}
{{ excerpt_snip2[0] | remove: '<p>' | remove: '</p>' | append: seemore2 }}
{% endfor %}

<p class="mt-4"></p>

#### [What is Artificial Trust?]({{ '../definitions/trust' | relative_url }})

*Artificial Trust:* A false computational
shortcut. Artificial trust closely resembles natural trust, as it
reduces the computation needed to achieve confidence in a
result. But in artificial trust, this confidence is false, because
the results are not reliably valid.
...[*read more*]({{'../definitions/trust' | relative_url }})
