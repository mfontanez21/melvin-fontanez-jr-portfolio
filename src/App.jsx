// npm modules


// pages
import Landing from './pages/Landing/Landing'

// components
import Nav from './components/Nav'
import Footer from './components/Footer'

import "./App.css"

const App = () => {
  return (
    <>
      <Nav />
      <Landing/>
      <Footer />
    </>
  )
}

export default App