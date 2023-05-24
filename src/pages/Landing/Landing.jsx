

import "../../styles/Landing.css";

const Landing = () => {
  return (
    <div className="home">
      <div className="about">
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
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, Node, MUI, Vite</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              {" "}
              <img src="src/assets/postgres.svg" alt="Postgres Badge"/>
              <img src="src/assets/MongoDB.svg" alt="MongoDB Badge"/>
              RESTful Routing, 
              JSON API, 
              Mongoose, 
              Express
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span><img src="src/assets/javascript.svg" alt="JavaScript Badge"/>
            <img src="src/assets/typescript.svg" alt="TypeScript Badge"/>,EJS </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Landing;
