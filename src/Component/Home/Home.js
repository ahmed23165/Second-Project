import React from 'react'
import Navbars from '../Navbars/Navbars'
import Design from '../Design/Design';
import ArchLab from '../ArchLab/ArchLab';
import Arch1 from '../Arch1/Arch1';
import Geometry from '../Geometry/Geometry';
import Clients from '../Clients/Clients';
import Card from '../Card/Card';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div className='app'>
       <Navbars />
      <Design />
      <ArchLab />
      <Arch1 />
      <Geometry />
      <Clients />
      <Card />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home