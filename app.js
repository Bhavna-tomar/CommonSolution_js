

// =============================================================================
//*-------- 1. function to get the duplicate values --------*

var arr= ["apple", "banana","orange", "lemon","apple","mango","lemon"];

function getDuplicates(data){
    return data.filter((value, index)=> data.indexOf(value)!==index);
}

console.log(getDuplicates(arr));

// =============================================================================



// =============================================================================

//*-------- 2. function to remove the duplicate values --------*//

var arr= ["apple", "banana","orange", "lemon","apple","mango","lemon"];


var start= new Date().getTime();
function removeDuplicates(data){
    return [...new Set(arr)];
}
var end= new Date().getTime();
var time =end-start;

console.log(removeDuplicates(arr));
console.log('Tottal Time taken' + time);
// =============================================================================


const names=['John','Parul','Latif', 'Naman', 'Aksht','Parul','Sristhi','Latif','John'];

var start= new Date().getTime();
function removeDuplicates(names){
   
    let uniqueName=[];

    names.forEach(element => {
        if(!uniqueName.includes(element)){
         uniqueName.push(element)

        }
    });
     return uniqueName;
}
var end= new Date().getTime();
var time =end-start;


   console.log(removeDuplicates(names)); 
   console.log('Tottal Time taken' + time); 
 