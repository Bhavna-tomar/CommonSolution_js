

//  Not completed Q3.

// isitialised

const mySet = new Set();

//add method ============>>
mySet.add('one');
mySet.add('two');
mySet.add('three');
mySet.add('four');
mySet.add('five');
mySet.add('six');

console.log("add item in set",mySet);

//remove method ============>>
mySet.delete('four');
console.log("delete item from a set",mySet);


// add multiple items in a set
const s = new Set([1, 2, 3, 4, 5, 6 ]);
   
const a = [...s.values()];

console.log("add array items in set",a);



