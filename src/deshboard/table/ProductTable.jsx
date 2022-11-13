import React, { useEffect, useState } from 'react';


const ProductTable = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        // console.log(data)
      })
  }, [])

  const handleDelete = (id) =>{
    const proceed = window.confirm('Are you sure?')
    if(proceed){
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(product);
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
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              product.map(product => (
                // console.log(product._id);

                <tr key={product._id}>
                  <th>{product._id}</th>
                  <td>{product.email}</td>
                  <td>{product.service}</td>
                  <td>{product.address}</td>
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