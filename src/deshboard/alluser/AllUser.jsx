import React, { useEffect, useState } from 'react';
import Sidemenu from '../../shared/sidebar/Sidemenu';
import UserTable from './UserTable';

const AllUser = () => {
    const [user, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/user',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data)
        // console.log(data)
      })
  }, [])
  
    return (
        <>
            <section className='flex gap-6'>
                <Sidemenu />
                <div className="m-3 text-xl text-gray-900 font-semibold">
                   <ul>
                    <li>{user.length}</li>
                   </ul>
                   <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map(user => (
                // console.log(product._id);
                <UserTable key={user._id} user={user}/>
               
             ))
            }

          </tbody>
        </table>
      </div>
                </div>

            </section>
        </>
    );
};

export default AllUser;