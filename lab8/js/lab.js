/**
 * Author:    Pete
 * Created:   10.26.2021
 * (c) No copyright
 **/

 var pArray = [12, 28, 24, 39, 49]

 console.log("My Array", pArray)

// Multiplies an integer by two.
 function timesTwo(x){
     var results = 2 * x
     return results
 }
// Multplies all integers in the array.
 pArray.map(function(x){
     var results = x * 2
     return results;
 })

console.log("Numbers in the array, doubled: ", pArray)
