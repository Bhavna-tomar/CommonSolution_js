import React, { useState, useEffect } from 'react'
import logo from './logo.svg';

export default function Sprit(props) {

  const [state, setstate] = useState({left:0,top:0});

  useEffect(() => {

    if(props.data)
    {
      const { x , y} = props.data;
      setstate({left:x, top:y})
    }

  }, [props]);

  return (
    <div>
        <img style={{...state, position : 'absolute'}} src={logo} className="App-logo" alt="logo" />
    </div>
  )
}
