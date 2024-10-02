import React from "react";
import './HomePage.css';
import Botones from "./botones";
import './cards.css'



function HomePage() {
  return (
    <div className="HomePage">
      <div class= "container">
        <div className="sidebar">
        <img src={"logo2.jpg"} className="logo" alt="logo2" />
        <Botones />
        <div className="white-square">
          <div className="dashboard-container"></div>
          <div className= "card">
            <div className="card-header">
              <div className="card-title">TUTORÍAS</div>
              <div className="card-value">0</div>
            </div>
          </div>

          <div className= "card">
            <div className="card-header">
              <div className="card-title">TALLERES</div>
              <div className="card-value">0</div>
            </div>
          </div>

          <div className= "card">
            <div className="card-header">
              <div className="card-title">TALLERES PENDIENTES POR CALIFICAR</div>
              <div className="card-value">0</div>
            </div>
          </div>

          <div className= "card">
            <div className="card-header">
              <div className="card-title">ASESORIAS PENDIENTES POR CALIFICAR</div>
              <div className="card-value">0</div>
            </div>
          </div>

        </div>
        </div>    
      </div>
      </div>
  );
}

export default HomePage;
