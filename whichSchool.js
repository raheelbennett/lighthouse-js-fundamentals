let whichSchool = function (age) { // usign whichSchool as a function of age
  if(age >= 1 && age <= 12) { //conditional statement for Elementary School
    return "Elementary School";
  } else if (age >= 13 && age <= 18) { //conditional statement for Secondary School
    return "Secondary School";
  } else if (age >= 19 && age <= 100) { //conditional statement for Lighthouse Labs
    return "Lighthouse Labs";
  } 
}  
  
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));