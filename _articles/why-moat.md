---
layout: article
title: The why is the moat
released: true
status: ready
created_date: 2026-11-05
excerpt_separator: <ex>
---

{% include figure.html filename="pexels-miken-35464156.jpg" imgclass="col-md-11"%}

In VC terms, what is a moat? A moat is a reason why someone can’t copy your idea. Having a moat means they can't just observe your work, see the patterns, and distill it into a copy that performs in mostly the same way. A VC thinks of new company creation the way they think of LLM training – observation is how you make a copy.

What is being copied? The premise of a business can be summed up in a sentence: AirBnB is “a marketplace for short-term housing rentals.” But how AirBnB executes for success depends on thousands of decisions. If you make all the exact same decisions, you won't differentiate much. If you make different decisions, you won’t get far by copying, you’ll need to use causal reasoning to depart from the example you’re copying from.

An LLM works by predicting the next token and spitting it out in a stream.  A typical LLM has a vocabulary of about 100,000 unique tokens. The combinatorial possibilities grow fast. Each token is a syllable, about 3-4 letters. For just sixteen tokens, there are 10<sup>80</sup> possible combinations of text output, or a 1 followed by eighty zeroes.

Training an LLM cuts the possibilities back down to something manageable. In English, a ”Q” is nearly always followed by a “U”, so you don't need to contemplate other sequences. LLMs use correlation, not causation, to detect such patterns. They have *absolutely no idea why* a U follows a Q, they just know that it’s highly probable. An LLM is an actuarial table. It’s a chart of which tokens are most likely to follow next in a sequence, so the output becomes a stream of “most likely” choices.

The training data set, and the resulting actuarial table is necessarily small, compared to the possibilities. A trillion parameters sounds like a lot of parameters, but compared to 10<sup>80</sup>, it’s the difference in scale between the number of atoms in a red blood cell and the number of atoms in the universe.

How many examples do you need to see before you've seen enough combinations to predict the next combination? How many Hallmark Christmas movies do you need to see before you can write a new one that’s just as good? An LLM can write an angry Facebook post because it’s seen enough angry Facebook posts to know what they tend to look like. This works because the training set is big enough – it covers all the kinds of angry in all the combinations, so the LLM can write “new“ ones that fit the mold. If you want to build a plagiarism machine, you train it on source data, with sufficient coverage, so that the new output seems comparable to the original material.

All LLMs are doomed to follow in the path of whatever they were trained on. If the situation is novel, or if you want a new solution, a highly trained LLM model is going to be useless.

If the situation doesn’t fit the training set, it’s “out of distribution” (OOD). OOD means the input samples differ significantly from the statistical patterns of the dataset your LLM was trained on. The actuarial table is too small, the coverage is inadequate. The LLM doesn't know what token should come next, because it's never seen anything like this input before. A valid message is full of surprises, and your actuarial table doesn’t do a good job of predicting the next token. The entropy is high - the next token cannot be predicted because there are no examples that inform the prediction.

Causality is the answer. If you know why a decision leads to an outcome, you can use reason instead of actuarial prediction. You can have a better chance of handling new situations, and finding novel outcomes. LLMs augmented with *why* can go further than LLMs alone.

## So what?

That’s how you create a moat. A copycat can watch your past decisions, but they’ll be unable to replicate your new ones. The knowledge of *why* is the new moat, perhaps it’s the only possible moat in a world of surveillance and copycats. 

<style>
#fnref\:1, .reversefootnote { display: none}
ol {padding-inline-start: 0px}
</style>

[^1]

[^1]: *image credit:* [Mike Norris](https://www.pexels.com/@miken)
