# Magnitude vs Addition/Subtraction

Magnitude is lower level than addition/subtraction. Magnitude has no concept of positive and negative. All it knows is how to make a number larger or smaller. 

It is invalid to pass a negative value to these functions.

It is invalid to lower a number below 0. That is a higher level function that involves sign. This functionality is handled in the plusMinus module.

These functions should only ever be called except by the plusMinus module. These functions are split out to hide implementation complexity, manipulating an array of booleans, from the higher level plusMinus module.