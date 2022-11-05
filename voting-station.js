const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) { //using chooseStations as a function of stations array
  let votingStation = []; //Defining a blank an array for the final output
  for (const station of stations) { 
    if(station[1] >= 20) { //condition of more than 20
      if (station[2] === "school" || station[2] === "community centre") { //condition of either a school or a community centre
        votingStation.push(station[0]); //pushing the names to the output array
      }
    }  
  }  return votingStation;
} 
console.log(chooseStations(stations));
