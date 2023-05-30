
import { LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Summarize } from "@mui/icons-material";
import "../styles/Footer.css"
import { Link } from "react-router-dom";

function footer () {
  return(
    <div className="footer">
    <div className="socialMedia"> 
    <Link to={"https://www.linkedin.com/in/melvin-fontanez-jr/"} target="_blank" rel="noreferrer">
      
      <LinkedIn />
    </Link>
    <Link to={"https://twitter.com/_mfjr"} target="_blank" rel="noreferrer">
      <Twitter/>
    </Link>
    <Link to ={"https://github.com/mfontanez21"} target="_blank" rel="noreferrer">
      <GitHub/>
    </Link>
    <Link to ={"https://docs.google.com/document/d/1JXqHBYg8qAaVu-AYuT_rHteYo-1BV2QcOpSif41izzk/edit?usp=sharing"} target="_blank" rel = "noreferrer">
      <Summarize/>
      </Link>
    </div>
    <p> &copy; 2023 mfontanezjr.dev </p>
    </div>
  )
}

export default footer