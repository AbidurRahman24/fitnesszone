import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ManageRow = ({ manageservice,manage, index, setManage }) => {
    const { title, img, price, _id} = manageservice
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed){
        fetch(`https://fitnesszone-server.vercel.app/manageservice/${id}`,{
            headers:{
              authorization: `bearer ${localStorage.getItem('token')}`
            },
            method: 'DELETE'
          })
            .then(res =>res.json())
            .then(data =>{
                const remaining = manage.filter(service => service._id !== id)
                toast.success('service delete')
                setManage(remaining)
            })
        }
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th><div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div></th>
                <td>{title}</td>
                <td>{price}</td>
                <td><button className='btn btn-xs btn-error' onClick={()=>handleDelete(_id)}>delete</button></td>

            </tr>
            <ToastContainer />
        </>
    );
};

export default ManageRow;