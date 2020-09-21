import React, { useState, useEffect } from 'react';

import './App.css';
import Sprit from './Sprit';

function App() {

  const fps= Math.ceil(1000/60);

  const [sprits, setSprits] = useState([{x:0,y:0,vx: 1, vy: 1}, {x:100,y:10,vx: -1, vy: 2}, {x:200,y:300,vx: -1, vy: 1}, {x:400,y:300,vx: -1, vy: 1},{x:350,y:280,vx: 1, vy: 1}, {x:310,y:250,vx: -1, vy: 2},{x:500,y:435,vx: -1, vy: 2},{x:480,y:427,vx: -1, vy: 2},{x:80,y:100,vx: 1, vy: 1}, {x:100,y:70,vx: -1, vy: 2}]);
  const [container, setContainer] = useState({ height: 100 , width: 100});

  const damping = 0.90;
  const bounce= 0.75;
  const g = 0.25;
  const radius =40;
  

  useEffect(() => {
    const height = document.getElementById('container').clientHeight;
    const width = document.getElementById('container').clientWidth;
    setContainer({height,width });

  

    setInterval(() => {
      const spritsSnapshot = sprits.map(s => ({...s}));
      setSprits( ss => ss.map((s,index) =>{
        console.log("ss", ss);
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

    // if (s.y + s.radius >= height) {
    //   s.vy *= -s.bounce
    //   s.y = height - s.radius
    //   s.vx *= damping
    // }

    // // top bound 

    // if (s.y - s.radius <= 0) {
    //   s.vy *= -s.bounce
    //   s.y = s.radius
    //   s.vx *= damping
    // }

    // // left bound

    // if (s.x - s.radius <= 0) {
    //   s.vx *= -s.bounce
    //   s.x = s.radius
    // }
    // // right bound

    // if (s.x + s.radius >= width) {
    //   s.velX *= -s.bounce
    //   s.x =  width - s.radius
    // }

    
    
    // Todo :You have to write code for collision here
    
  
    const intersect=(x1, y1, w1, h1, x2, y2, w2, h2) =>{
      if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
          return false;
      }
      return true;
  }

  for (let i = 0; i < sprits.length; i++)
  {
     let s = sprits[i];
    //  add for damping
    

    if (s.x + radius >= width) {
      s.vx = -s.vx * damping;
      s.x = width - radius;
    } else if (s.x - radius <= 0) {
      s.vx = -s.vx * damping;
      s.x = radius;
    }
    if (s.y + radius >= height) {
      s.vy = -s.vy * damping;
      s.y = height - radius;
      
    } else if (s.y - radius <= 0) {
      s.vy = -s.vy * damping;
      s.y = radius;
    }

    
    // damping 


      for (let j = i + 1; j < sprits.length; j++)
      {
       let   ss = sprits[j];


          // if (intersect(s.x, s.y, s.vx, s.vy, ss.x, ss.y, ss.vx, ss.vy)){
          //    console.log('collision Occures');
          // }

      //  if (intersect(s.x, s.y, s.vx, s.vy, ss.x, ss.y, ss.vx, ss.vy)){
      //        console.log('collision Occures');
      //     }
      //     if (intersect(s.x, s.y, 40, 40, ss.x, ss.y, 40, 40)){
      //       console.log('collision Occures'+i+','+j);
      //       s.vx = -s.vx;
      //       s.vy = -s.vy;
      //       ss.vx = -ss.vx;
      //       ss.vy = -ss.vy;
      //       break;
      //    }
      
      if (intersect(s.x, s.y, 40, 40, ss.x, ss.y, 40, 40)){
        
        let vCollision = {x: ss.x - s.x, y: ss.y - s.y};

        let distance = Math.sqrt((ss.x-s.x)*(ss.x-s.x) + (ss.y-s.y)*(ss.y-s.y));
      
        let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
      
        let vRelativeVelocity = {x: s.vx - ss.vx, y: s.vy - ss.vy};
        let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
       
        // speed = speed  * Math.min(s.damping, ss.damping);

        if (speed < 0){
          break;
      }
       
      s.vx  -= (speed * vCollisionNorm.x);
      s.vy  -= (speed * vCollisionNorm.y);
      ss.vx += (speed * vCollisionNorm.x);
      ss.vy += (speed * vCollisionNorm.y);
       
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