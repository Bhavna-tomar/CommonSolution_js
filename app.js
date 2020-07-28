// var msg = 'Hello World';
// console.log(msg);

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

function removeDuplicates(data){
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));

// =============================================================================


const names=['John','Parul','Latif', 'Naman', 'Aksht','Parul','Sristhi','Latif','John'];


function removeDuplicates(names){
   
    let uniqueName=[];

    names.forEach(element => {
        if(!uniqueName.includes(element)){
         uniqueName.push(element)

        }
    });
     return uniqueName;
}
   console.log(removeDuplicates(names));  
 