const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){ //finalPosition function initated
  let final = [];
  let x = 0;  //starting position for x
  let y = 0;  //starting position for y
  for(const move of moves) {  //for of loop since each of the elements in the array need to be processed 
    if(move === "north") {  //if else statements for each of the directions 
      y += 1;
    } else if (move === "south") {
      y -= 1;
    } else if (move === "east") {
      x += 1;
    } else if (move === "west") {
      x -= 1;
    } 
  } 
  final.push(x,y); //appending to the final array
  return final; //returing final array to the function 
}

console.log(finalPosition(moves)); // print function to print the final array that was returned 



/*const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
const final =[];
let x = 0;
let y = 0;
 for(const move of moves) {
  if(move === "north") {
    y +=1;
  } else if (move === "south") {
    y -=1;
  } else if (move === "east") {
    x += 1;
  } else if (move === "west") {
    x -= 1;
  } 
 } console.log(x,y);
}
finalPosition(moves);*/