
// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];

//          var intersectArr=[];
//         function intersection()
  
//         const intersection = firstArray.filter(x=>secondArray.includes(x));
    
//         intersectArr.push(intersection);

//         return [...new Set(intersectArr)];

//   console.log("Intersect elements are", (intersectArr));

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

let intersectArr=[];
function intersection(data){

var intersection = firstArray.filter(x=>secondArray.includes(x));

// intersectArr.push(intersection);

return [...new Set(intersection)];
}
// console.log("Intersect elements are", (intersectArr(intersection)));
console.log("Intersect elements are  ", (intersection(intersectArr)));