//Define a function lastIndexOf.
/*function lastIndexOf (x, y) {
  let z= x.indexOf(y);
  return z
} */


function lastIndexOf (x, y) { //Define a function lastIndexOf.x is the array input and y is the comparing value.
  let z = -1; // creating a variable to return back to function, by default it's -1 in case our function does not return a match.
  for (let i = x.length - 1; i >= 0; i--){ //starting from the end of the array.
    if (x[i] == y) { //looking for a match between arary and comparing value.
      z= i; //if match found then we will assign that index value to our variable that we will be returning back to the funcrtion. 
      break; //stop the loop from going any further if match is found.  
    } 
  } return z; // returnig our matched index back and if nothing found in the function then default value of -1 will be returned. 
} 
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1); 
