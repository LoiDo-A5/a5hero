import React, { useEffect, useState } from 'react';
  

function randomColor() { 
    const COLOR_LIST = ['red','green','yellow'];
    const random = Math.trunc(Math.random()* 3 );
     return COLOR_LIST[random];
}

function useMagicColor( ) {
     const[color,setColor] = useState('transparent');

     useEffect(() => {
     const colorInterval = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);
     },1000);

     return () => {
         clearInterval(colorInterval);
     }
     },[]);
    
    return color;
}

export default useMagicColor;