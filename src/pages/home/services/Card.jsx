import './card.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sdata from './Sdata';
import { Link } from 'react-router-dom';
// {handleAddService, services}
const Card = () => {
  // console.log(object);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
}
    return (
        <>
         <Slider {...settings}>
     {Sdata.productItems.map((data) => {
      return(
            <div className="card w-80 bg-base-100 shadow-xl " style={{margin:'20px'}} >
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions flex justify-between">
    <div className='text-[24px] font-bold text-[#000000]'>$495.00</div>
    <Link to={`/services/${data._id}`}>
    <button className="btn btn-success">Add To Cart</button>
    </Link>
    </div>
  </div>
</div>
)})}
</Slider>
        </>
    );
};

export default Card;