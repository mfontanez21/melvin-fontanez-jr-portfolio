
import "../styles/Landing.css";

import pfp from "../assets/temppic.jpg"


const Landing = () => {
  return (
    <div className="home">
      <div className="about">
      <img src={pfp} className="pfp"/>
        <h2>Melvin Fontanez Jr</h2>
        <div className="prompt">
          {" "}
          
          <p>
            I am a full-stack developer who combines my passion for building
            with creative problem-solving skills to deliver innovative and
            robust solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
