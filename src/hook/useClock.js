import React, { useEffect, useState } from 'react';


 

function formatDate(date) {
    if(!date) return '';

   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();

   return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
  const [timeString,setTimeString] = useState('');

  useEffect(() => {
    setInterval(() => { 
    const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
   }, 1000 );

    
},[]);

    return {timeString};
}

export default useClock;


