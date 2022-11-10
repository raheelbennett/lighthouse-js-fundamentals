//Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.


function loopyLighthouse (range, multiples, words) { //The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
  for (let x = range[0] ; x <= range[1] ; x++) {  
    //If the number is a multiple of both 2 and 5, print the string "BattyBeacon" instead of the number.
    if(x % multiples[0] === 0 && x % multiples[1] === 0){ 
      console.log(words[0] + words[1]);
    //If the number is a multiple of 2, print the string "Batty" instead of the number.
    } else if(x % multiples[0] === 0) { 
      console.log(words[0]);
   //If the number is a multiple of 5, print the string "Beacon" instead of the number.
    } else if(x % multiples[1] === 0) { 
      console.log(words[1]);
    } else{ 
    //If no exceptions are met then it will print between 15 and 90, inclusive. 
      console.log(x);
    }  
  } 
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

 