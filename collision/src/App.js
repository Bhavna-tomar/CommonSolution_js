import React, { useState, useEffect } from 'react';

import './App.css';
import Sprit from './Sprit';

function App() {

  const fps= Math.ceil(1000/60);

  const [sprits, setSprits] = useState([{x:0,y:0,vx: 1, vy: 1}, {x:100,y:10,vx: -1, vy: 2}, {x:200,y:300,vx: -1, vy: 1}, {x:400,y:300,vx: -1, vy: 1},{x:350,y:280,vx: 1, vy: 1}, {x:310,y:250,vx: -1, vy: 2},{x:500,y:435,vx: -1, vy: 2},{x:480,y:427,vx: -1, vy: 2},{x:80,y:100,vx: 1, vy: 1}, {x:100,y:70,vx: -1, vy: 2}]);
  const [container, setContainer] = useState({ height: 100 , width: 100});

  const damping = 0.90;
  const g = 0.25;
  const radius =40;
  

  useEffect(() => {
    const height = document.getElementById('container').clientHeight;
    const width = document.getElementById('container').clientWidth;
    setContainer({height,width });

  

    setInterval(() => {
      const spritsSnapshot = sprits.map(s => ({...s}));
     
      setSprits( ss => ss.map((s,index) =>{
        
        return getNextPosition(s,width , height, index, spritsSnapshot);
      }));
    }, fps);

  }, [fps])

  
  
  const getNextPosition = (s, width, height,index, spritsSnapshot) => {

     s.vy += g ;

     s.x += s.vx;
     s.y += s.vy;

    if(s.x + 40 >= width || s.x  < 0 ){
      
      s.vx = -s.vx;
    }else if(s.y + 40 >= height || s.y < 0 ){
      s.vy = -s.vy;
    } 

    
    
    // Todo :You have to write code for collision here
    
  
    const intersect=(x1, y1, w1, h1, x2, y2, w2, h2) =>{
      if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
          return false;
      }
      return true;
  }

  for (let i = 0; i < sprits.length; i++)
  {
     let obj1 = sprits[i];
    //  add for damping
    

    if (obj1.x + radius >= width) {
      obj1.vx = -obj1.vx * damping;
      obj1.x = width - radius;
    } else if (obj1.x - radius <= 0) {
      obj1.vx = -obj1.vx * damping;
      obj1.x = radius;
    }
    if (obj1.y + radius >= height) {
      obj1.vy = -obj1.vy * damping;
      obj1.y = height - radius;
      
    } else if (obj1.y - radius <= 0) {
      obj1.vy = -obj1.vy * damping;
      obj1.y = radius;
    }

    
      for (let j = i + 1; j < sprits.length; j++)
      {
       let   obj2 = sprits[j];


      //comparision of two objects for collision 
      if (intersect(obj1.x, obj1.y, 40, 40, obj2.x, obj2.y, 40, 40)){
        
        let vCollision = {x: obj2.x - obj1.x, y: obj2.y - obj1.y};

        let distance = Math.sqrt((obj2.x-obj1.x)*(obj2.x-obj1.x) + (obj2.y-obj1.y)*(obj2.y-obj1.y));
      
        let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
      
        let vRelativeVelocity = {x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy};
        let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
       
        // speed = speed  * Math.min(s.damping, ss.damping);

        if (speed < 0){
          break;
      }
       
      obj1.vx  -= (speed * vCollisionNorm.x);
      obj1.vy  -= (speed * vCollisionNorm.y);
      obj2.vx += (speed * vCollisionNorm.x);
      obj2.vy += (speed * vCollisionNorm.y);
       
      }
      }
  }
    s.x = s.x + s.vx;
    s.y = s.y + s.vy;
    return s;
  };
  return (
    <div className="App">
      <header id="container" className="App-header">
        { sprits.map((data) => <Sprit data={data} />)}

      </header>
    </div>
  );
}

export default App;