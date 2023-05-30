// npm modules


// pages
import Landing from './components/Landing'

// components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'

import "./App.css"

const App = () => {
  return (
    <>
      <Nav />
      <Landing/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Footer />
    </>
  )
}

export default App