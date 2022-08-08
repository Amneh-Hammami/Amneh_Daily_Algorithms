/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
 //'abcd' => ['abcd', 'adbc', 'acbd', 'adcb', ]
//str = str.substring(0, pos) + chr + str.substring(pos, str.length);
//Here, we have concated string before the position, added character and then again concated String.

function allAnagrams(string){
    //definning array;
    var array = [];
    //putting the first index the same string
    array.push(string); 
    //splitting the chartters from the string into array
    var str = string.split("");      //=>['a', 'b', 'c']
    //first loop to fix one index each time
    for(var x = 0; x < str.length; x++){
      var currentChar = str[x];     //=>'a'
      var currentArray = [];
      currentArray.push(currentChar);  //=>['a']
          //second loop to change positions of other chartters
          for(var y = x+1; y < str.length; y++){
            var nextCharr = str.splice(y, 0, str[str.length-y]);
            currentArray.push(nextCharr);
          }
    }
    return currentArray;
}


function allAnagrams(string){
  //definning array;
  var array = [];
  //putting the first index the same string
  array.push(string); 
  //splitting the chartters from the string into array
  var str = string.split("");      //=>['a', 'b', 'c']
  //making copy of the original str to not be changed.
  var copyOfStr; 
  copyOfStr = str;
  //first loop to fix one index each time
  for(var x = 0; x < str.length; x++){
    var currentChar = str[x];     //=>'a'
    var currentArray = [];
    currentArray.push(currentChar);  //=>['a']
  }
  var nextCharr = copyOfStr.splice(1, 0, str[str.length-1]);
          currentArray.push(nextCharr);
          console.log(copyOfStr);  
          console.log(str);  
  return currentArray;
}
