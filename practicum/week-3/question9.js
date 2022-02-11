/*
Given an integer n,
put each number from 1 to n
into groups based on the sum of its digits.

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {

  let groups = [];

  for (let i = 1; i <= n; i++) {
    let cur = [];
    for (let j = 1; j <= n; j++) {
      let temp = j;
      let val = 0;
      while (temp) {
        val += temp % 10;
        temp = temp / 10 | 0;
      }
      if (val == i) {
        cur.push(j);
      }
    }
    groups.push(cur);
  }

  let count = 0;
  let max = 0;
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].length == max) {
      count += 1;
    }
    if (groups[i].length > max) {
      count = 0;
      max = groups[i].length;
      count += 1;
    }
  }
  return count;
};
