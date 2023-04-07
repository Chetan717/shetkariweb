import React, { useState, useEffect } from "react";


import { TypeAnimation } from 'react-type-animation';
 
export default function TyoerComp (){
  return (
    <TypeAnimation
      sequence={[
        'कृषी 🚜', // Types 'One'
        1000, // Waits 1s
        'पशुपालन 🐮', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Education 🏫', // Types 'Three' without deleting 'Two'
        3000,
        'IPL/Sport 🏏',
        3000,
        'Health 👩‍⚕️',
        3000,
        'Tech 💻',
        () => {
          
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};


