/*  
Given a string s, find the length of the longest substring without repeating characters.
example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

var lengthOfLongestSubstring = function(s) {
    let mp = {};      //declaring an object
    let l = ans = 0;    // l = left   ans = answer
    
    for (let r = 0; r < s.length; r++) {     //loop throw the string   r = right
        const curr = s[r];                   // curr = current character in the string
        
        if (mp[curr]) {                     //finding if the current character is already in the object
            l = Math.max(l, mp[curr])       //if it is alraedy in the object change the left to the bigger number 
        };                                  //and thats by finding maximum num between the old l and the value of the
                                            //old current key in the object 

        mp[curr] = r + 1;                  //putting the key,value in the object 
        ans = Math.max(ans, r - l + 1);     //answer will be the maximum number 
    }
    
    return ans;
};
