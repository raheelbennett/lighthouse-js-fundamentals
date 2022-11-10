//We've made a mistake, our researchers had already sorted the arrays for us, from least liked to most liked—but our concat function didn't take this into account. We'll need to create a new function that keeps our data sorted.
function merge (arr1, arr2) {
  let x = arr1.concat(arr2);
  return x.sort(); 
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);