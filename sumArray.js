/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory


function sumArray(arr){
    var maxsum = Number.NEGATIVE_INFINITY;
    var currentsum;
    for(var start = 0; start < arr.length; start++){
        currentsum = 0
        for(var end = start; end < arr.length; end++){
            currentsum += arr[end];
            if(currentsum > maxsum){
                maxsum = currentsum;
            }
        }
    }
    return maxsum;
};

/*
 Number.NEGATIVE_INFINITY is a special numeric value that is returned when an 
 arithmetic operation or mathematical function 
generates a negative value greater than the largest representable number in JavaScript 
(i.e., more negative than -Number.MAX_VALUE). */