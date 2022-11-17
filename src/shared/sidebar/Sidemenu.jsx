import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaAlignLeft, FaChartLine, FaFacebookMessenger, FaFileAlt, FaFirstOrderAlt, FaHouseUser, FaQrcode, FaRegHeart, FaShoppingCart, FaUserCog } from "react-icons/fa";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Sidemenu = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
    const menus = [
        {name:'Deshboard', link:'/deshboard', icon: FaQrcode},
        {name:'Add Service', link:'addservice', icon: FaHouseUser},
        {name:'My order', link:'/myorder', icon: FaFirstOrderAlt},
        {name:'All user', link:'/alluser', icon: FaHouseUser, margin:true},
        {name:'File Manager', link:'/', icon: FaFileAlt},
        {name:'Cart', link:'/', icon: FaShoppingCart},
        {name:'Saved', link:'/', icon: FaRegHeart, margin: true},
        {name:'Setting', link:'/', icon: FaUserCog},
      ]
      const [open, setOpen] = useState(true)
    return (
        <>
         <div className={`bg-black min-h-screen  ${open ? 'w-72' : 'w-16'} text-gray-100 px-4`}>
      <div className='py-3 flex justify-end'>
      <FaAlignLeft size={26} className='cursor-pointer' onClick={()=> setOpen(!open)}/>
      </div>
      <div className='mt-4 flex flex-col gap-4 relative'>
        {
          menus?.map((menu, i) => 
            
        <Link to={menu?.link} className={`${menu?.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800`}>
          <div>
            {React.createElement(menu?.icon, {size:'20'})}
          </div>
          <h2
          style={{transitionDelay: `${i + 3}00ms`}}
          className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
          <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover: duration-200 group-hover:w-fit`}>
            {menu?.name}
          </h2>
        </Link>
            )
        }
        {
          admin &&<>
          <Link to='/alluser'>user</Link>
          <Link to='/addservice'>Add Services</Link>
          <Link to='/manageservice'>Manage Services</Link>
          
          </>
        }
      </div>
    </div>   
        </>
    );
};

export default Sidemenu;