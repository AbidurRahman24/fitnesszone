import './hero.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpg'
const Hero = () => {
  return (
    <>
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img src={slider3} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider2} className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;