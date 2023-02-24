import React from "react";
import { useState } from 'react';
import "./Layout.css";





function Layout() {
  const[currentColor, setCurrentColor] = useState("");
  const handleOnchange = (color)=>{
    setCurrentColor(color.hex)
  }

  return (
    <div className="main-container">
      <form className="form-container">
    <label>Enter a color:
      <input type="text" />
    </label>
    <br></br>
    <br></br>
    <label>Select color:
      <input type="color" value="#0000ff"/>
    </label>
    <br></br>
    <button>Add color</button>
  </form>
  
    <a href="./">Go back to home</a>
    </div>
    
  );

}

export default Layout;

