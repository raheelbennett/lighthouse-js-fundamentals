function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return(name + " is " + age + " years old.")
}

console.log(ageCalculator("Suzie", 1983, 2015));




/* Joe Polo's code. shared with me after i successfully submitted mine to compass. 
saving a copy as it has an interesting use of return function 

function ageCalculator(name, yearOfBirth, currentYear) {
  return(name + " is " + (currentYear - yearOfBirth) + " years old.");
}
console.log(ageCalculator("Miranda", 1983, 2022));*/
