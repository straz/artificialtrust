---
layout: default
tab: about
---
{% capture body %}
## About this site

A bunch of connected stuff and things

<p class="mb-5"/>

## About the author

*Steve Strassmann* .. stuff and things.

{% endcapture %}

<div class="row">
  <div class="col-md-8 offset-md-2">
	{{ body | markdownify }} 
  </div>
</div>
