const smartGarbage = function (trash, bins) { //smartGarbage is a function that will accept trash as string and bins as an object containing bin properties 
  if (trash === 'waste') { //if condition to determine if trash is waste
    bins.waste += 1; // add one to waste bin 
  } else if (trash === 'recycling') { //if condition to determine if trash is recycling
    bins.recycling += 1; // add one to recycling bin 
  } else if (trash === 'compost') { //if condition to determine if trash is compost
    bins.compost += 1; // add one to compost bin
  } return bins  //returning object bins to our smartGarbage function 
};
 
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })); // to test final output 

