import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ProductTable = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fitnesszone-server.vercel.app/orders')
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [])

  const handleDelete = (id) =>{
    const proceed = window.confirm('Are you sure?')
    if(proceed){
        const url = `https://fitnesszone-server.vercel.app/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            const remaining = product.filter(product => product._id !== id)
            setProduct(remaining)
        })
    }
}

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              product.map(product => (
                <tr key={product._id}>
                  <td>{product.service}</td>
                  <td>{product.email}</td>
                  <td>{product.address}</td>
                  <td>
                    {(product.price && !product.paid ) && <Link to={`/payment/${product._id}`}><button className='btn btn-xs btn-success'>PAY</button></Link>}
                    {(product.price && product.paid ) && <span className='text-success'>PAID</span>}
                    
                    </td>
                  <td><button onClick={()=>handleDelete(product._id)}>X</button></td>
                </tr>
             ))
            }

          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;