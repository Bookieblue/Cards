import { useState } from 'react';
import React from 'react';

const Green =() => {
  const[currentColor, setCurrentColor] = useState("#7ed321")
  
  
  const appStyle = {
         backgroundColor: currentColor,
         height:"100vh",
         textAlign: "center"
  }
  
  return (
    <div className="App" style={appStyle}>
       <h1>This is Color green with Hex {currentColor}</h1>
       <a href='./'><h1>Go Back</h1></a>

    </div>
  );

}

export default Green;