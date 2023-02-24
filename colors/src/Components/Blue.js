import { useState } from 'react';

function Blue() {
  const[currentColor, setCurrentColor] = useState("#4a90e2")
  
  const appStyle = {
         backgroundColor: currentColor,
         height:"100vh",
         textAlign: "center"
  }
  
  return (
    <div className="App" style={appStyle}>
       <h1>This is color Blue with Hex {currentColor}</h1>
       <a href='./'><h1>Go Back</h1></a>

    </div>
  );

}

export default Blue;