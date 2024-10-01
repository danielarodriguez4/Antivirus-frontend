import React from 'react';
import Button from '@mui/material/Button';
import './botones.css';

function MyComponent() {

  // Create an object for the button data
  const buttonData = {
    text1: 'Solicitar asesoría', 
    text2: 'Calificar asesoría',
    text3: 'Calificar taller',
  };

  // Function that handles navigation


  return (
    <div className="container">
      <div className="button-container">
        <img src={"calendar.png"} className="images" alt="calendar" />
        <Button 
          key={buttonData.text1} 
          variant="contained" 
        >
          {buttonData.text1}
        </Button>
        
        <img src={"star.png"} className="images" alt="star" />
        <Button 
          key={buttonData.text2} 
          variant="contained" 
        >
          {buttonData.text2}
        </Button>

        <img src={"star.png"} className="images" alt="star" />
        <Button 
          key={buttonData.text3} 
          variant="contained" 
        >
          {buttonData.text3}
        </Button>
      </div>
    </div>
  );
}

export default MyComponent;