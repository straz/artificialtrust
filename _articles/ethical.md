---
layout: article
title: How to make ethical AIs
created_date: 2022-09-18
show_home: true
sort_order: 1
released: true
status: ready
treat: Asimov's laws
arts: [institution]
defs: [sponsors]
---

### Three laws

Isaac Asimov wrote a number of science fiction stories in which all
robots are bound by a deceptively simple code of ethical behavior.
His three rules, often called [The Three
Laws](https://en.wikipedia.org/wiki/Three_Laws_of_Robotics), were all
that stood between potentially evil robots and great harm to humans.
In Asimov's world, a robot's brain simply cannot be manufactured
without them.

The most compelling quality of Asimov’s laws was that their
implementation was robust.  We all understand (a) they were a work of
fiction, first appearing in 1942, and (b) Asimov showed &mdash;
repeatedly, in nearly every story &mdash; how the laws could be pushed
to the point of breaking.  Still, there's something interesting about
how well they hold up overall, at least in a fictional world.

Can we find a resilient architecture to implement our ethical ideals
in real life AIs? And even if we make a few ethical AIs today, how
will we continue to make sure they are ethical in the future?

### Product safety

The industrial revolution taught us a few lessons about product
safety.  First, you can't have automation without safety, at least,
not for long. Once you start building things at scale, people tend to
notice when the automation is killing or maiming people in large
numbers.

Second, we learned that safety comes from product testing. Without
standards and quality control, you might build bridges with cracked
bolts, sell contaminated food at the grocery, or dress kids in
flammable pajamas.

Biology knows a thing or two about quality control and product testing
as well. You have an organ just above your heart called the thymus,
which is a proving ground for your immune system. Your
disease-fighting T-cells get their basic training in the thymus,
learning how to distinguish friend from foe. The test consists of
confronting targets they can either ignore or attack. These targets
(produced in the thymus) are samples composed from many kinds of
"self" and "outsider" cells. Not all T-cells do this job well enough
to be trustworthy; 98% of these immature T-cells fail and are
immediately killed. Only the 2% which pass are allowed to graduate from
the thymus, moving onward to serve and protect your body.

### Cull the failures

<!-- start_excerpt -->
With biology in mind, the answer is pretty obvious: if you want AIs to
be ethical, the only way to be sure is to apply strong selective
pressure. The best way to do this is to apply a swift and certain
threat of termination to unethical AIs.
<!-- end_excerpt -->

Market forces are not sufficient for this task. We all know that a
social media bot can be extremely unethical, and yet create enormous
rewards for its [sponsor](../definitions/sponsors). Unfortunately, any positive links
between market rewards and ethical behavior are weak, if they exist at
all. Any company that derives profit from an unethical AI has little
incentive to limit its growth.

A grocery that poisons its shoppers will face strong market pressure,
because its financial success is decided by the shoppers who are
harmed.  This is not true for unethical AIs. If people are hurt by an
AI, as the subjects of its unethical decisions, there's generally no
way for them to apply market pressure. The AI's subjects do not and
cannot shop around for a better AI. The sponsors who own the AI and
profit from its behavior receive all the financial rewards, and bear
none of the harm.

Since AIs are products, a "product safety standards" approach is
more appropriate, and more likely to be effective, than "market
incentives."

### Safety standards for AIs

We don't have any safety standard for AIs today, but we should.  If an
AI model is unethical, it must not be allowed into production. This is
no different than any other quality test in our modern industrial
world.  Every factory has tests to make sure they don't produce
cracked bolts, contaminated food, or flammable pajamas. Failed
products are not legal for sale, and producers who flaunt these
regulations face criminal liability.

A series of tests would help us rate AIs that are potentially
unsafe. These tests should be designed with three principles in mind:

 1. **Coverage** &mdash; The tests should cover a gamut of conditions
 where an AI could act in a potentially unethical or harmful way.

 2. **Effectiveness** &mdash; Consequences need to be firm when an
 AI potentially affects people's lives.  Selective pressure on AIs means
 deployment must be prevented if they fail the tests.

 3. **Integrity** &mdash; The sponsors of the AIs (owners, operators,
   and engineers) should not have any kind of influence over the
   safety tests that could potentially weaken test results or permit
   exceptions.


An independent testing organization is the only way to deliver AI
safety.

The *coverage* rule means that the organization must be committed to
anticipating and developing tests to cover a wide range of potential
failure modes.

The *effectiveness* rule means there must be laws against deploying
any unsuccessful AI, backed up by meaningful enforcement.

The *integrity* rule means that the organization must not have
conflicts of interest. Their funding must not be controlled by
organizations with a vested interest in having their AIs evade
scrutiny.

### It matters who calls the shots

Who would this testing organization be accountable to? The biggest
danger it faces is [regulatory
capture](https://en.wikipedia.org/wiki/Regulatory_capture), a form of
corruption where the parties being regulated exert influence over the
testing. When designing governance for the testing organization, test
it for the telltale warning signs of regulatory capture.

Does a large tech company want to influence the organization's
funding?  Does it want to have a say in how the tests are designed and
conducted? If so, then that's a sure sign that regulatory capture will
arise.


### So what

Ethical principles are nice to have, but they’re
[discarded](https://gizmodo.com/google-removes-nearly-all-mentions-of-dont-be-evil-from-1826153393)
easily in the face of other pressures. The challenge we face is not
just the design of ethical AIs. The real challenge is the design of
the institutions that watch over them &mdash; to provide corrective
feedback. These need to sustain evolutionary pressure in favor of
ethical principles, and keep it up for a long time.

As a species, we humans have come a long way. "Might makes right" has
been replaced, in many ways, by the rule of law. When we humans
occasionally come up with new ethical principles, we have engineered
[institutions](institution) with corrective systems, checks and
balances, to extend the lifespan of these principles.  While
exceptions are easy to find, overall institutional behavior at scale
is surprisingly ethical, at least when compared to where we've come
from.

As we enter a new age of coexistence with AIs, we need to apply these
lessons. Our attention needs to be focused on creating durable
institutions that protect us from unethical AI behavor over the long
haul.

