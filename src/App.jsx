import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './pages/home/home/Home';
import Navbar from './shared/Navbar';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App