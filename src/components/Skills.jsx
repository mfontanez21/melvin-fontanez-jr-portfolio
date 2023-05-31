import { Link } from "react-router-dom"

import "../styles/Landing.css"

//assets
import reactBadge from "../assets/react.svg"
import htmlBadge from "../assets/html5.svg"
import cssBadge from "../assets/css3.svg"
import muiBadge from "../assets/mui.svg"
import viteBadge from "../assets/vite.svg"
import postgresBadge from "../assets/postgres.svg"
import mongoBadge from '../assets/MongoDB.svg'
import nodeBadge from '../assets/node.svg'
import mongooseBadge from '../assets/mongoose.svg'
import expressBadge from '../assets/express.svg'
import sequelizeBadge from '../assets/sequelize.svg'
import jsBadge from '../assets/javascript.svg'
import tsBadge from '../assets/typescript.svg'


const Skills = () => {
  return(
    <div className="skills">
      <Link id="skills"/>
    <h1>Skills</h1>
    <ol className="list">
      <li className="item">
        <h2>Front-End</h2>
        <span>
          <img src={reactBadge} alt="React Badge"/>
          <img src={htmlBadge} alt="HTML Badge"/>
          <img src={cssBadge} alt="CSS Badge"/>
          <img src={muiBadge} alt="Mui Badge"/> 
          <img src={viteBadge} alt="Vite Badge"/>
          </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
          {" "}
          <img src={postgresBadge} alt="Postgres Badge"/>
          <img src={mongoBadge} alt="MongoDB Badge"/>
          <img src={nodeBadge} alt="Node Badge"/>
          <img src={mongooseBadge} alt="Mongoose Badge"/> 
          <img src={expressBadge} alt="Express Badge"/>
          <img src={sequelizeBadge} alt="Sequelize Badge"/>
        </span>
      </li>
      <li className="item">
        <h2>Languages</h2>
        <span><img src={jsBadge} alt="JavaScript Badge"/>
        <img src={tsBadge} alt="TypeScript Badge"/>
        </span>
      </li>
    </ol>
  </div>
  )
}

export default Skills