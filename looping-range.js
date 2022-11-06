//Define a function called range
//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.
function range (start, end, step) {
  let array = []; // creating an array for final output
  for(let i = start; i <= end; i += step) { // for loop wiht conditions 
    if(start == undefined || end == undefined || step == undefined || start > end || step <= 0) { // if statement to return blank if any arguments are undefined, start being greater than end, step being 0, or negative
      break; // will return enmpty array 
    } else {  // if not undefined then proceed with 
      array.push(i);   
     // console.log(array);   
    } 
  } return array;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, -5));
console.log(range(-5, 2, 3));