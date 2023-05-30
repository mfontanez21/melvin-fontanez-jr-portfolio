// npm modules
import { useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

// assets
import "../styles/Nav.css"
import { Reorder } from "@mui/icons-material"
import { useEffect, useState } from "react"

const Nav = () => {
  const [expandNavBar, setExpandNavBar] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setExpandNavBar(false)
  }, [location])

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggle">
        <button onClick={() => {
          setExpandNavBar((prev) => !prev)
        }}
      >
        <Reorder />
        </button>
      </div>
    <div className="links">
      <HashLink smooth to="/">Home</HashLink>
      <HashLink smooth to="/#skills">Skills</HashLink>
      <HashLink smooth to="/#portfolio">Portfolio</HashLink>
      <HashLink smooth to ="/#experience">Experience</HashLink>
    </div>
    </div>
  )
}

export default Nav