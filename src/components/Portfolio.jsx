import PortfolioCard from "./PortfolioCard/PortfolioCard";

const Portfolio = () => {

  const websites = [{
    name: "The Rhythm of WAR!!",
    url: "https://therhythmofwar.netlify.app/",
    pic: "src/assets/war.png",
    github: "https://github.com/mfontanez21/Medieval-War",
    flavor: "High-Fantasy themed version of the classic card game War against a virtual opponent"
  },

  {
    name: "NodeTendo 64",
    url: "https://nodetendo64.fly.dev/",
    pic: "src/assets/nodetendo.png",
    github: "https://github.com/mfontanez21/NodeTendo64",
    flavor: "Retro Video Game collecting app oozing with nostalgic design"
  },

  {
    name: "BAMM Voyage",
    url: "https://bamm-voyage.netlify.app/",
    pic: "src/assets/bammvoyage.png",
    github: "https://github.com/mfontanez21/bamm-voyage-front-end",
    flavor: "Robust travel planning app for those with wanderlust"
  }
]

  return ( 
    <div className="container">
      {websites.map((website, idx) => (
        <PortfolioCard key={idx} website={website}/>
      ))}
    </div>
  );
}

export default Portfolio;