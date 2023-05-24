// npm modules
import { NavLink, useLocation } from "react-router-dom"

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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to ="/experience">Experience</NavLink>
    </div>
    </div>
  )
}

export default Nav