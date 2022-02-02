/*
Given an array of size n,
find the m-element.
The m-element is
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example:
input: [1, 2, 2, 3, 2, 7, 2]
output: 2
*/

var m_element = function(input) {
  let min = input.length/2|0;

  for (let i = 0; i < input.length; i++) {
    let cur = 1;
    for (let j = i+1; j < input.length; j++) {
      if (input[i] == input[j]) {
        cur += 1;
      }
      if (cur >= min) {
        return input[i];
      }
    }
  }

  return -1;
};
