import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaAlignLeft, FaChartLine, FaFacebookMessenger, FaFileAlt, FaFirstOrderAlt, FaHouseUser, FaQrcode, FaRegHeart, FaShoppingCart, FaStreetView, FaUserCog } from "react-icons/fa";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Sidemenu = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  
  return (
    <>
      <ul  className={`menu bg-black text-white w-56 min-h-screen `}>
        <li>
          <Link to={'/deshboard'}>Deshboard</Link></li>
        <li><Link to={'/myorder'}>My order</Link></li>
        <li><Link to={'/review'}>Review</Link></li>
        {
          admin && <>
          <li><Link to={'/user'}>User</Link></li>
          <li><Link to={'/addservice'}>Add Services</Link></li>
          <li><Link to={'/manageservice'}>Manage Services</Link></li>
          </>
        }
      </ul>
      {/*  */}
    </>
  );
};

export default Sidemenu;