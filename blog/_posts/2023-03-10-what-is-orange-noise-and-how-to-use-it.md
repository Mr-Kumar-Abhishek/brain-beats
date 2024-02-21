---
layout: post
title: "What is Orange Noise and How to Use It?"
description: Orange noise is a type of noise that has a flat frequency spectrum, meaning that it has equal power at all frequencies. However, unlike white noise, which also has a flat spectrum, orange noise excludes the frequencies that correspond to musical notes. 
subject: What is Orange Noise and How to Use It?
apple-title: What is Orange Noise and How to Use It?
app-name: What is Orange Noise and How to Use It?
tweet-title: What is Orange Noise and How to Use It?
tweet-description: Orange noise is a type of noise that has a flat frequency spectrum, meaning that it has equal power at all frequencies. However, unlike white noise, which also has a flat spectrum, orange noise excludes the frequencies that correspond to musical notes. 
date: 2023-03-10
keywords: frequency benefits, Brain Beats, Frequencies, colors of noise, orange noise, Brain wave entrainment, sound therapy
---


You may have heard of white noise, pink noise, or brown noise, but have you ever heard of orange noise? Orange noise is a type of noise that uses all the frequencies of the audible spectrum, except for those that correspond to musical notes. It is also known as dissonant noise, because it sounds very harsh and unpleasant to the human ear. Orange noise is the opposite of harmonic noise, which only uses frequencies that are multiples of a fundamental frequency.

In this blog post, we will explain what orange noise is, how it is generated, and what are some of its applications in sound synthesis, sound masking, or sound art.

## What is Orange Noise?

Orange noise is a type of noise that has a flat frequency spectrum, meaning that it has equal power at all frequencies. However, unlike white noise, which also has a flat spectrum, orange noise excludes the frequencies that correspond to musical notes. These frequencies are called harmonics, and they are multiples of a fundamental frequency. For example, if the fundamental frequency is 440 Hz (the note A), then the harmonics are 880 Hz (the note A one octave higher), 1320 Hz (the note E), 1760 Hz (the note A two octaves higher), and so on.

Orange noise filters out these harmonics by using a comb filter, which is a type of filter that has notches at regular intervals in the frequency domain. The notches are spaced according to the fundamental frequency and its multiples. For example, if the fundamental frequency is 440 Hz, then the comb filter will have notches at 440 Hz, 880 Hz, 1320 Hz, 1760 Hz, and so on. The result is a noise signal that has all the frequencies except for those that form musical notes.

## How to Generate Orange Noise?

There are different ways to generate orange noise, but one of the simplest methods is to use a white noise generator and a comb filter. A white noise generator produces a random signal that has equal power at all frequencies. A comb filter can be implemented using a delay line and a feedback loop. The delay line introduces a time delay in the signal, and the feedback loop adds a fraction of the delayed signal back to the original signal. The result is a signal that has peaks and notches at regular intervals in the frequency domain.

The delay time and the feedback amount determine the spacing and depth of the notches in the comb filter. The delay time should be equal to the inverse of the fundamental frequency. For example, if the fundamental frequency is 440 Hz, then the delay time should be 1/440 seconds, or about 2.27 milliseconds. The feedback amount should be negative, meaning that the delayed signal is subtracted from the original signal. The feedback amount should be close to -1, but not exactly -1, otherwise the signal will cancel out completely.

The following pseudocode shows how to generate orange noise using a white noise generator and a comb filter:

```
# Define parameters
fundamental_frequency = 440 # Hz
delay_time = 1 / fundamental_frequency # seconds
feedback_amount = -0.99

# Initialize variables
delay_buffer = [] # list to store delayed samples
output_signal = [] # list to store output samples

# Loop through white noise samples
for sample in white_noise:
    # Add sample to delay buffer
    delay_buffer.append(sample)
    
    # Calculate output sample by subtracting delayed sample from original sample
    output_sample = sample - feedback_amount * delay_buffer[0]
    
    # Add output sample to output signal
    output_signal.append(output_sample)
    
    # Remove oldest sample from delay buffer
    delay_buffer.pop(0)
```

## What are Some Applications of Orange Noise?

Orange noise can be used for various purposes in sound synthesis, sound masking, or sound art. Here are some examples:

- Sound synthesis: Orange noise can be used as a source for subtractive synthesis, which is a technique that shapes a complex sound by filtering out unwanted frequencies. By using orange noise as a source, you can create sounds that have rich harmonic content without sounding musical or tonal. You can also modulate the fundamental frequency of the orange noise to create dynamic sounds that change over time.
- Sound masking: Orange noise can be used as a masker for unwanted sounds or noises. By playing orange noise at a comfortable level, you can reduce the perception of other sounds that may be distracting or annoying. Orange noise can be especially effective for masking sounds that have musical or tonal characteristics, such as speech or music.
- Sound art: Orange noise can be used as an element for sound art or experimental music. By using orange noise as a material, you can explore different aspects of sound such as timbre, texture, dynamics, or spatialization. You can also combine orange noise with other sounds or effects to create interesting contrasts or interactions.

