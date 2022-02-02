
/*
Given an integer array, input,
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     let max = 0;
     for (let i = 0; i < input.length; i++) {
       let curMax = input[i];
       if (curMax > max) {
         max = curMax;
       }
       for (let j = i+1; j < input.length; j++) {
         curMax += input[j];
         if (curMax > max) {
           max = curMax;
         }
       }
     }
     return max;
 };
