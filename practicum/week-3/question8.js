/*
Given an array of integers, input,
a d-integer is an integer which has
a frequency in the array equal to its value.

Return a d-integer. If there are multiple
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
  let retVal = -1;

  for (let i = 0; i < input.length; i++) {
    let cur = 1;
    for (let j = i+1; j < input.length; j++) {
      if (input[i] == input[j]) {
        cur += 1;
      }
    }
    if (cur == input[i] && cur > retVal) {
      retVal = cur;
    }
  }

  return retVal;
};
