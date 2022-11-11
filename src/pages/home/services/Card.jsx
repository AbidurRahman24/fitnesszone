import './card.css'
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';
// {handleAddService, services}
const Card = ({service,handleAddService}) => {
  console.log(service.title)
 const {_id, title, description, price}  = service
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
        <div >
         {/* <Slider  {...settings}> */}
            <div className="card w-64 bg-base-100 shadow-xl  " style={{margin:'20px'}} >
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions flex justify-between">
    <div className='text-[24px] font-bold text-[#000000]'>$ {price}</div>
    <Link to={`/services/${_id}`}>
    <button className="btn btn-success" onClick={handleAddService}>Add To Cart</button>
    </Link>
    </div>
  </div>
</div>
{/* </Slider> */}
        </div>
    );
};

export default Card;