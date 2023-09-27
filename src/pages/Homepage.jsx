import React from 'react'
import Hero from '../components/hero/Hero'
import Media from '../components/media/Media'
import CardSection from '../components/cardSection/CardSection'
import Carousel from '../components/carousel/Carousel'


const Homepage = () => {
  return (
    <div>
        <Hero />
        <Media />
        <CardSection />
        <Carousel />
    </div>
  )
}

export default Homepage