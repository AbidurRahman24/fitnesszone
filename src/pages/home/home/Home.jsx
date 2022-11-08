import React from 'react'
import Hero from '../hero/Hero'
import Services from '../services/Services'
import Tranning from '../tranning/Tranning'

const Home = () => {
  return (
    <>
    <div className="container mx-auto py-3">
    <Hero />
    <Services />
    <Tranning />
    </div>
    </>
  )
}

export default Home