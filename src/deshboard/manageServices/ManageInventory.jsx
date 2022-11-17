import React, { useEffect, useState } from 'react'
import Sidemenu from '../../shared/sidebar/Sidemenu'
import ManageRow from './ManageRow';

const ManageServices = () => {
  const [manage, setManage] = useState([])
  console.log(manage);
  useEffect(() => {
      fetch('http://localhost:5000/manageservice',{
        headers:{
          authorization: `bearer ${localStorage.getItem('token')}`
        }
      })
          .then(response => response.json())
          .then(data => {
           
            setManage(data)
          })
  }, [])


  return (
    <section className='flex gap-6'>
    <Sidemenu />
    <div className="m-3 text-xl text-gray-900 font-semibold">
    <p>{manage.length}</p>
    <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Title</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {manage.map((manageservice, index) => <ManageRow manage={manage} key={manageservice._id} index={index} setManage={setManage}  manageservice={manageservice}/>)}
    </tbody>
  </table>
</div>
    </div>
</section>
  )
}

export default ManageServices