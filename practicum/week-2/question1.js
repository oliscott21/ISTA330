/*
Given an array of numbers, return the running sum of the array.
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
  let curSum = 0;
  let i = 0;
  let retVal = [];

  while (i < input.length) {
    curSum += input[i];
    i += 1;
    retVal.push(curSum);
  }
  
  return retVal;
};
