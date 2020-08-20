
var Sentence = "is2 Thi1s T4est 3a";
var words = Sentence.split(" ");
var newArr = [];


console.log("updated==========++",newArr);

for(var i = 0; i < words.length; i++){ 
    
    for(var j = 0; j < words[i].length; j++){  
              
        if(words[i][j] <= '9' && words[i][j] >= '0'){

            
            newArr[words[i][j]] = words[i];       
           
        }
        
    }
}

//  console.log("newArr",newArr); // o/p= [ <1 empty item>, 'Thi1s', 'is2', '3a', 'T4est' ]

result = newArr.join(" ");
var resultWithNoDigits = result.replace(/[0-9]/g, '');

console.log("result",resultWithNoDigits); 
