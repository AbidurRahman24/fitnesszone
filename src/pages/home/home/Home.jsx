import React from 'react'
import Footer from '../../../shared/footer/Footer'
import Navbar from '../../../shared/Navbar'
import Features from '../features/Features'
import Hero from '../hero/Hero'
import Services from '../services/Services'
import Test from '../testimonial/Test'
import Tranning from '../tranning/Tranning'

const Home = () => {
  return (
    <>
    <div className="container mx-auto py-3">
      <Navbar/>
    <Hero />
    <Services />
    <Tranning />
    <Features/>
    <Test />
    <Footer />
    </div>
    </>
  )
}

export default Home