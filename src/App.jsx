import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Deshboard from './deshboard/deshboard/Deshboard';
import NewProduct from './deshboard/newProduct/NewProduct';
import Home from './pages/home/home/Home';
import Login from './pages/login/Login';
import RequireAuth from './pages/requireAuth/RequireAuth';
import Shipment from './pages/shipment/Shipment';
import SignUp from './pages/signup/SignUp';
import Footer from './shared/footer/Footer';
import Navbar from './shared/Navbar';
const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<RequireAuth><Shipment /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="deshboard" element={<Deshboard />} />
        <Route path="addproduct" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App