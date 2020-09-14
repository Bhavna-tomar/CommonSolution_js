import React, { useState, useEffect } from 'react';

import './App.css';
import Sprit from './Sprit';

function App() {

  const fps= Math.ceil(1000/60);

  const [sprits, setSprits] = useState([{x:0,y:0,vx: 1, vy: 1}, {x:100,y:10,vx: -1, vy: 2}, {x:200,y:300,vx: -1, vy: 1}, {x:400,y:300,vx: -1, vy: 1},{x:350,y:280,vx: 1, vy: 1}, {x:310,y:250,vx: -1, vy: 2}]);
  const [container, setContainer] = useState({ height: 100 , width: 100});

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

  const getNextPosition = (s, width, height, index, spritsSnapshot) => {
    if(s.x + 40 >= width || s.x  < 0 ){
      s.vx = -s.vx;
    }else



    if(s.y + 40 >= height || s.y < 0 ){
      s.vy = -s.vy;
    }

    // Todo :You have to write code for collision here


    const circleIntersect=(x1, y1, r1, x2, y2, r2) =>{

      //  distance between the two circles
      let squareDistance = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
  
      // When the distance is smaller or equal to the sum
      // of the two radius, the circles touch or overlap
      return squareDistance <= ((r1 + r2) * (r1 + r2))
  }







    const intersect=(x1, y1, w1, h1, x2, y2, w2, h2) =>{
      if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
          return false;
      }
      return true;
  }

  for (let i = 0; i < sprits.length; i++)
  {
     let s = sprits[i];
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


      if (intersect(s.x, s.y,  40, ss.x, ss.y,  40)){
        
        let vCollision = {x: ss.x - s.x, y: ss.y - s.y};

        let distance = Math.sqrt((ss.x-s.x)*(ss.x-s.x) + (ss.y-s.y)*(ss.y-s.y));
      
        let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
      
        let vRelativeVelocity = {x: s.vx - ss.vx, y: s.vy - ss.vy};
        let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
       
        if (speed < 0){
          break;
      }
        
      s.vx -= (speed * vCollisionNorm.x);
      s.vy -= (speed * vCollisionNorm.y);
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
        { sprits.map((data) => <Sprit data={data}  />)}

      </header>
    </div>
  );
}

export default App;