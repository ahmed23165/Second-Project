import React from 'react'
import About1 from '../About1/About1'
import ArchLab from '../ArchLab/ArchLab'
import Arch1 from '../Arch1/Arch1'
import Clients from '../Clients/Clients'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import Footer1 from '../Footer1/Footer1'

const About = () => {
  return (
    <div className='app'>
      <About1 />
      <ArchLab />
      <Arch1 />
      <Clients />
      <Card />
            
      <Footer1 />
    </div>
  )
}

export default About
