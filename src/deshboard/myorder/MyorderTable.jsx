import React, { useEffect, useState } from 'react';

const MyorderTable = ({ order }) => {
  //     const [myOrder, setMyOrder] = useState([])

  //   useEffect(() => {
  //     fetch('https://fitnesszone-server.vercel.app/myorder')
  //       .then(res => res.json())
  //       .then(data => {
  //         setMyOrder(data)
  //       })
  //   }, [])
  return (
    <>
      
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{order.name}</div>
                    <div className="text-sm opacity-50">{order.address}</div>
                  </div>
                </div>
              </td>
              <td>
                {order.service}
                <br />
                <span className="badge badge-ghost badge-sm">{order._id}</span>
              </td>
              <td>{order.email}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>

        
    </>
  );
};

export default MyorderTable;