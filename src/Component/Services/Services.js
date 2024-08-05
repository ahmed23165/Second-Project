import React from 'react'
import Services1 from '../Services1/Services1'
import Services2 from '../Services2/Services2'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import Footer1 from '../Footer1/Footer1'

const Services = () => {
  return (
    <div className='app'>
      <Services1/>
      <Services2 />
      <Card />
      <Footer1 />
    </div>
  )
}

export default Services
