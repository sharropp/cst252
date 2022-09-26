/**
 * Author:    Skye Harrop
 * Created:   09.26.2022
 *
 * (c) Copyright by Scrobungus Corp.
 **/

 var sortingArray = [10, 104, 99];
 sortingArray.sort(function(a, b) {
   return a - b;
 });
 console.log(sortingArray);

//this doesnt work as it keeps giving the same error of "Uncaught SyntaxError: missing ) after argument list"
 var result = array.map(sortingArray(x){
	 return x / 2;
 })

//trying to half the numbers within the array but it keeps giving me the same error
 console.log("Test of sortingArray halving", result);
