/*  
Given a string s, find the length of the longest substring without repeating characters.
example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

var lengthOfLongestSubstring = function(s) {
    var arr = s.split("");
    var array = [];
    var count1 = 0;
    var count2 = 0;
    var start;
    var end;

    for(var i=0; i<arr.length; i++){
        start = arr[i];
        end = arr[i+1];
            if(start !== end){
                count1 += 1;
                array.push(start);
            }else if(start === end){
                count2 += 1; 
            }
    }
   
    }

  