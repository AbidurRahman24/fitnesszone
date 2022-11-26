import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ service }) => {
    const { _id, title, description, price, img} = service
    return (
        <>
            <div className="card w-64 bg-base-100 shadow-xl h-full " style={{ margin: '20px' }} >
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions flex justify-between">
            <div className='text-[24px] font-bold text-[#000000]'>$ {price}</div>
            <Link to={`/services/${_id}`}>
              <button className="btn btn-success" >Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
        </>
    );
};

export default ShopCard;