import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserTable = ({user}) => {
    const {email, role} = user
  const makeAdmin = () =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
        method:'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
      .then(res => {
        if(res.status === 403){
            toast.error('Failed to make an admin')
        }
        return res.json()})
      .then(data => {
        if(data.modifiedCount > 0){

            // setUser(data)
            console.log(data)
            toast.success("Successfully make admin")
        }
      })
  }
    return (
        <>
            <tr >
                  <td>{email}</td>
                  <td>{role!== 'admin' && <button className='btn btn-xs'  onClick={makeAdmin}>Make Admin</button>}</td>
                  <td><button className='btn btn-xs' >Remove user</button></td>
                </tr> 
                <ToastContainer />
        </>
    );
};

export default UserTable;