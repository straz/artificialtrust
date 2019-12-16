---
layout: definition
title: Recognition vs. cognition
category: definition
released: true
excerpt_separator: <ex>
defs: [teach]
---

{% capture left %}

### Recognition

Recognition means classifying inputs into groups. The input can be
images, forms (a form filled out by someone applying for a job or a
loan), data (a stream of data from a machine), etc.

Applications include:

* *face recognition* - Picking a face out of a crowd and identifying its owner
* *repair prediction* - Recognizing when a machine is likely to need repair
* *sales prediction* - Recognizing when a customer is likely to buy a product
* *stock trading* - Recognizing when it's time to buy or sell a stock
* *handwriting recognition* - Turning handwritten letters into text
* *translation* - Translating a phrase from one language into another

Neural net AIs perform this classification very well, but they don't
perform general cognition.


{% endcapture %}

{% capture right %}

### Cognition

Intelligence covers a broad range of cognition, including

*  *Teaching/being taught* means you can add directly add an individual facts by hearing or reading one.
*  *Reasoning* means you can combine facts to discover new facts without direct observation.
*  *Using analogies* make it possible to reason about one situation by selectively
using knowledge from another.
*  *Criticism* makes it possible to identify a specific flaw in your knowledge.
*  *Correction* makes it possible to fix flaws in your knowledge if you can find them.
*  *Attribution* makes it possible to remember different sources for your knowledge, so you
 can see how it holds up in practice and adjust what you know accordingly.
 *  *Proof* makes it possible to rely on knowledge with high confidence.
 * *Managing counterfactuals* makes it possible to imagine things that
 you're not observing at the moment. This in turn makes it possible to *have an
 imagination*, *recall the past*, *make plans for the future*, *compare alternatives*, or
 *test hypotheses*

 * *Abstraction* (deep layers, maybe)
 * *Reflection* and introspection


Apart from recognition, all these forms of cognition are beyond the reach of Neural net AIs.

{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
