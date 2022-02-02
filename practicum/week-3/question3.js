/*
Given a non-negative integer n,
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1]
]
*/

var PascalTriangle = function(n) {
  let retVal = [];

  retVal.push([1]);

  for (let i = 1; i < n; i++) {
    let cur = [];
    cur.push(1);
    if (retVal[i-1].length != 1){
      for (let j = 1; j < retVal[i-1].length; j++) {
        cur.push(retVal[i-1][j] + retVal[i-1][j-1]);
      }
    }
    cur.push(1);
    retVal.push(cur);
  }

  return retVal;
};
