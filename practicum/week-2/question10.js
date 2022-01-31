/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  let max = 0;
  let min = n;
  let digits = []
  while (n) {
    digits.push(n%10);
    n = n / 10 | 0;
  }

  for (let i = 0; i < digits.length; i++){
    if (digits[i] < min) {
      min = digits[i];
    }
    if (digits[i] > max) {
      max = digits[i];
    }
  }

  return max - min;
};
