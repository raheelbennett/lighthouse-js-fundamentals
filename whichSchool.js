let whichSchool; //variable for which school based on age
let age = 4; //age of the student

if(age < 13) { //conditional statement
     whichSchool = "Elementary School";
  
}
  else if (age >= 13 && age <= 18) {
     whichSchool = "Secondary School";
    
  }else {
     whichSchool = "Lighthouse Labs";
  }


console.log(whichSchool); //ouput
