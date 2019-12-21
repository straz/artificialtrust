---
layout: article
title: Neural Net AI's kryptonite
released: true
arts: [errors]
---

Darwinian adaptation work great for a species, as long as the
environment doesn't change too rapidly. In a stable environment, a
species can adapt nicely and flourish.

Likewise, neural nets adapt to the conditions they are trained for.
As long as the inputs don't change much, a properly trained neural net will
perform as expected.

The failures of species and the failures of neural nets arise when
the environment they adapted to is not the environment they're
operating in. This happens when the world is changing rapidly rather
than slowly. It also happens when you have an active (and possibly
intelligent) adversary who is messing with your inputs.

Neural nets will fail spectacularly on inputs they were not trained
on. This should surprise nobody: the whole point of training is to
adapt as well as possible to the training set.

For example, a neural net trained on recognizing the Latin alphabet
will simply fail to recognize another alphabet, like Greek or
Cyrillic. Statistical measures of accuracy and high performance go out
the window along with the change in inputs and environment. More
training can occur, and eventually they may even catch up, if the
external changes ever slow down enough to allow it.

Under Darwinism, the selective pressure from an adversary is baked into the
environment. Rabbits are adapted to environments with hawks in them. No doubt
the AIs we build to detect credit card fraud are equally adapted to
the behaviors in their training sets.

The bad news is that unlike the hawks in a rabbit's environment, the
adversaries who wish to defeat our AIs do not change their methods
gradually. When we deploy AIs into environments that are unstable,
subject to rapid change, and subject to attacks by intelligent
adversaries, we cannot be confident that the AIs will manage to keep up.

Of course, there is one additional problem: the price of adaptation to
a rapidly changing environment is the large failure rate as the
adaption gets under way. For species (say, mastodons during the last
ice age), the majority of the individuals will die off prematurely as
the species evolves.  For neural nets (say, a finely tuned stock
trading algorithm during a geopolitical crisis), a lot of errors can
be made before the net is re-trained for the new environment.

Now, this may not be a problem if you don't particularly mourn the
catastrophic loss of individuals or the stock portfolios in question. After all,
you might not be related to them, so you may not feel overly empathic.
But it may very much be a problem for the individuals who are directly affected.

Also, this may not be a problem for some AIs which operate on low stakes.
An algorithm that places banner ads, for example, is unlikely to cause
much harm even if it has a high error rate.

However, there are some domains where using AI should require great
care.  We are now confronted with AIs that can materially effect one's
life (healthcare), liberty (justice), or pursuit of happiness (finance).
Even if an AI performs well under initial validation, we cannot trust
it to remain competent under hostile conditions. We as a society should
very much care about the potential for catastrophically high error rates,
and we should act accordingly in advance, and not wait for these failures
to happen.


#### Policy implication #1: dataset stability

It is crucial to distinguish between AIs trained on sets that are *stable* versus *unstable*.

An example of a plausibly *stable* AI dataset is the 
[detection of diabetic retinopathy](https://www.ncbi.nlm.nih.gov/pubmed/27898976). 
It's reasonable to assume that distinctive characteristics of diseased
retinas caused by diabetes will not change much. A highly specific and
sensitive test today should be highly specific and sensitive for the
same disease many years in the future. Once an AI is validated for
diagnostic use, it should be safe to trust this AI to perform
similarly.

An example of a plausibly *unstable* AI dataset is anything involving
human behavior.  This includes AIs used for sentiment analysis,
finance, or crime and justice.  The norms of human behavior vary a
great deal, from one community to another, and from one decade to
another. One simply cannot count on one training set in one
environment holding up well under changes present in a different
environment.

#### Policy implication #2: adversaries who game the system



#### Policy implication #3: oversight and dependency avoidance

Any comprehensive policies for managing Neural Net AIs should include

1. insist on accurate labeling of AI systems which operate on potentially unstable datasets, or which
are subject to adversarial attacks

2. call for ongoing oversight mechanisms to audit and detect when performance is degraded
from initial performance due to environmental changes or adversarial attacks

3. call for ongoing regulatory mechanisms to reduce reliance on AI systems whose performance
degrades over time due to environmental changes or adversarial attacks










