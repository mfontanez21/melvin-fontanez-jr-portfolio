// npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Landing from './pages/Landing'

// components
import Nav from './components/Nav'

import "./App.css"

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={ <h1>PUPPY LIST</h1> } />
        <Route path='/portfolio' element={ <h1>PUPPY LIST</h1> } />
        <Route path='/experience' element={ <h1>PUPPY LIST</h1> } />
      </Routes>
    </>
  )
}

export default App