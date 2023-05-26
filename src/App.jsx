// npm modules


// pages
import Landing from './components/Landing'

// components
import Nav from './components/Nav'
import Footer from './components/Footer'
import Skills from './components/Skills'

import "./App.css"

const App = () => {
  return (
    <>
      <Nav />
      <Landing/>
      <Skills/>
      <Footer />
    </>
  )
}

export default App