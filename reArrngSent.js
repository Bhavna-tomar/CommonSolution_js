
var Sentence = "is2 Thi1s T4est 3a";
var words = Sentence.split(" ");
var newArr = [];


console.log("updated==========++",newArr);// initially []

for(var i = 0; i < words.length; i++){ 
    
    for(var j = 0; j < words[i].length; j++){  
              // console.log("words[i].length", words[i].length);
        if(words[i][j] <= '9' && words[i][j] >= '0'){

            // var wordCount=words[i][j];
            // console.log("wordCount", wordCount); 
            // var wordI=words[i];
            // console.log("wordI", wordI);
            newArr[words[i][j]] = words[i];


       //     newArr[words[i][j]]  <<--------show the index value newArr[2]
            
            // console.log("arr value", newArr[i]); 
        }
        // console.log("arr value", newArr[i]);
    }
}

//  console.log("newArr",newArr); // o/p= [ <1 empty item>, 'Thi1s', 'is2', '3a', 'T4est' ]

result = newArr.join(" ");
var withNoDigits = result.replace(/[0-9]/g, '');

console.log("result",withNoDigits);  // o/p= //Thi1s is2 3a T4est
