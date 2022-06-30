/* Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct. 
 
example1:
Input: nums = [1,2,3,1]
Output: true

example2:
Input: nums = [1,2,3,4]
Output: false
*/


/*
  @param {number[]} nums
  @return {boolean}
 */

 var containsDuplicate = function(nums) {
    var x = 0;
    while (x < nums.length){
        for(var i = x + 1; i < nums.length; i++){
        if(nums[x] === nums[i]){
            return true;
        }
        }
        x ++;
    }
    return false;
    
};
