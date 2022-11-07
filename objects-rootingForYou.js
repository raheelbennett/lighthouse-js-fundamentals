const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 100,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 20,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 30,
    plumpness: 3
  }
]
const metric = 'redness'


const judgeVegetable = function (vegetables, metric) { 
  let y = vegetables[0][metric]; //establishing a starting point for value of redness
  let z=0; // starting point for the index
  for(let i=1 ; i<vegetables.length ; i++) { //starting the count from 1 as starting point was 0 and already accounted for outside the loop
    if(vegetables[i][metric] > y) { // comparing the next element against initial and if greater it will replace y
      y= vegetables[i][metric];
      z=i; // if value of next element is greater than previous highest value it will update the index stored in z 
   }  
 } return vegetables[z].submitter;
}
console.log(judgeVegetable(vegetables,metric));
