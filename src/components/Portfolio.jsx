import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { Link } from "react-router-dom";

import nodeTendo from "../assets/nodetendo.png"
import war from "../assets/war.png"
import bamm from "../assets/bammvoyage.png"
import mem from '../assets/mem.png'


const Portfolio = () => {

  const websites = [{

    name: "MEM-Stack",
    url: "https://mem-stack.netlify.app/",
    pic: mem,
    tech: "TypeScript | PostgreSQL | Express | Node.js | React",
    github: "https://github.com/mfontanez21/MEM-Stack-Front-End",
    flavor: "Yearbook app celebrating the GA SEI 3/20 cohort"

  },
    {
    name: "BAMM Voyage",
    url: "https://bamm-voyage.netlify.app/",
    pic: bamm,
    tech: "JavaScript | CSS | Express | Mongoose | Node.js | React | JSX",
    github: "https://github.com/mfontanez21/bamm-voyage-front-end",
    flavor: "Robust travel planning app for those with wanderlust"

  },

  {
    name: "NodeTendo 64",
    url: "https://nodetendo64.fly.dev/",
    pic: nodeTendo,
    tech: "JavaScript | HTML | CSS | Express | Mongoose | Node.js",
    github: "https://github.com/mfontanez21/NodeTendo64",
    flavor: "Retro Video Game collecting app oozing with nostalgic design"
  },

  {
    name: "The Rhythm of WAR!!",
    url: "https://therhythmofwar.netlify.app/",
    pic: war,
    tech: "JavaScript | HTML | CSS",
    github: "https://github.com/mfontanez21/Medieval-War",
    flavor: "High-Fantasy themed version of the classic card game War against a virtual opponent"
  }
]

  return ( 
    <div className="title">
      <h1>Portfolio</h1>
    <div className="container">
      <Link id="portfolio"/>
      {websites.map((website, idx) => (
        <PortfolioCard key={idx} website={website}/>
      ))}
    </div>
    </div>
  );
}

export default Portfolio;