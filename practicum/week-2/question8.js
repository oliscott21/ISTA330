/*
Given an array of numbers, for each number in the array
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
  let retVal = [];

  for (let i = 0; i < input.length; i++) {
    let cur = 0;

    for (let j = 0; j < input.length; j++){
      if (input[j] % 2 == 0 && input[j] > input[i]) {
        cur += 1;
      }

      if (input[j] == input[i] && i != j) {
        cur += 1;
      }
    }

    retVal.push(cur);
  }

  return retVal
};
