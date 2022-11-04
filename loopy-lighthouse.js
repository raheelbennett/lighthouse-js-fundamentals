
//Creating for loop
for( let x=100 ; x<=200; x++){  
  //If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
  if(x%3 ==0 && x%4 ==0){ 
      console.log("LoopyLighthouse");
  //If the number is a multiple of 3, print the string "Loopy" instead of the number
  }else if(x%3 ==0) { 
      console.log("Loopy");
      //If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
  }else if(x%4 ==0) { 
    console.log("Lighthouse");
  }else{ 
  //If no exceptions are met then it will print between 100-200
      console.log(x);
  }  
}