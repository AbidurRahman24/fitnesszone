import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AllUser from './deshboard/alluser/AllUser';
import Deshboard from './deshboard/deshboard/Deshboard';
import ManageServices from './deshboard/manageServices/ManageInventory';
import MyOrder from './deshboard/myorder/MyOrder';
import NewProduct from './deshboard/newProduct/NewProduct';
import Home from './pages/home/home/Home';
import Login from './pages/login/Login';
import RequireAdmin from './pages/requireAuth/RequireAdmin';
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
        <Route path="addservice" element={<NewProduct />} />
        <Route path="manageservice" element={<RequireAuth><RequireAdmin><ManageServices /></RequireAdmin></RequireAuth>} />
        <Route path="alluser" element={<RequireAdmin> <AllUser /></RequireAdmin> } />
        <Route path="myorder" element={<RequireAuth> <MyOrder /></RequireAuth> } />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App