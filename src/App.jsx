// npm modules


// pages
import Landing from './components/Landing'

// components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

import "./App.css"

const App = () => {
  return (
    <>
      <Nav />
      <Landing/>
      <Skills/>
      <Portfolio/>
      <Footer />
    </>
  )
}

export default App