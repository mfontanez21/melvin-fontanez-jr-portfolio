import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { Link } from "react-router-dom";

import nodeTendo from "../assets/nodetendo.png"
import war from "../assets/war.png"
import bamm from "../assets/bammvoyage.png"

const Portfolio = () => {

  const websites = [{
    name: "The Rhythm of WAR!!",
    url: "https://therhythmofwar.netlify.app/",
    pic: war,
    github: "https://github.com/mfontanez21/Medieval-War",
    flavor: "High-Fantasy themed version of the classic card game War against a virtual opponent"
  },

  {
    name: "NodeTendo 64",
    url: "https://nodetendo64.fly.dev/",
    pic: nodeTendo,
    github: "https://github.com/mfontanez21/NodeTendo64",
    flavor: "Retro Video Game collecting app oozing with nostalgic design"
  },

  {
    name: "BAMM Voyage",
    url: "https://bamm-voyage.netlify.app/",
    pic: bamm,
    github: "https://github.com/mfontanez21/bamm-voyage-front-end",
    flavor: "Robust travel planning app for those with wanderlust"
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