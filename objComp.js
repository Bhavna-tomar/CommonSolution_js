
 var _ = require('lodash');

 const obj1 ={
      name:"bhavna",
      age:25,
      height:9,
 };
 
 const obj2 ={
      name:"bhavna",
      age:25,
      height:9,
 };
 
 console.log(JSON.stringify({a: obj1}) === JSON.stringify({a: obj2})); //true
 console.log(_.isEqual(obj1, obj2));   //true
 
 //if the sequence of its properties is changed then as the following
 
 
 const obj1 ={
      age:25,
      height:9,
      name:"bhavna",
 };
 
 const obj2 ={
      name:"bhavna",
      height:9,
      age:25,
      
 };
 console.log(JSON.stringify({a: obj1}) === JSON.stringify({a: obj2}));  //false
 console.log(_.isEqual(obj1, obj2));  //true