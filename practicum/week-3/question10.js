/*
Given an array of distinct integers, input,
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements.

Return a list of pairs in ascending order.
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array

Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {

  let retVal = [];
  let len = 0;

  for (let i = 0; i < input.length; i++) {
    let min = i;

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[min]) {
        min = j;
      }
    }

    if (min != i) {
      [input[i],input[min]] = [input[min],input[i]];
    }
    len += 1;
  }

  let minDif = input[len-1];

  for (let l = 1; l < input.length; l++) {
    if (input[l] - input[l-1] < minDif) {
      retVal = [];
      minDif = input[l] - input[l-1];
      retVal.push([input[l-1],input[l]]);
    } else if (input[l] - input[l-1] == minDif) {
      retVal.push([input[l-1],input[l]]);
    }
  }

  return retVal;
};
