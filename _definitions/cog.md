---
layout: definition
title: Recognition vs. cognition
category: definition
released: true
status: ready
defs: [teach, reach]
arts: [questions]
---

<style>
li { margin-bottom: .6em;}
</style>

{% capture left %}

### Recognition

Neural net AIs are very good at recognizing and classifying, there are
many successful examples. 

Recognition means classifying inputs into groups. The input can be
images, forms (a form filled out by someone applying for a job or a
loan), data (a stream of data from a machine), etc.

Applications include:

* *face recognition* - Picking a face out of a crowd and identifying its owner
* *repair prediction* - Recognizing when a machine is likely to need repair
* *sales prediction* - Recognizing when a customer is likely to buy a product
* *stock trading* - Recognizing when it's time to buy or sell a stock
* *handwriting recognition* - Turning handwritten letters into text
* *steering and braking* - Recognizing when to change the direction or speed of an autonomous vehicle
* *translation* - Translating a phrase from one language into another


{% endcapture %}

{% capture right %}

### Cognition

There are no examples of a neural net AI that can perform general
cognition.  There are examples of AIs which perform cognitive tasks,
they just don't use neural nets to do so.  When neural nets are not a
good tool for the job, [semantic models](semantic) are used by AIs
instead.

Human-like intelligence covers a broad range of cognitive skills that
go beyond recognition and classification. Some examples; this is only
a very small partial list:

*  *Being taught* means you can directly add an individual fact to
   your knowledge after hearing it only once.
*  *Reasoning* means you can combine facts to discover new facts without direct observation.
 * *Reflection and introspection* means you can reason about your experiences and learn from them.
*  *Using analogies* make it possible to reason about one situation by selectively
using knowledge from another.
 * *Storytelling* means you can share a rich mental model with another intelligent being. This is done
 by unwrapping it into a linear stream of words, which the listener reassembles in their mind.
*  *Asking questions* means you can recognize a gap in your own knowledge and seek to remedy it.
*  *Criticism* makes it possible to identify a specific flaw in your knowledge.
*  *Correction* makes it possible to fix flaws in your knowledge if you can find them.
*  *Attribution* makes it possible to remember different sources for your knowledge, so you
 can see how they hold up in practice and adjust your trust in those sources accordingly.
 *  *Proof* makes it possible to rely on knowledge with high confidence.
 * *Managing counterfactuals* makes it possible to imagine things that
 you're not observing at the moment. This in turn makes it possible to *have an
 imagination*, *keep fact and fiction separate*, *recall the past*, *make plans for the future*, *compare alternatives*, *make a wish*, or *test hypotheses*
 * *Generate counterexamples* makes it possible to validate your recognizer by
 testing it without a training set.
 * *Abstraction* means you can generalize specific ideas into abstract ideas which capture their essential truth.



{% endcapture %}

{% assign leftmd = left | markdownify %}
{% assign rightmd = right | markdownify %}
{% include twocol.html left=leftmd right=rightmd %}
