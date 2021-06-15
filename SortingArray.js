/*
 * Implement a function that takes an array and sorts it.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
*/

/*
 * Example usage:
 * SortArray([2, 1, 3]); // yields [1, 2, 3]
 *
*/

sortArray = (array) => {     
    var res = [];
    for(var j=0; j<array.length; j++){  
     var max = Math.max(...array)       //finding the maximm value in the array
     res.unshift(max);                  // pustting the value in the begnning of the result(res) array
     var indexToDelete1 =array.indexOf(max)    //finding the index of the maximum value to delete it 
     array.splice(indexToDelete1,1);           // delete this vaule from the array 
    }
    var newarray = array;               //declaring newarray which is having now the half of the original array 
    var res2 = [];                     //declaring another result array (res2) 
    for(var i=0; i<newarray.length; i++){  
        var max = Math.max(...newarray)      //finding the maximm value in the newarray
        res2.unshift(max);                  // putting the value in the begnning of the result(res2) array
        var indexToDelete1 =newarray.indexOf(max)    //finding the index of the maximum value to delete it 
        newarray.splice(indexToDelete1,1);            // delete this vaule from the newarray
       }

     var result = res2.concat(res)        //res2 contaning the minimum values so we start with it to make it sort 
                                          //and then concantaint it with res
       result = newarray.concat(result)  // res(having the maximum values) then adding the last value remained 
                                           //in the newarray(whih is the lowest value)
                                           //now we are having the final result sorted array 
    return result;
 }



 
