
/*    as using "this" keyword alone as well in regular functions 
       it referes to the global object/refers to the window object*/

//    ==========>>

//        function sum(){
//            var add=2+3;
//            console.log("add", +add);
//            console.log(this);           //Object [global] or not refer to the regular function 
//        }
//    sum();


var myObject = { 
    foo: "bar",    
     func : function() {    
        var self =this;  
         
        // but here the function is inside an object

    //eg.--->>   console.log(this);
                 //here this only referes to the owner object like below 
   // o/p--->  { foo: 'bar', func: [Function: func] } 
   
      

        console.log("outer func:  this.foo = " + this.foo);    //
        console.log("outer func:  self.foo = " + self.foo);    //  it also represent the owner object.
        (function() {   
           // it will refer to window object.
          // In window obj foo is not defined, so it will give the output undefined
            console.log("inner func:  this.foo = " + this.foo);   

         /*inner function can have access to the outer function variables 
           as well as all the global variables*/
            console.log("inner func:  self.foo = " + self.foo); 

       
        }());    
    }    
};    
myObject.func();


