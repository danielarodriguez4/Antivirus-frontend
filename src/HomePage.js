// HomePage.js
import React from "react";
import './HomePage.css';
import MyComponent from "./botones";
import './cards.css'



function HomePage() {

  return (
    <div className="HomePage">
      <div class= "container">
        <div className="sidebar">
        <img src={"logo2.jpg"} className="logo" alt="logo2" />
        <MyComponent />
        <div className="white-square">
          <div className='card'></div>
        </div>
        </div>    
      </div>
      </div>
  );
}

export default HomePage;
