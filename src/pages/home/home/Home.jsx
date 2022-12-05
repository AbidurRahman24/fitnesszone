import React from 'react'
import Footer from '../../../shared/footer/Footer'
import Navbar from '../../../shared/Navbar'
import Count from '../../count/Count'
import Faq from '../../faq/Faq'
import Features from '../features/Features'
import Hero from '../hero/Hero'
import HeroSlider from '../hero/HeroSlider'
import Services from '../services/Services'
import Test from '../testimonial/Test'
import Tranning from '../tranning/Tranning'

const Home = () => {
  return (
    <>
     <div className='bg-base-100'>
     <div className='container mx-auto '>
     <Navbar/>
     </div>
     </div>
    <div className="container mx-auto">
    {/* <Hero /> */}
    <HeroSlider />
    <Services />
    <Count />
    <Tranning />
    <Features/>
    <Test />
    <Faq />
    <Footer />
    </div>
    </>
  )
}

export default Home