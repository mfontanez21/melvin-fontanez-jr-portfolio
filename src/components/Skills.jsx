import { Link } from "react-router-dom"


const Skills = () => {
  return(
    <div className="skills">
      <Link id="skills"/>
    <h1>Skills</h1>
    <ol className="list">
      <li className="item">
        <h2>Front-End</h2>
        <span>
          <img src="src/assets/react.svg" alt="React Badge"/>
          <img src="src/assets/html5.svg" alt="HTML Badge"/>
          <img src="src/assets/css3.svg" alt="CSS Badge"/>
          <img src="src/assets/mui.svg" alt="Mui Badge"/> 
          <img src="src/assets/vite.svg" alt="Vite Badge"/>
          </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
          {" "}
          <img src="src/assets/postgres.svg" alt="Postgres Badge"/>
          <img src="src/assets/MongoDB.svg" alt="MongoDB Badge"/>
          <img src="src/assets/node.svg" alt="Node Badge"/>
          <img src="src/assets/mongoose.svg" alt="Mongoose Badge"/> 
          <img src="src/assets/express.svg" alt="Express Badge"/>
          <img src="src/assets/sequelize.svg" alt="Sequelize Badge"/>
        </span>
      </li>
      <li className="item">
        <h2>Languages</h2>
        <span><img src="src/assets/javascript.svg" alt="JavaScript Badge"/>
        <img src="src/assets/typescript.svg" alt="TypeScript Badge"/>
        </span>
      </li>
    </ol>
  </div>
  )
}

export default Skills