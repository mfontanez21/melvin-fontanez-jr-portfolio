import { Link } from "react-router-dom";
import "./PortfolioCard.css"

const PortfolioCard = ({ website }) => {
  return ( 
    <div className="body">
      <Link to={`${website.url}`} className="container">
        <img src={`${website.pic}`} className="pic"/>
        </Link>
        <h3>{website.name}</h3>
        <h4>{website.flavor}</h4>
        <Link to={`${website.github}`}><h5>Github</h5></Link>
    </div>
  );
}

export default PortfolioCard;