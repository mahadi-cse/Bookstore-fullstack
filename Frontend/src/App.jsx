import React from 'react'
import Home from './components/Home/Home'
import{Routes,Route} from 'react-router-dom'
import Courses from './components/Home/Courses/Courses'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element = {<Courses/>} />
    </Routes>
    
    </>
  )
}

export default App
