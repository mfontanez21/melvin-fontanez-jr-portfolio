// npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'

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
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={ <h1>About Me</h1> } />
        <Route path='/portfolio' element={ <h1>Portfolio</h1> } />
        <Route path='/experience' element={ <h1>Experience</h1> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App