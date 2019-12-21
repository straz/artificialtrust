---
layout: article
title: Who learns from a fatal mistake?
released: true
status: ready
defs: [semantic, sponsors]
arts: [cyber, kryptonite]
sent: ['lessig','colbert']
---

Neural nets work on a fairly straightforward principal of applied
Darwinism.  They are trained by rewarding correct responses, and
punishing incorrect ones.

Darwinism relies on two conditions: (1) the decision-maker faces the
fatal effects of poor decisions, and (2) the individual's suffering is
inconsequential as long as the species is sustained. This is all fine
and good to create life on Earth as we know it. It is not fine and
good when we deploy AIs in situations that have high-stakes impact on
people's lives, because neither of these conditions are true.

The neural net AIs we build inevitably have a sponsor: typically a
corporation or government entity. This sponsor is the party that
directly benefits from the job performed by that neural net AI.

While a neural net can make quite a few mistakes, the network itself
(and its sponsor) will often survive just fine. In nature, errors in a
species are tolerated as long as they don't happen too frequently.
When a species is made up of billions of individuals, quite a few
individual errors will be tolerated.

If one of the individuals makes a fatal mistake, while it's certainly
bad news for that individual, the species it belongs to is typically
not threatened. In fact, if the environment is fairly stable and the
errors don't happen too frequently, the species will likely benefit
from the selective pressure, which in turn improves that species,
slowly, over time.

When we deploy artificial neural nets, they too will inevitably make
errors.  If the stakes are low, the systems we build are not
threatened by the occasional error. And neither are we, the humans who
interact with such systems.  For example, if an AI decides to show a
pet food commercial to someone who doesn't own any pets, that's really
not a big deal.

In terms of the two conditions I mentioned earlier, this sort of
low-stakes neural net AI situation affects two parties: the commercial
sponsor and the shopper.  We may allow a generous interpretation of
the first condition: an erroneous AI classification causes a (minor)
loss in sales to the sponsor, and also the shopper's time and
attention is wasted (just a bit). On one hand, the sponsor in this
case does indeed face proportional consequences from the error, but to
be accurate, we must also note that the shopper pays a proportionate
price as well &mdash; and here's the import part &mdash; without any accountability
or consequences to the AI *or its sponsor* for that portion of the cost.

This brings us to the second condition: the position that the
individual's suffering is inconsequential. We might very well accept
this position for a banner ad placement, but that's quite a slippery
slope upon which to build and widely establish a technology.  A lot of
small costs, at scale, can turn into a very high cost.

The stakes are high when decisions are made that affect healthcare,
justice, and money, or in other words, life, liberty, and the pursuit
of happiness. Errors in these *high-stakes* decisions should not be
treated the same way as for low-stakes errors.

It gets worse: once a neural net AI completes its training period, and
is deployed by its sponsor, the training is typically turned off.
Sometimes an AI's training is turned off so that its behavior can be
seen as "stable."

By "stable behavior," I'm not referring to stability of the AI's
decisions, I'm referring to stability of the sponsor's.  *Stability* has a
classical mathematical meaning: in a stable system, a small change in
the input doesn't make a big change in the output. For example, if a
parole board were to evaluate a prisoner, being stable means the
decision shouldn't change by a huge output (keep them in jail or let
them go free) based on a small change in input (whether a prior crime
involved theft of $827 or theft of $826).

The thing about neural net AIs is that by this definition, they are
often wildly unstable. Small perturbations in their inputs frequently
cause inexplicably large changes in their outputs. That is bad enough,
because it raises doubts about the accountability for each decision
made by the neural net AI. 

Before a sponsor decides to deploy an AI, its competence is scored
according to statistical metrics like its 
[ROC curve](https://en.wikipedia.org/wiki/Receiver_operating_characteristic).
The goal of training is to use such scores to reduce this instability
to a statistically tolerable level.  The AI is still totally
unaccountable, its decisions are still wildly unstable, but at least
they have become statistically tolerable.

The sponsor's decision to turn off training (and more broadly,
supervision and oversight for errors) is a matter for facing
accountability as well. The sponsor may well be concerned about facing
accountability for its decision to deploy the neural net AI. Turning
off training lets the sponsor "freeze" the AI's behavior. By turning
off training, the neural net AI will not change the way it makes its
decisions.

A sufficiently good score supports the decision to deploy the AI.  By
turning training off, the sponsor expects these metrics to stay the
same, and hence avoid unpredictable (and possibly negative)
changes. Avoiding changes to these performance metrics means the
sponsor gets to avoid the very unpleasant (and very unprofitable)
burden of having to revisit the question of whether it was right to
deploy the neural net AI in the first place.

Besides the question of stability, there's a simpler reason to turn
off training in a deployed AI. Training is costly, so operating
without training is more profitable. Training is a form of supervision
by a higher authority, and that higher authority comes with an
overhead cost. 

This supervision brings accountability &mdash; an opportunity to detect and
fix errors that would otherwise go unnoticed and uncorrected. If
training is turned off, the sponsor is rewarded more. The cost of
training is felt immediately and up front. The benefits of additional
training past the initial training period are subtle and hard to
justify. It's easy to see how sponsors will be subjected to simple
Darwinism. These sponsors will be trained to more readily turn off the
training of their neural net AIs, *especially* if they do not directly
bear the cost of the errors.

Once the training is turned off, any neural net AI will simply ignore
all of the errors it makes.  A single mistake here causes no harm to
the AI, which has no stake in the outcome, nor to its sponsor, which
benefits from the statistically successful work performed by the AI.
But when the work affects healthcare, justice, or money, a bad
decision can be absolutely devastating to the human whose life it
affects.

#### Policy implication #1: 

Before deploying a neural net AI with potentially high-stakes
consequences, model the prevalence and impact of errors it will make,
including both false positives and false negatives.  After it is
deployed, independently audit and publish the actual prevalence and
impact.

#### Policy implication #2: 

The impact of an error made by a neural net AI is felt not just by the
AI's sponsor (typically a corporation or government entity), but also
by the individuals who are the subjects of the AI's classification
decisions.  The distribution of harm between the sponsors and the
subjects should be accurately described.

#### Policy implication #3: 

While the aggregate impact of errors on subjects at population scale
might be very low, the individuals confronting these errors may bear a
very heavy burden from individual errors. Before deploying a neural net AI
with potentially high-stakes consequences, the impact of a single error
on a single subject should be accurately described as part of the 
description of the AI's impact.
