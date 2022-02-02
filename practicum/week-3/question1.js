/*
Given an array of numbers, input,
find whether the largest element in the array
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   let max = 0;
   let maxAt = 0;
   let total = 0;

   for (let i = 0; i < input.length; i++) {
     if (input[i] > max ) {
       max = input[i];
       maxAt = i;
     }
   }

   for (let i = 0; i < input.length; i++) {
     if (i != maxAt && max < input[i] * 2) {
       return false;
     }
   }

   return true;
};
