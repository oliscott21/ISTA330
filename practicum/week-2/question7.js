/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example:
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
  let retVal = 0;

  for (let i = 0; i < input.length; i++) {
    min = i;

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[min]) {
        min = j;
      }
    }

    if (min != i) {
      [input[i],input[min]] = [input[min],input[i]];
    }
  }

  for (let i = 0; i < input.length; i += 2) {
    if (input[i] < input[i+1]) {
      retVal += input[i]
    } else {
      retVal += input[i+1]
    }
  }

  return retVal;
};
