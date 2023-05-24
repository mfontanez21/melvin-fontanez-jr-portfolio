import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "../styles/Footer.css"

function footer () {
  return(
    <div className="footer">
    <div className="socialMedia"> 
      <LinkedIn/>
      <Twitter/>
      <GitHub/>
    </div>
    <p> &copy; 2023 mfontanezjr.dev </p>
    </div>
  )
}

export default footer