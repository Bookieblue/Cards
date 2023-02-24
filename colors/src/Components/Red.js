import {SketchPicker, sketchpicker} from 'react-color'
import { useState } from 'react';

function Red() {
  const[currentColor, setCurrentColor] = useState("#d0021b")
  const handleOnchange = (color)=>{
    setCurrentColor(color.hex)
  }
  
  const appStyle = {
         backgroundColor: currentColor,
         height:"100vh",
         textAlign: "center"
  }
  return (
    <div className="App" style={appStyle}>
       <h1>This is Color Red with Hex {currentColor}</h1>
       {/* //<SketchPicker color={currentColor}
       onChangeComplete={handleOnchange} /> */}
      
      <a href='./'><h1>Go Back</h1></a>

    </div>
  );   

}

export default Red;