import React, { useEffect, useState } from 'react';
import Sidemenu from '../../shared/sidebar/Sidemenu';
import UserTable from './UserTable';

const AllUser = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://fitnesszone-server.vercel.app/user', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, [])

  return (
    <>
      <section className='flex gap-6'>
        <Sidemenu />
        <div className="m-3 text-xl text-gray-900 font-semibold">
          <ul>
            <li>Total User: {user.length}</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Remove User</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map(user => ( <UserTable key={user._id} user={user} /> ))
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