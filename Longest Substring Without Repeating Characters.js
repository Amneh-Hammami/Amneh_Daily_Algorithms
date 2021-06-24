/*  
Given a string s, find the length of the longest substring without repeating characters.
example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

var lengthOfLongestSubstring = function(s) {
    var arr = s.split("");
    for(var i=0; i<arr.length; i++){
        var test = arr[i];
        for(var j=i+1; j<arr.length; j++){
            if(test === arr[j]){
                arr.splice(j,1);
            }
        }
    }
 
    for(var b=0; b<arr.length; b++){
            var test2 = arr[b];
            for(var c=b+1; c<arr.length; c++){
                if(test2 === arr[c]){
                    arr.splice(c,1);
                }
               
            }
        }
      return (arr.length);
    }

    // var count = 0;
    // var s2 = s.split("");
    // for(var l=s2.length-1; l>=0; l--){
    //     var start = s2[l];
    //     count += 1; 
    //     for(var i= 0; i<s2.length; i++){
    //         if(start === s2[i]){
    //             s2.splice(i,1)
    //         }
    //         if (s2.splice(i,1)){
    //             for(var i= 0; i<s2.length; i++){
    //               if(start === s2[i]){
    //                s2.splice(i,1)
    //              }
    //             }
    //         }
    //     }
    // }
    // return count;
